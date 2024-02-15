"use client"; /*Também pode ser server componente */
import LoginScreen from "@/screens/LoginScreen";
import { auth } from "@/utils/auth";

export default function Login({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const redirect_url = searchParams.redirect_url;
  const { login } = auth();
  return <LoginScreen login={login} redirect_url={redirect_url} />;
}
