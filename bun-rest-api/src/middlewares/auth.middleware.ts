import { User } from "../models/user.model";

export const authMiddleware = async ({
  jwt,
  headers,
}: any) => {
  const authHeader = headers.authorization;

  if (!authHeader) {
    throw new Error("Token gerekli");
  }

  const token = authHeader.replace("Bearer ", "");

  const payload = await jwt.verify(token);

  if (!payload) {
    throw new Error("Geçersiz token");
  }

  const user = await User.findOne({
    uuid: payload.uuid,
  }).select("-password");

  return {
    user,
    role: payload.role,
  };
};