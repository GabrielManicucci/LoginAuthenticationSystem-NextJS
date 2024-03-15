"use client";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ErrorType, Signup } from "@/utils/auth";
import { signupSchema } from "@/schemas/auth";

export type UserSchema = z.infer<typeof signupSchema>;

export default function SignupScreen({ signup }: Signup) {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(signupSchema),
  });

  const handleChange = (value: string): string => {
    let cpfValue: string = value;
    cpfValue = cpfValue.replace(/\D/g, ""); // Remove caracteres não numéricos
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o primeiro ponto
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o segundo ponto
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço

    return cpfValue;
  };

  async function signupUser({ name, cpf, email, password }: UserSchema) {
    setErrorMessage("");

    try {
      const response = await signup({ name, cpf, email, password });
      console.log(response);

      location.replace("/session/login");
    } catch (err: any) {
      const { response } = err as ErrorType;
      console.log(err);
      console.log(response?.data.error);

      setErrorMessage(response?.data.error || "Houve um erro ao criar conta");
    }
  }

  return (
    <div>
      <div className="w-full flex flex-col mt-12 text-center">
        <h2 className="text-xl font-medium mb-7">Welcome to Ecomm</h2>
        <form
          className="px-5 flex flex-col justify-center items-center"
          action=""
          onSubmit={handleSubmit(signupUser)}
        >
          <div className="flex flex-col w-11/12">
            <div className="flex flex-col mb-2">
              <input
                className="p-2 mb-1 bg-stone-700 rounded-md"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <input
                className="p-2 mb-1 bg-stone-700 rounded-md"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <input
                className="p-2 mb-1 bg-stone-700 rounded-md"
                type="text"
                placeholder="CPF: 000.000.000-00"
                {...register("cpf")}
                onChange={(e) => {
                  e.target.value = handleChange(e.target.value);
                }}
              />
              {errors.cpf && (
                <span className="text-red-500 text-sm">
                  {errors.cpf.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="p-2 mb-1 bg-stone-700 rounded-md"
                type="text"
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
              value="Signup"
              className="p-3 bg-gray-200 rounded-md mt-5 text-gray-950 font-medium"
            />

            {errorMessage && (
              <div
                onClick={() => setErrorMessage("")}
                className="p-2 mt-4 border rounded-mdborder-red-600 text-red-950 bg-red-400 text-sm rounded-md border-red-400"
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
