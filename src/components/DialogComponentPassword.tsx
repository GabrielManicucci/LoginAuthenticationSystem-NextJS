import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { updatePasswordSchema } from "@/schemas/updates";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type Props = {
  updatePasswordHandle: (
    emailForm: UpdatePasswordSchema
  ) => Promise<object | unknown>;
  errorMessage: string;
  successMessage: string;
  errorMessageHandle: (data: string) => void;
  successMessageHandles: (data: string) => void;
};

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;

export default function DialogComponentPassword({
  errorMessage,
  errorMessageHandle,
  updatePasswordHandle,
  successMessage,
  successMessageHandles,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 border-gray-400 p-3 rounded-md hover:bg-gray-300 hover:border-gray-300 dark:hover:text-gray-950 transition-all text-sm">
          Update password
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update your password</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(updatePasswordHandle)}
          className="grid gap-0 py-4"
        >
          <div className="grid grid-rows-2 grid-flow-col items-center gap-0">
            <input
              id="name"
              placeholder="Enter your new email"
              className="col-span-3 p-3 rounded-md bg-neutral-700 text-gray-300 text-base"
              {...register("newPassword")}
              onFocus={() => {
                errorMessageHandle("");
                successMessageHandles("");
              }}
            />

            {errors.newPassword && (
              <span className="text-red-500 text-sm font-medium">
                {errors.newPassword.message}
              </span>
            )}
          </div>

          <div className="grid grid-flow-col items-center gap-0 grid-rows-2 ">
            <input
              id="username"
              placeholder="Enter your current password"
              className="col-span-3 p-3 rounded-md bg-neutral-700 tex text-gray-300 text-base"
              {...register("password")}
              onFocus={() => {
                errorMessageHandle("");
                successMessageHandles("");
              }}
            />

            {errors.password && (
              <span className="text-red-500 text-sm font-medium">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="border p-3 rounded-md transition-all hover:brightness-75 bg-gray-300 text-gray-950"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex justify-center items-center">
                Criando...{" "}
                <AiOutlineLoading3Quarters className="animate-spin ml-3" />
              </span>
            ) : (
              "Save Changes"
            )}
          </button>

          {successMessage && (
            <div className="p-2 mt-4 border-2 text-green-950 bg-green-400 text-sm rounded-md border-green-900 text-center">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="p-2 mt-4 border-2 border-red-900 rounded-mdborder-red-600 text-red-950 bg-red-400 text-sm rounded-md text-center">
              {errorMessage}
            </div>
          )}
        </form>
        {/* <DialogFooter>
          <button
            type="submit"
            className="border p-3 rounded-md transition-all hover:brightness-75 bg-gray-300 text-gray-950"
          >
            Save changes
          </button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
