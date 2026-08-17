import { testDbConnection } from "../config/db.js";

export async function getHealthStatus() {
  const dbStatus = await testDbConnection();

  return {
    success: true,
    message: "SecureVault AI API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    database: dbStatus,
  };
}
