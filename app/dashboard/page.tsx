// "use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Sidebar from "@/components/Sidebar";

const Dashboard = async () => {
  // THIS IS USE FOR SERVER COMPONENT
  const session = await getServerSession(authOptions);
  console.log("%c Line:12 🍤 session", "color:#3f7cff", session);
  if (!session?.user) {
    redirect("/");
  }

  // THIS IS USE FOR CLIENT COMPONENTS
  // const { data: session, update } = useSession();
  // const router = useRouter()
  // console.log("%c Line:15 🌭 session", "color:#4fff4B", session);

  // if (!session) {
  //   router.push("/")
  // }
  return (
    <>
    <Sidebar/>
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-[500px]:text-2xl">E-shop</h1>
    </div>
    </>
  );
};
export const maxDuration = 300

export default Dashboard;
