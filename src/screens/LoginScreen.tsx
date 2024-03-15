"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
import { Login } from "@/utils/auth";
import { useState } from "react";
import { loginSchema } from "@/schemas/auth";

export type UserSchema = z.infer<typeof loginSchema>;

export default function LoginScreen({ login, redirect_url }: Login) {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function loginUser({ email, password }: UserSchema) {
    setErrorMessage("");

    try {
      const data = await login({ email, password });

      if (redirect_url) {
        // router.replace(`${redirect_url}`);
        location.replace(`${redirect_url}`);
      } else {
        location.replace("/");
      }
    } catch (error) {
      setErrorMessage("Email não encontrado ou senha inválida");
      // console.log(error);
    }
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
              className="p-3 hover:brightness-75 bg-gray-200 rounded-md mt-5 text-gray-950 font-medium transition-all"
            />
            {errorMessage && (
              <div
                onClick={() => setErrorMessage("")}
                className="p-2 mt-4 border rounded-md border-red-600 text-red-950 bg-red-400 text-sm"
              >
                <p>{errorMessage}</p>
              </div>
            )}
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
