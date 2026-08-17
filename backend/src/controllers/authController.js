import { registerUser, loginUser, getUserProfile } from "../services/authService.js";

export async function register(req, res, next) {
  try {
    const { email, password, name } = req.body;
    const result = await registerUser({ email, password, name });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export async function logout(req, res) {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
}

export async function getMe(req, res, next) {
  try {
    const profile = await getUserProfile(req.user.id);

    res.status(200).json({
      success: true,
      data: {
        user: profile || req.user,
      },
    });
  } catch (error) {
    next(error);
  }
}
