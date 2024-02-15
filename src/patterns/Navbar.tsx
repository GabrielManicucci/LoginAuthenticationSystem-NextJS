import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { MdLogin, MdLogout } from "react-icons/md";
import { cookies } from "next/headers";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";

export default function NavBar() {
  let session = false;
  const cookie = cookies().get("session");
  if (cookie) session = true;

  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 border-b border-gray-500">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">Ecomm</h1>
      </Link>

      <div className="flex items-center">
        <ModeToggle />
        <IoIosSearch className="mx-3" size={24} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FiMenu size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-3 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/"}>
              <DropdownMenuItem className="cursor-pointer p-2">
                Home
              </DropdownMenuItem>
            </Link>
            <Link href={"/private/profile"}>
              <DropdownMenuItem className="cursor-pointer p-2">
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href={"/session/login"}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-6">Login</span>
                <MdLogin size={20} />
              </DropdownMenuItem>
            </Link>
            <Link href={"/session/signup"}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-4">Signup</span>
                <MdLogin size={20} />
              </DropdownMenuItem>
            </Link>
            <Link href={"/api/auth/logout"} className={session ? "" : "hidden"}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-5">Logout</span>
                <MdLogout size={20} />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
