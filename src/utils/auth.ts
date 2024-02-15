import { UserSchema as LoginUserSchema } from "@/screens/LoginScreen";
import { UserSchema as SignupUserSchema } from "@/screens/SignupScreen";
import axios from "axios";

export type Auth = {
  login: ({ email, password }: LoginUserSchema) => Promise<object>;
  redirect_url?: string;
};

export const auth = () => ({
  login: async ({ email, password }: LoginUserSchema) => {
    const user = {
      token: Math.random() * 10,
      user: {
        email,
        password,
        name: "Gabriel Manicucci",
      },
    };

    const response = await axios.post("/api/auth/login", user);
    // console.log(response);
    return response;

    // console.log(location.origin.);
    // cookies().set("session", userData, { httpOnly: true });
    // const redirectPrivateProfile = cookies().get("private")?.value;

    // if (redirectPrivateProfile) redirect(`${redirectPrivateProfile}`);

    // redirect("/");
  },
});
