import Button from "@/components/Button";
import HeroCarousel from "@/components/HeroCarousel";
import HomeNavbar from "@/components/navbar/HomeNavbar";
import Image from "next/image";
import Link from "next/link";
import { RiFingerprint2Line } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <section className="flex flex-col gap-3 max-md:pb-10">
        {/* Hero title */}
        <div className="max-md:h-[40vh] h-[70vh] max-w-10xl mx-auto flex flex-col justify-center items-center text-5xl md:text-7xl text-center gap-4">
          <p className="font-semibold text-3xl font-sans">Infinity Blog</p>
          <Image
            src="/assets/herocanva.svg"
            height={50}
            width={250}
            alt="canva"
          />
          <h2 className="font-serif font-semibold">
            Stories, thoughts,
            <br /> ideas & more
          </h2>
          <Link href="/blog">
            <Button className="text-xl px-24 py-4 font-medium font-serif rounded-full border border-black hover:bg-white transition-all hover:scale-105 duration-200 ease-in-out max-md:px-10 max-md:py-3">
              Start Reading
            </Button>
          </Link>
        </div>

        {/* Hero Carousel Container */}

        <HeroCarousel />

        <div className="bg-[#f4e2d8] w-full h-screen px-3 py-10 font-sans">
          <div className="max-w-5xl h-full flex flex-col items-center justify-center gap-16 md:gap-32 mx-auto">
            <div className="text-5xl md:text-6xl text-center flex flex-col gap-8">
              <h2 className="font-serif font-semibold">
                We didn&apos;t reinvented the <br /> wheel, just simplified.
              </h2>
              <p className="text-2xl max-md:hidden">
                Welcome to our blog platform, where human stories and ideas find
                a home, <br /> and words have the power to unite, inspire, and
                empower.
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-xl text-center gap-8">
              <div>
                <div className="flex justify-center">
                  <RiFingerprint2Line className="h-20 w-20 animate-pulse" />
                </div>
                <p>
                  SignUp to a start writing blog as many as you&apos;d like.
                </p>
              </div>
              <div>
                <div className="flex justify-center">
                  <BsRobot className="h-20 w-20 animate-bounce " />
                </div>
                <p>
                  Experience the power of AI-assisted blogging with our
                  intuitive text editor and easily manage your blogs.
                </p>
              </div>
              <div>
                <div className="flex justify-center">
                  <GrPowerCycle className="h-20 w-20 animate-spin" />
                </div>
                <p>
                  You can re-edit the designs & content until you&lsquo;re 100%
                  satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get started */}
        <div className="w-full h-[60vh] md:h-screen md:pl-16 xl:pl-32 py-14 font-serif flex max-md:flex-col justify-center items-center">
          <div className="w-full md:w-1/3 flex flex-col justify-center max-md:items-center gap-4 md:gap-14 max-md:max-w-xs">
            <h2 className="text-3xl md:text-6xl font-bold max-md:text-center tracking-wide">
              Get started with Infinity today.
            </h2>
            <Link href="/write">
              <button className="text-xl font-medium px-24 py-4 border rounded-full border-black w-fit max-md:px-10 max-md:py-3 hover:bg-white transition-all hover:scale-105 duration-200 ease-in-out">
                Start Writing
              </button>
            </Link>
          </div>
          <div className="relative w-full md:w-2/3 h-full">
            <Image
              src="/assets/trial6.png"
              alt="icon"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        {/* Footer */}
        <footer className="flex w-full px-10 py-20 max-md:flex-col gap-10 bg-black text-white">
          <div className="flex flex-col w-1/2 gap-20 max-md:w-full">
            <h2 className="text-5xl font-extrabold">Infinity</h2>
            <p className="text-2xl text-gray-400">
              Design and Developed by{" "}
              <span className="text-white underline">Ayush & Sanju</span>
            </p>
          </div>

          <div className="flex flex-col w-1/2 gap-10 max-md:w-full">
            <h2 className="text-2xl font-semibold">Contact</h2>

            <div className="flex gap-40 max-sm:flex-col max-sm:gap-14">
              <div>
                <h4 className="text-gray-400 font-semibold mb-5">EMAIL</h4>
                <Link
                  href="mailto:mr.ayush2511@gmail.com"
                  className="text-lg hover:text-gray-400"
                >
                  mr.ayush2511@gmail.com
                </Link>
                <br />
                <Link
                  href="mailto:sanjeevkansyakar789@gmail.com"
                  className="text-lg hover:text-gray-400"
                >
                  sanjeevkansyakar789@gmail.com
                </Link>
              </div>
              <div>
                <h4 className="text-gray-400 font-semibold mb-5">SOCIALS</h4>
                <div className="flex gap-7 text-3xl ">
                  <Link href="https://www.github.com">
                    <BsGithub className="hover:scale-110 hover:shadow-md rounded-full hover:shadow-white-100" />
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <BsLinkedin className="hover:scale-110 hover:shadow-md hover:shadow-white-100" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default HomePage;
