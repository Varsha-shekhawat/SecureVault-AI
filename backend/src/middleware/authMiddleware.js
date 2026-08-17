import jwt from "jsonwebtoken";
import prisma from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET || "secure_vault_ai_jwt_secret_change_in_production";

export async function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.headers.cookie) {
      // Check cookies for token if passed
      const cookies = Object.fromEntries(
        req.headers.cookie.split("; ").map((c) => c.split("="))
      );
      token = cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: { message: "Authentication required. No token provided." },
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    // Try fetching user from database if accessible
    try {
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, email: true, name: true, avatarUrl: true, createdAt: true },
      });

      if (user) {
        req.user = user;
        return next();
      }
    } catch {
      // If DB is offline, attach payload from verified JWT
    }

    req.user = { id: decoded.id, email: decoded.email, name: decoded.name };
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        error: { message: "Authentication token expired. Please log in again." },
      });
    }
    return res.status(401).json({
      success: false,
      error: { message: "Invalid authentication token." },
    });
  }
}
