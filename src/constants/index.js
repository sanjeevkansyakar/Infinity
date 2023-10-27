import { BiEdit, BiHomeSmile, BiNews } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

export const navbarLinks = [
  {
    imgURL: <BiHomeSmile />,
    route: "/",
    label: "Home",
  },
  {
    imgURL: <BiNews />,
    route: "/blog",
    label: "Blog",
  },
  {
    imgURL: <BsPersonVcard />,
    route: "/personal-blog",
    label: "Personal Blog",
  },
  {
    imgURL: <BiEdit />,
    route: "/write",
    label: "Write",
  },
  {
    imgURL: <SiAboutdotme />,
    route: "/about",
    label: "About",
  },
];
