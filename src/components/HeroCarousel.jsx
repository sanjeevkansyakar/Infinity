"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop={true}
      interval={2000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {/* Carousel 1 */}
      <div className="bg-white max-md:h-[400px] h-[600px] border-2 border-black max-w-10xl xl:mx-auto mx-2 md:mx-4 rounded-[50px] overflow-hidden justify-center items-center flex max-md:flex-col-reverse p-2 md:justify-evenly ">
        <div className="w-full md:w-2/5 flex justify-center flex-col px-2 md:px-8 gap-3 md:gap-10 max-md:text-center text-start ">
          <h2 className="text-xl md:text-5xl font-semibold font-serif text-gray-900">
            📝 Start Crafting Your Saga Today .
          </h2>
          <p className="max-md:hidden text-sm font-light md:font-normal md:text-xl font-sans text-gray-600 tracking-wider">
            Blogging is a journey, a canvas for your thoughts, and a beacon for
            your voice. Welcome to a world where your words wield power, your
            ideas spark inspiration, and where sharing is effortless.
          </p>
        </div>
        <div className="w-full md:w-2/5 h-full relative min-h-[200px] min-w-[200px]">
          <Image
            fill
            src="/assets/trial2.png"
            alt="User"
            className="object-contain"
          />
        </div>
      </div>
      {/* Carousel 2 */}
      <div className="bg-white max-md:h-[400px] h-[600px] border-2 border-black max-w-10xl xl:mx-auto mx-2 md:mx-4 rounded-[50px] overflow-hidden justify-center items-center flex max-md:flex-col-reverse p-2 md:justify-evenly">
        <div className="w-full md:w-2/5 flex justify-center flex-col px-2 md:px-8 gap-3 md:gap-10 max-md:text-center text-start">
          <h2 className="text-xl md:text-5xl font-semibold font-serif text-gray-900">
            ✨ Craft and Create.
          </h2>
          <p className="max-md:hidden text-sm font-light md:font-normal md:text-xl font-sans text-gray-600 tracking-wider">
            At the heart of our platform lies an enchanting text editor that
            allows you to breathe life into your blogs. Embrace the power of
            words with formatting options such as bold, headings, and code. Your
            blogs will emerge as masterpieces.
          </p>
        </div>
        <div className="w-full md:w-2/5 h-full relative min-h-[200px] min-w-[200px]">
          <Image
            fill
            src="/assets/trial3.png"
            alt="User"
            className="object-contain"
          />
        </div>
      </div>
      {/* Carousel 3 */}
      <div className="bg-white max-md:h-[400px] h-[600px] border-2 border-black max-w-10xl xl:mx-auto mx-2 md:mx-4 rounded-[50px] overflow-hidden justify-center items-center flex max-md:flex-col-reverse p-2 md:justify-evenly">
        <div className="w-full md:w-2/5 flex justify-center flex-col px-2 md:px-8 gap-3 md:gap-10 max-md:text-center text-start ">
          <h2 className="text-xl md:text-5xl font-semibold font-serif text-gray-900">
            🧠 AI-Powered Writing Assistant.
          </h2>
          <p className="max-md:hidden text-sm font-light md:font-normal md:text-xl font-sans text-gray-600 tracking-wider">
            Harness the magic of AI, your personal muse. Our AI-powered writing
            assistant whispers brilliant ideas, polishes your prose, and guides
            you through the journey of crafting captivating content..
          </p>
        </div>
        <div className="w-full md:w-2/5 h-full relative min-h-[200px] min-w-[200px]">
          <Image
            fill
            src="/assets/trial4.png"
            alt="User"
            className="object-contain"
          />
        </div>
      </div>
      {/* Carousel 4 */}
      <div className="bg-white max-md:h-[400px] h-[600px] border-2 border-black max-w-10xl xl:mx-auto mx-2 md:mx-4 rounded-[50px] overflow-hidden justify-center items-center flex max-md:flex-col-reverse p-2 md:justify-evenly">
        <div className="w-full md:w-2/5 flex justify-center flex-col px-2 md:px-8 gap-3 md:gap-10 max-md:text-center text-start ">
          <h2 className="text-xl md:text-5xl font-semibold font-serif text-gray-900">
            💼 Manage your content with Grace.
          </h2>
          <p className="max-md:hidden text-sm font-light md:font-normal md:text-xl font-sans text-gray-700 tracking-wider">
            The nitty-gritty of blogging is now as easy as a flick of your
            wrist. Effortlessly manage your creations with our user-friendly
            CRUD operations. Whether you are updating a recent gem or bidding
            adieu to an old tale, it is all here.
          </p>
        </div>
        <div className="w-full md:w-2/5 h-full relative min-h-[200px] min-w-[200px]">
          <Image
            fill
            src="/assets/trial5.png"
            alt="User"
            className="object-contain"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
