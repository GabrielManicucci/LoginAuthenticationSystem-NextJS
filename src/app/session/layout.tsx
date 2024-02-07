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
      <div>
        <p className="pb-10">
          <Link
            className={clsx({
              "border-b": pathname !== "/session/login",
            })}
            href={"/session/login"}
          >
            Login
          </Link>{" "}
          or{" "}
          <Link
            className={clsx({
              "border-b": pathname !== "/session/signup",
            })}
            href={"/session/signup"}
          >
            Signup
          </Link>
        </p>
      </div>
      {children}
    </div>
  );
}
