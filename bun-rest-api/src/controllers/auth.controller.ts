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
  jwt,
  set,
}: any) => {
  try {
    const { email, password } = body;

    const user = await loginUser(
      email,
      password
    );

    const token = await jwt.sign({
      uuid: user.uuid,
      email: user.email,
    });

    return {
      success: true,
      message: "Giriş başarılı",
      token,
      user: {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error: any) {
    set.status = 400;

    return {
      success: false,
      message: error.message,
    };
  }
};

export const meController = async ({
  user,
}: any) => {
  return {
    success: true,
    user,
  };
};