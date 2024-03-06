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
        <div className="mb-4 mt-8">
          <button className="border border-gray-50 p-3 mr-1 text-sm rounded-md hover:bg-slate-50 hover:text-slate-950 transition-all">
            Update email
          </button>
          <button className="border border-gray-50 p-3 ml-1 text-sm rounded-md hover:bg-slate-50 hover:text-slate-950 transition-all">
            Update password
          </button>
        </div>
        <form action="" className="max-w-[496px]">
          <input
            type="text"
            name=""
            id=""
            value={""}
            placeholder="Name"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700"
          />
          <input
            type="text"
            name=""
            id=""
            value={""}
            placeholder="youremail@email.com"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700"
          />
          <input
            type="text"
            name=""
            id=""
            value={""}
            placeholder="CPF"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700"
          />
          <input
            type="text"
            name=""
            id=""
            value={""}
            placeholder="password"
            className="p-3 rounded-md w-full mb-4 bg-neutral-700"
          />
          <input
            type="submit"
            value={"update"}
            className="p-3 w-full border border-gray-400 rounded-md transition-all bg-gray-200"
          />
        </form>
      </div>
    </div>
  );
}
