import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateEmailSchema } from "@/schemas/updates";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>;

export type Props = {
  updateEmailHandle: (
    emailForm: UpdateEmailSchema
  ) => Promise<object | unknown>;
  errorMessage: string;
  errorMessageHandle: (data: string) => void;
};

export default function DialogComponentEmail({
  updateEmailHandle,
  errorMessage,
  errorMessageHandle,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateEmailSchema>({
    resolver: zodResolver(updateEmailSchema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-gray-400 p-3 rounded-md hover:bg-gray-300 hover:border-gray-300 dark:hover:text-gray-950 transition-all text-sm">
          Update email
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update your email</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(updateEmailHandle)}
          className="grid gap-0 py-4"
        >
          <div className="grid grid-rows-2 grid-flow-col items-center gap-0">
            <input
              id="name"
              placeholder="Enter your new email"
              className="col-span-3 p-3 rounded-md bg-neutral-700 text-gray-300 text-base"
              {...register("newEmail")}
              onFocus={() => errorMessageHandle("")}
            />

            {errors.newEmail && (
              <span className="text-red-500 text-sm font-medium">
                {errors.newEmail.message}
              </span>
            )}
          </div>

          <div className="grid grid-flow-col items-center gap-0 grid-rows-2 ">
            <input
              id="username"
              placeholder="Enter your password"
              className="col-span-3 p-3 rounded-md bg-neutral-700 tex text-gray-300 text-base"
              {...register("password")}
            />

            {errors.password && (
              <span className="text-red-500 text-sm font-medium">
                {errors.password.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value={"Save changes"}
            className="border p-3 rounded-md transition-all hover:brightness-75 bg-gray-300 text-gray-950"
          />

          {errorMessage && (
            <div className="p-2 mt-4 border rounded-mdborder-red-600 text-red-950 bg-red-400 text-sm rounded-md border-red-400 text-center">
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
