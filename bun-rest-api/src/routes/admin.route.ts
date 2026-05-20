import { Elysia } from "elysia";
import { roleGuard } from "../middlewares/role.middleware";

export const adminRoutes = new Elysia({
  prefix: "/admin",
})
  .derive(roleGuard(["admin"]))

  .get("/dashboard", () => {
    return {
      success: true,
      message: "Admin panel",
    };
  });