import { User } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

import {
  hashPassword,
  comparePassword,
} from "../utils/hash";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("Bu mail kullanılıyor, lütfen başka bir mail deneyin");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    uuid: uuidv4(),
    name,
    email,
    password: hashedPassword,
  });

  return {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
  };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Bu mail ile kayıtlı bir kullanıcı bulunamadı");
  }

  const isPasswordValid = await comparePassword(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Bu şifre yanlış, lütfen tekrar deneyin");
  }

  return user;
};