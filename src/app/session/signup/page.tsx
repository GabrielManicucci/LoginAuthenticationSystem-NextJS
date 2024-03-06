"use client";
import SignupScreen from "@/screens/SignupScreen";
import { auth } from "@/utils/auth";

export default function Signup() {
  const { signup } = auth();
  return <SignupScreen signup={signup} />;
}
