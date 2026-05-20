import { Elysia } from "elysia";

import {
  registerController,
  loginController,
  meController,
} from "../controllers/auth.controller";

import { authMiddleware } from "../middlewares/auth.middleware";

export const authRoutes = new Elysia({
  prefix: "/auth",
})

  .post("/register", registerController)

  .post("/login", loginController)

  .derive(authMiddleware)

  .get("/me", meController);