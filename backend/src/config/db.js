import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

export async function testDbConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { connected: true, message: "MySQL database connected successfully via Prisma" };
  } catch (error) {
    return {
      connected: false,
      message: "Database connection pending or offline",
      error: error.message,
    };
  }
}

export default prisma;
