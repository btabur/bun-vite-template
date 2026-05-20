import "dotenv/config";
import { Elysia } from "elysia";
import { connectDB } from "./config/db";
import { routes } from "./routes";
import { jwtPlugin } from "./plugins/jwt";

await connectDB();

const app = new Elysia()

  .get("/", () => ({
    success: true,
    message: "API running 🚀",
  }))
  .use(jwtPlugin)
  .use(routes)
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Server running at http://${app.server?.hostname}:${app.server?.port}`
);