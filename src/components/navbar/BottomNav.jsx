"use client";

import { navbarLinks } from "@/constants/index";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

function BottomNav() {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {navbarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.label}
            data-tooltip-id={link.label}
            data-tooltip-content={link.label}
            data-tooltip-offset={25}
          >
            <div className="text-3xl text-white">{link.imgURL}</div>
            <Tooltip
              id={link.label}
              place="top"
              style={{
                backgroundImage: "black",
                color: "white",
                padding: "7px 15px",
                borderRadius: "8px",
              }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BottomNav;
