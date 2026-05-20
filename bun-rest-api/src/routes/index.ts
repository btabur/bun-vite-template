import { Elysia } from "elysia";

import { authRoutes } from "./auth.route";
import { adminRoutes } from "./admin.route";

export const routes = new Elysia()
.use(authRoutes)
.use(adminRoutes)