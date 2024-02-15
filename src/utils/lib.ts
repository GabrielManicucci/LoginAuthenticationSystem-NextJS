import { cookies } from "next/headers";

export function getSession() {
  const session = cookies().get("session");

  if (!session) return null;
  return session;
}
