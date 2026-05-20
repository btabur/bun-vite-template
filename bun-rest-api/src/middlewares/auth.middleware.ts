import { User } from "../models/user.model";

export const authMiddleware = async ({
  jwt,
  headers,
  set,
}: any) => {
  const authHeader = headers.authorization;

  if (!authHeader) {
    set.status = 401;

    throw new Error("Token gerekli");
  }

  const token = authHeader.replace(
    "Bearer ",
    ""
  );

  const payload = await jwt.verify(token);

  if (!payload) {
    set.status = 401;

    throw new Error("Geçersiz token");
  }

  const user = await User.findOne({
    uuid: payload.uuid,
  }).select("-password");

  if (!user) {
    set.status = 401;

    throw new Error("Kullanıcı bulunamadı");
  }

  return {
    user,
  };
};