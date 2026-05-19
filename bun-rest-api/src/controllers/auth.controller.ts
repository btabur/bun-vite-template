import {
  registerUser,
  loginUser,
} from "../services/auth.service";

export const registerController = async ({
  body,
  set,
}: any) => {
  try {
    const { name, email, password } = body;

    const user = await registerUser(
      name,
      email,
      password
    );

    return {
      success: true,
      message: "Kayıt başarılı",
      user,
    };
  } catch (error: any) {
    set.status = 400;

    return {
      success: false,
      message: error.message,
    };
  }
};

export const loginController = async ({
  body,
  set,
}: any) => {
  try {
    const { email, password } = body;

    const user = await loginUser(
      email,
      password
    );

    return {
      success: true,
      message: "Giriş başarılı",
      user,
    };
  } catch (error: any) {
    set.status = 400;

    return {
      success: false,
      message: error.message,
    };
  }
};