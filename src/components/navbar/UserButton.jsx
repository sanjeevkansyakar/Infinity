"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

const UserButton = () => {
  const { data } = useSession();

  const [visibleNav, setVisibleNav] = useState(false);
  return (
    <div>
      <button
        className="h-10 w-10 relative overflow-hidden rounded-full bg-white"
        onClick={() => setVisibleNav((stat) => !stat)}
      >
        {data.user?.image ? (
          <Image
            src={data.user?.image}
            height={40}
            width={40}
            alt="user"
            className="object-cover"
          />
        ) : (
          <Image src="/manicon.webp" alt="user" height={40} width={40} />
        )}
      </button>
      {visibleNav && (
        <>
          <div className="absolute z-10 cursor-pointer h-60 w-60 px-2 py-4 rounded-xl right-0 bg-white shadow-xl shadow-stone-400 flex flex-col justify-between items-center gap-2">
            <div className="relative rounded-full overflow-hidden flex items-center justify-center">
              {data.user?.image ? (
                <Image
                  src={data.user?.image}
                  height={80}
                  width={80}
                  alt="user"
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/manicon.webp"
                  alt="user"
                  height={80}
                  width={80}
                  className="object-cover"
                />
              )}
            </div>
            <p className="text-md font-semibold text-gray-300">
              Hi, {data.user?.name} !
            </p>
            <span className="text-sm ">{data.user?.email}</span>
            <Button
              className="focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black/90 text-white text-semibold rounded-xl hover:bg-black/70"
              onClick={() => {
                setVisibleNav(false);
                signOut({
                  callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/`,
                });
              }}
            >
              Sign Out
            </Button>
            <span
              className="absolute h-6 w-6 right-5 flex items-center justify-center rounded-full hover:bg-stone-100 top-5 hover:animate-spin"
              onClick={() => setVisibleNav(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 font-semibold "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default UserButton;
