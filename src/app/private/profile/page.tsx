"use client";
import ProfileScreen from "@/screens/ProfileScreen";
import { user } from "@/utils/user";

export default function Profile() {
  const { getUser, updateEmail, updatePassword, updateName, deleteUser } =
    user();

  return (
    <ProfileScreen
      getUser={getUser}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      updateName={updateName}
      deleteUser={deleteUser}
    />
  );
}
