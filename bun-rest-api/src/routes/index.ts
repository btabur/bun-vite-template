import { Elysia } from "elysia";

import { authRoutes } from "./auth.route";

export const routes = new Elysia()

  .use(authRoutes);