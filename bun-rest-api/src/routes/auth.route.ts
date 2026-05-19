import { Elysia } from "elysia";

import {
  registerController,
  loginController,
} from "../controllers/auth.controller";

export const authRoutes = new Elysia({
  prefix: "/auth",
})

  .post("/register", registerController)

  .post("/login", loginController);