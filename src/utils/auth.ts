import { UserSchema as LoginUserSchema } from "@/screens/LoginScreen";
import { UserSchema as SignupUserSchema } from "@/screens/SignupScreen";
import { api, axios } from "@/lib/axios";
import { AxiosResponse } from "axios";

export type ErrorType = AxiosResponse & {
  response: {
    data: {
      error: string
    }
  }
}

export type Login = {
  login: ({ email, password }: LoginUserSchema) => Promise<object>;
  redirect_url?: string;
};

export type Signup = {
  signup: ({name, email, cpf, password}: SignupUserSchema) => Promise<object>
}

export const auth = () => ({
  login: async ({ email, password }: LoginUserSchema) => {
    const userData = {
        email,
        password,
    };

    const response = await axios.post("/api/auth/login", userData);
    // console.log(response);
    return response;

    // console.log(location.origin.);
    // cookies().set("session", userData, { httpOnly: true });
    // const redirectPrivateProfile = cookies().get("private")?.value;

    // if (redirectPrivateProfile) redirect(`${redirectPrivateProfile}`);

    // redirect("/");
  },

  signup: async ({name, email, cpf, password}: SignupUserSchema) => {
    const userDataSignup = {
      name,
      email,
      cpf,
      password
    }

    const response = await api.post("/signup", userDataSignup)
    return response
  }
});
