/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { MdLogin, MdLogout } from "react-icons/md";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";
import axios from "axios";

type Session = {
  session: RequestCookie | null;
};

export default function NavBar({ session }: Session) {
  const router = useRouter();

  async function logout() {
    const response = await axios.get("/api/auth/logout");
    location.replace("/");
    // router.replace("/");
  }

  return (
    <nav className="w-full h-24 flex items-center justify-between px-6 border-b border-gray-500">
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
            <Link href={"/session/login"} className={session ? "hidden" : ""}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-6">Login</span>
                <MdLogin size={20} />
              </DropdownMenuItem>
            </Link>
            <Link href={"/session/signup"} className={session ? "hidden" : ""}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-4">Signup</span>
                <MdLogin size={20} />
              </DropdownMenuItem>
            </Link>
            <button onClick={logout} className={session ? "w-full" : "hidden"}>
              <DropdownMenuItem className="flex cursor-pointer p-2">
                <span className="mr-5">Logout</span>
                <MdLogout size={20} />
              </DropdownMenuItem>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

// session ? "hidden" : ""
// session ? "w-full" : "hidden"
