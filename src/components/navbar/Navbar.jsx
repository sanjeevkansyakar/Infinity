"use client";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { navbarLinks } from "@/constants/index";
import Link from "next/link";

function Navbar() {
  return (
    <section className="flex flex-col justify-center items-center z-10 w-[65px] h-[330px] bg-black fixed top-[25%] rounded-tr-3xl rounded-br-3xl gap-7 max-md:hidden">
      {navbarLinks.map((item) => (
        <div className="flex flex-col" key={item.label}>
          <Link
            href={item.route}
            data-tooltip-id={item.label}
            data-tooltip-content={item.label}
            data-tooltip-offset={25}
            key={item.label}
          >
            <div className="text-3xl text-white">{item.imgURL}</div>
          </Link>
          <Tooltip
            id={item.label}
            place="left"
            style={{
              backgroundImage: "black",
              color: "white",
              padding: "7px 15px",
              borderRadius: "8px",
            }}
          />
        </div>
      ))}
    </section>
  );
}

export default Navbar;
