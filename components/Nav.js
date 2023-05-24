import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { BiCategoryAlt, BiCog, BiLogOutCircle } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";
import { useRouter } from "next/router";
import { HiDeviceMobile } from "react-icons/hi";
import { signOut } from "next-auth/react";
export default function Nav() {
  const inactiveLink = "flex gap-2 p-2";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className=" text-white p-4 pr-0">
      <Link href="/" className="flex w-full h-6 gap-2 mb-4 mr-4">
        <FaStoreAlt class="h-6 w-6 text-white" />

        <span>EcommerceAdmin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href="/" className={pathname === "/" ? activeLink : inactiveLink}>
          <AiFillHome class="h-6 w-6 text-white" />
          Dashboard
        </Link>
        <Link
          href="/products"
          className={
            pathname.includes("/products") ? activeLink : inactiveLink
          }>
          <HiDeviceMobile class="h-6 w-6 text-white" />
          Products
        </Link>
        <Link
          href="/categories"
          className={
            pathname.includes("/categories") ? activeLink : inactiveLink
          }>
          <BiCategoryAlt class="h-6 w-6 text-white" /> Categories
        </Link>
        <Link
          href="/orders"
          className={pathname.includes("/orders") ? activeLink : inactiveLink}>
          <BsListCheck class="h-6 w-6 text-white" />
          Orders
        </Link>
        <button onClick={() => signOut()} className={inactiveLink}>
          <BiLogOutCircle class="h-6 w-6 text-white" />
          Log out
        </button>
      </nav>
    </aside>
  );
}
