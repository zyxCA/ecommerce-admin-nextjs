import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className=" text-blue-900  flex justify-between ">
        <h2>
          {" "}
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          {" "}
          <img src={session?.user?.image} alt="" className="h-8 w-8" />
          <span className="py-1 px-2"> {session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
