"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

type UserSchema = z.infer<typeof schema>;

export default function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(schema),
  });

  async function loginUser(formData: UserSchema) {
    // console.log(formData);
    // const allow = await auth.signin(formData.email, formData.password);
    // router.push("/private/profile");
    // const res = await fetch("http://localhost:5555/user/session", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    // console.log(data);
  }

  return (
    <div className="w-80">
      <div className="w-full flex flex-col mt-12 text-center">
        <h2 className="text-xl font-medium mb-7">Welcome to Ecomm</h2>
        <form
          className="px-1 flex flex-col justify-center items-center"
          action=""
          onSubmit={handleSubmit(loginUser)}
        >
          <div className="flex flex-col w-11/12">
            <div className="flex flex-col mb-3">
              <input
                className="p-2 mb-1 bg-stone-700 rounded-md"
                type="text"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="p-2 bg-stone-700 rounded-md"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Login"
              className="p-3 bg-gray-200 rounded-md mt-5 text-gray-950 font-medium"
            />
          </div>
          <div className="my-5 flex items-center">
            <div className="border-b border-gray-100 opacity-60 my-5 w-16" />
            <p className="mx-5">or</p>
            <div className="border-b border-gray-100 opacity-60 my-5 w-16" />
          </div>
          <div className="flex flex-col w-11/12">
            <button className="flex items-center justify-around border border-gray-500 rounded-md p-3">
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
