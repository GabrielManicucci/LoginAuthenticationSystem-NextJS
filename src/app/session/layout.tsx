"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      suppressHydrationWarning
      className="flex flex-col items-center justify-center py-24 w-full"
    >
      <div className="mb-10">
        <p className=" text-center">
          <Link
            className={clsx({
              "border-b-2 border-gray-400": pathname !== "/session/login",
            })}
            href={"/session/login"}
          >
            Login
          </Link>{" "}
          or{" "}
          <Link
            className={clsx({
              "border-b-2 border-gray-400": pathname !== "/session/signup",
            })}
            href={"/session/signup"}
          >
            Signup
          </Link>
        </p>
        {pathname === "/session/login" ? (
          <p className="text-sm pt-2 brightness-95">
            First register your account
          </p>
        ) : (
          ""
        )}
      </div>
      {children}
    </div>
  );
}
