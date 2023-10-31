"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { ImGoogle, ImSpinner } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  // On Submit
  const signUpUsingCredential = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value.toLowerCase();
    const password = e.target[2].value;

    try {
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      if (res.data == "ok") {
        e.target.reset();
        const loggedIn = await signIn("credential", {
          email,
          password,
          redirect: false,
        });
        if (loggedIn.ok) {
          setIsLoading(false);
          router.push("/write");
        } else if (loggedIn.error) {
          setIsLoading(false);
          setErr(loggedIn.error);
        }
      } else {
        setIsLoading(false);
        setErr(res.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setErr(error.message);
    }
  };
  return (
    <section className="min-h-screen flex justify-center flex-col items-center p-4">
      <div className="relative h-20 w-40 flex justify-center items-center">
        <img src="/assets/logo_icon.png" alt="logo" className="h-full w-full" />
        <span className="text-4xl font-[futura]">Infinity</span>
      </div>
      <div className="border-2 border-black rounded-lg w-fit h-fit p-6 flex flex-col gap-2 custom-shadow">
        {err && <p className="text-red-500 font-light">{err}</p>}
        <form onSubmit={signUpUsingCredential} className="flex flex-col gap-3">
          <Input label="Enter your name" required placeholder="Jhon doe" />
          <Input
            type="email"
            label="Enter your email"
            required
            placeholder="example@domain.com"
          />
          <Input
            label="Enter your password"
            type="password"
            required
            minLength={8}
            placeholder="password here"
          />
          <button
            disabled={data || isLoading}
            type="submit"
            className="text-md md:text-lg font-semibold rounded-md cursor-pointer bg-primary px-6 md:px-8 py-[10px] flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            Sign Up{" "}
            {isLoading && (
              <ImSpinner className="animate-spin duration-200 transition" />
            )}
          </button>
        </form>

        <hr className="h-[2px] bg-violet-400" />
        <div className="flex flex-col gap-4 items-center">
          <button
            disabled={data}
            onClick={() => signIn("google", { callbackUrl: "/write" })}
            className="text-md cursor-pointer md:text-lg font-semibold rounded-md  bg-primary px-6 md:px-8 py-[10px] flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            <ImGoogle />
            Sign up with Google
          </button>
          <button
            disabled={data}
            onClick={() => signIn("github", { callbackUrl: "/write" })}
            className="text-md cursor-pointer md:text-lg font-semibold rounded-md  bg-primary px-6 md:px-8 py-[10px]  flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            <BsGithub />
            Sign up with Github
          </button>
        </div>
        <h2 className="text-center hover:underline transition-all duration-200 ease-in-out">
          <a href="/login">Already have an Account? Log In</a>
        </h2>
      </div>
    </section>
  );
};

export default Signup;
