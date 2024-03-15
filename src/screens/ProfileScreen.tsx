"use client";
import DialogComponentEmail, {
  UpdateEmailSchema,
} from "@/components/DialogComponentEmail";
import DialogComponentPassword, {
  UpdatePasswordSchema,
} from "@/components/DialogComponentPassword";
import { ChangeEvent, useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";

export type User = {
  name: string;
  email: string;
  cpf: string;
  password: string;
};

type ProfileScreenProps = {
  getUser: () => Promise<object | unknown>;
  updateEmail: (emailForm: UpdateEmailSchema) => Promise<object | unknown>;
  updatePassword: (
    passwordForm: UpdatePasswordSchema
  ) => Promise<object | unknown>;
};

export default function ProfileScreen({
  getUser,
  updateEmail,
  updatePassword,
}: ProfileScreenProps) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   async function fetchUser() {
  //     const userData = await getUserData();
  //   }
  //   fetchUser();
  // }, []);

  async function getUserData() {
    const response: any = await getUser();
    console.log(response.data);
    setUser(response.data);
  }

  const updateEmailHandle = async (emailForm: UpdateEmailSchema) => {
    const response: any = await updateEmail(emailForm);
    if (response.data.error) {
      setErrorMessage(response.data.error);
    } else {
      const { email }: User = response.data;
      setUser((prevData) => ({
        ...prevData,
        email,
      }));
      location.reload();
    }
  };

  const updatePasswordHandle = async (passwordForm: UpdatePasswordSchema) => {
    const response: any = await updatePassword(passwordForm);
    if (response.data.error) {
      setErrorMessage(response.data.error);
    } else {
      const { email }: User = response.data;
      setUser((prevData) => ({
        ...prevData,
        email,
      }));
      location.reload();
    }
  };

  function updateName(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      name: value,
    }));
    console.log(user);
  }

  function errorMessageHandler(data: string) {
    setErrorMessage(data);
  }

  return (
    <div className="flex flex-col items-center py-16 px-5">
      <div className="flex flex-col w-full sm:max-w-lg">
        <div>
          <h1 className="text-xl font-medium">Profile Screen</h1>
          <p className="opacity-80 text-sm">
            Update your profile details below
          </p>
        </div>
        <div className="mb-3 mt-8 flex">
          <div className="mr-2">
            <DialogComponentEmail
              updateEmailHandle={updateEmailHandle}
              errorMessage={errorMessage}
              errorMessageHandle={errorMessageHandler}
            />
          </div>
          <DialogComponentPassword
            errorMessageHandle={errorMessageHandler}
            errorMessage={errorMessage}
            updatePasswordHandle={updatePasswordHandle}
          />
        </div>
        <form action="" className="flex flex-col">
          <div className="rounded-md w-full mb-4 bg-neutral-700 flex items-center">
            <input
              type="text"
              name=""
              id=""
              onChange={updateName}
              value={`${user?.name}`}
              placeholder="Name"
              className="p-3 rounded-md w-full bg-neutral-700 text-neutral-100"
            />
          </div>
          <div className="pr-3 rounded-md w-full mb-4 bg-neutral-700 flex items-center">
            <input
              type="text"
              name=""
              id=""
              value={user.email}
              readOnly
              disabled
              placeholder="youremail@email.com"
              className="p-3 rounded-md w-full bg-neutral-700 text-neutral-400"
            />
            <FaLock className="text-neutral-400" />
          </div>
          <div className="pr-3 rounded-md w-full mb-4 bg-neutral-700 flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="CPF"
              className="p-3 rounded-md w-full bg-neutral-700 text-neutral-400"
              disabled
              value={user.cpf}
              readOnly
            />
            <FaLock className="text-neutral-400" />
          </div>
          <input
            type="submit"
            value={"update"}
            className="p-3 w-full borde rounded-md transition-all hover:brightness-75 bg-gray-300 text-gray-950"
          />
        </form>
      </div>
    </div>
  );
}
