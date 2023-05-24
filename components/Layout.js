import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-yellow-600 w-screen h-screen flex items-center">
        <div className="w-full text-center">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}>
            Login With Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-4 mr-4 rounded-lg p-4 mb-4">
        {children}
        <button className=" text-white" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    </div>
  );
}
