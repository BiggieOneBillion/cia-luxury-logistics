"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({ children }) {
  const pathName = usePathname();

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h2 className="text-lg font-semibold text-black">Orders</h2>
        <ul className="order-links flex justify-start items-center gap-5 text-black">
          <Link
            href={"/dashboard/orders"}
            className={`${
              pathName == "/dashboard/orders"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } px-2 py-1 border rounded-lg active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out text-sm capitalize font-medium`}
          >
            All Orders
          </Link>
          <Link
            href={"/dashboard/orders/recent-orders"}
            className={`${
              pathName == "/dashboard/orders/recent-orders"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } px-2 py-1 border rounded-lg active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out text-sm capitalize font-medium`}
          >
            Recent Orders
          </Link>
          <Link
            href={"/dashboard/orders/urgent-orders"}
            className={`${
              pathName == "/dashboard/orders/urgent-orders"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } px-2 py-1 border rounded-lg active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out text-sm capitalize font-medium`}
          >
            urgent orders
          </Link>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
