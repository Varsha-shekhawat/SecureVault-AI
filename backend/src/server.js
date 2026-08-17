import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[SERVER] SecureVault AI Backend API running on port ${PORT}`);
  console.log(`[SERVER] Health check endpoint: http://localhost:${PORT}/api/health`);
});

process.on("unhandledRejection", (err) => {
  console.error("[SERVER ERROR] Unhandled Rejection:", err);
});

export default server;
