export const roleGuard = (allowedRoles: string[]) => {
  return async ({ role, set }: any) => {
    if (!allowedRoles.includes(role)) {
      set.status = 403;

      throw new Error("Yetkisiz erişim");
    }
  };
};