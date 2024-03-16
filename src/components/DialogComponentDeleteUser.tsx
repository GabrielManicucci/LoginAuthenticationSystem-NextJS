import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { schemaUserDelete } from "@/schemas/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type SchemaUserDelete = z.infer<typeof schemaUserDelete>;

export type Props = {
  errorMessage: string;
  errorMessageHandle: (data: string) => void;
  handlesUserDelete: () => Promise<object | unknown>;
};

export default function DialogComponentDeleteUser({
  errorMessage,
  errorMessageHandle,
  handlesUserDelete,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaUserDelete>({
    resolver: zodResolver(schemaUserDelete),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 border-2 dark:border-red-500 rounded-md mt-4 text-sm hover:bg-red-500 transition-all dark:bg-inherit border-red-500 dark:hover:bg-red-500">
          Delete account
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete your account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? Click save when you
            are done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handlesUserDelete)}
          className="grid gap-0 py-4"
        >
          <div className="grid mb-4 grid-rows-2 grid-flow-col items-center gap-0">
            <input
              id="name"
              placeholder={`Type "delete" to confirm`}
              className="col-span-3 p-3 rounded-md bg-neutral-700 text-gray-300 text-base"
              {...register("confirmationText")}
              onFocus={() => errorMessageHandle("")}
            />

            {errors.confirmationText && (
              <span className="text-red-500 text-sm font-medium">
                {errors.confirmationText.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value={"Confirm"}
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
