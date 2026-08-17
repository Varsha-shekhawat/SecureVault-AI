import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET || "secure_vault_ai_jwt_secret_change_in_production";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// In-memory fallback store for offline testing when MySQL DB port 3306 is unavailable
const mockUserStore = new Map();

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

export async function registerUser({ email, password, name }) {
  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.statusCode = 400;
    throw error;
  }

  if (password.length < 6) {
    const error = new Error("Password must be at least 6 characters long");
    error.statusCode = 400;
    throw error;
  }

  const normalizedEmail = email.toLowerCase().trim();
  const hashedPassword = await bcrypt.hash(password, 10);

  let user = null;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      const error = new Error("Email address is already registered");
      error.statusCode = 409;
      throw error;
    }

    const createdUser = await prisma.user.create({
      data: {
        email: normalizedEmail,
        passwordHash: hashedPassword,
        name: name || normalizedEmail.split("@")[0],
      },
      select: {
        id: true,
        email: true,
        name: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    user = createdUser;
  } catch (error) {
    if (error.statusCode === 409 || error.statusCode === 400) throw error;

    // Fallback logic if MySQL DB server is currently offline
    if (mockUserStore.has(normalizedEmail)) {
      const err = new Error("Email address is already registered");
      err.statusCode = 409;
      throw err;
    }

    const mockId = `usr_${Date.now()}`;
    user = {
      id: mockId,
      email: normalizedEmail,
      name: name || normalizedEmail.split("@")[0],
      passwordHash: hashedPassword,
      createdAt: new Date().toISOString(),
    };
    mockUserStore.set(normalizedEmail, user);
  }

  const token = generateToken(user);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl || null,
      createdAt: user.createdAt,
    },
    token,
  };
}

export async function loginUser({ email, password }) {
  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.statusCode = 400;
    throw error;
  }

  const normalizedEmail = email.toLowerCase().trim();
  let user = null;

  try {
    user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash || "");
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }
  } catch (error) {
    if (error.statusCode === 401 || error.statusCode === 400) throw error;

    // Fallback check if MySQL is offline
    const mock = mockUserStore.get(normalizedEmail);
    if (!mock) {
      const err = new Error("Invalid email or password");
      err.statusCode = 401;
      throw err;
    }

    const isMatch = await bcrypt.compare(password, mock.passwordHash);
    if (!isMatch) {
      const err = new Error("Invalid email or password");
      err.statusCode = 401;
      throw err;
    }
    user = mock;
  }

  const token = generateToken(user);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl || null,
      createdAt: user.createdAt,
    },
    token,
  };
}

export async function getUserProfile(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    if (user) return user;
  } catch {
    // If DB is offline
  }

  // Find in mock store if DB offline
  for (const mock of mockUserStore.values()) {
    if (mock.id === userId) {
      return {
        id: mock.id,
        email: mock.email,
        name: mock.name,
        avatarUrl: null,
        createdAt: mock.createdAt,
      };
    }
  }

  return null;
}
