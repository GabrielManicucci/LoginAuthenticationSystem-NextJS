import { DialogComponentEmail } from "@/components/DialogComponentEmail";
import { DialogComponentPassword } from "@/components/DialogComponentPassword";

export default function ProfileScreen() {
  return (
    <div className="flex flex-col items-center py-16 px-5">
      <div className="flex flex-col">
        <div>
          <h1 className="text-xl font-medium">Profile Screen</h1>
          <p className="opacity-80 text-sm">
            Update your profile details below
          </p>
        </div>
        <div className="mb-3 mt-8 flex">
          <div className="mr-2">
            <DialogComponentEmail />
          </div>
          <DialogComponentPassword />
        </div>
        <form action="" className="max-w-[496px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700 text-gray-300"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="youremail@email.com"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700 text-gray-300"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="CPF"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700 text-gray-300"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="password"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700 text-gray-300"
          />
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
