"use client";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import Button from "../Button";
import { useSession } from "next-auth/react";
import UserButton from "./UserButton";

const HomeNavbar = () => {
  const { data } = useSession();
  return (
    <nav className="border-b shadow-lg shadow-primary/30">
      <div className="w-full py-3 px-8 md:px-24 xl:px-32 data-between">
        <div className="text-3xl md:text-4xl font-serif font-bold tracking-wide cursor-pointer">
          Infinity
        </div>
        <div className="hidden lg:data-between lg:gap-14">
          {navbarLinks.map((nav) => (
            <Link key={nav.label} href={nav.route}>
              <h3 className="text-xl font-mono hover:text-primary transition-all duration-150 ease-in-out">
                {nav.label}
              </h3>
            </Link>
          ))}
        </div>
        <div className="relative">
          {!data ? (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
