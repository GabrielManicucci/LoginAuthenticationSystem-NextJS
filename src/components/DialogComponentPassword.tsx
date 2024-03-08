import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogComponentPassword() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-gray-400 p-3 rounded-md hover:bg-gray-300 hover:border-gray-300 dark:hover:text-gray-950 transition-all text-sm">
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              id="name"
              placeholder="Enter your new password"
              className="col-span-3 p-3 rounded-md bg-neutral-700 text-gray-300"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              id="username"
              placeholder="Enter your current password"
              className="col-span-3 p-3 rounded-md bg-neutral-700 tex text-gray-300"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit"
            className="border p-3 rounded-md transition-all hover:brightness-75 bg-gray-300 text-gray-950"
          >
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
