import { Elysia, t } from "elysia";

import {
  registerController,
  loginController,
  meController,
} from "../controllers/auth.controller";

import { authMiddleware } from "../middlewares/auth.middleware";

export const authRoutes = new Elysia({
  prefix: "/auth",
})

 // REGISTER
.post("/register", registerController, {
  body: t.Object({
    name: t.String({ minLength: 2 }),
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 6 }),
  }),
})

// LOGIN
.post("/login", loginController, {
  body: t.Object({
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 6 }),
  }),
})

  .derive(authMiddleware)

  .get("/me", meController);