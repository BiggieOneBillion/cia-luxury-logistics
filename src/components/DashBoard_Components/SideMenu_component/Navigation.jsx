"use client";

import Link from "next/link";
import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { v4 } from "uuid";
import { usePathname } from "next/navigation";
import { FaCar } from "react-icons/fa";


const Navigation = () => {
  const pathName = usePathname();

  const navLinksData = [
    {
      name: "Analytics",
      icon: <SiGoogleanalytics />,
      path: "/dashboard",
    },
    {
      name: "Customers",
      icon: <IoPeopleOutline />,
      path: "/dashboard/customers",
    },
    {
      name: "Orders",
      icon: <GoPackage />,
      path: "/dashboard/orders",
    },
    {
      name: "Payment",
      icon: <MdOutlinePayment />,
      path: "/dashboard/payments",
    },
    {
      name: "Vehicle Management",
      icon: <FaCar />,
      path: "/dashboard/vehicle",
    },
  ];
  return (
    <nav className="space-y-10 flex-1 flex flex-col justify-start pt-20 gap-6">
      {navLinksData.map((links) => (
        <Link
          key={v4()}
          href={links.path}
          className={`${
            pathName == links.path
              ? "bg-black text-white"
              : "text-[rgba(0,0,0,0.8)]"
          } flex p-2 rounded-md items-center gap-3 text-gray-500y  active:scale-95 hover:scale-[.98] hover:translate-x-2y transition-transform duration-300 ease-in-out`}
        >
          <span className="text-lg ">{links.icon}</span>
          <span className="text-base font-medium">{links.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
