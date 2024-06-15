import Sidebar from "@/components/Sidebar";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
Sidebar;
export default async function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log("%c Line:12 🍤 session", "color:#3f7cff", session);
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className=" xl:ml-64">
      {" "}
      <Sidebar />
      {children}
    </main>
  );
}
