import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section className="max-w-10xl mx-auto pt-10">
        <div className="flex w-full p-8 max-lg:flex-col">
          <div className="flex flex-col text-9xl font-serif py-28 font-semibold w-1/2 max-lg:w-full max-lg:items-center max-sm:text-8xl max-md:py-12">
            <span>write</span>
            <span className="ml-24">better</span>
            <span>things</span>
          </div>

          <div className="flex flex-col items-center w-1/2 gap-6 max-lg:w-full max-lg:text-start max-lg:flex-row-reverse max-sm:flex-col">
            <div className="flex justify-center items-center max-lg:w-1/2">
              <Image src="/next.svg" alt="about" width={250} height={250} />
            </div>

            <div className="max-lg:w-1/2 max-sm:w-full">
              <h4 className="text-4xl font-serif font-medium max-md:text-3xl pb-5">
                Welcome to our Infinity platform, where human stories and ideas
                find a home, and words have the power to unite, inspire, and
                empower. In a world filled with digital noise and chaos, we
                offer a serene oasis of insightful content and collaborative
                creativity.
              </h4>

              <p className="text-gray-500 text-lg">
                In a time when superficial stories often grab the spotlight, we
                celebrate the depth, nuance, and the precious resource of your
                time well spent. Here, we are crafting a space where content
                with real meaning takes precedence over superficial packaging.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 justify-center items-center mx-10 my-20 p-14 rounded-sm bg-[#d5c7ff] max-sm:m-7 max-sm:p-8  ">
          <RiDoubleQuotesL className="text-5xl text-[#4310fd94]" />

          <span className="text-4xl font-semibold text-center max-w-2xl max-sm:text-3xl">
            &ldquo;Where thoughts take shape, words find meaning, and stories
            come alive.&quot;
          </span>
          <span className="font-spaceGrotesk text-2xl font-bold italic">
            InfinitY
          </span>
          <Image
            src="/assets/about1.svg"
            alt="about"
            width={170}
            height={170}
            className="absolute -left-9 bottom-8"
          />
        </div>
      </section>
      <div className="bg-black text-white-100">
        <div className="mx-auto max-w-[800px] flex flex-col justify-center items-center text-center px-4 py-36 font-sans max-4xl:max-w-[540px]">
          <h2 className="text-6xl max-sm:text-5xl font-bold mb-9">
            See if Infinity is right for you. (It totally is.)
          </h2>
          <p className="text-3xl font-light">
            Join us on this journey as we embrace the power of the written word,
            and let&apos;s contribute to a world where meaningful content
            triumphs.
          </p>
          <Link
            href="/blog"
            className="border border-white w-full mt-14 p-14 rounded-3xl text-3xl font-extrabold     hover:-translate-y-3 hover:bg-white hover:text-black hover:shadow-3xl transition-all duration-300"
          >
            Start Reading
          </Link>
        </div>
        <hr />
        <footer className="flex w-full px-10 py-20 max-md:flex-col gap-10">
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
                  mr.ayush1125@gmail.com
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
                  <Link href="https://github.com/Sanjeev2514">
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
      </div>
    </>
  );
};

export default About;
