"use client";
import Input from "@/components/Input";
import { ImGoogle } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ImSpinner } from "react-icons/im";

const Login = () => {
  const { data } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/write";

  const loginUsingCredential = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const email = e.target[0].value;
      const password = e.target[1].value;

      const isLoggedIn = await signIn("credential", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });

      if (isLoggedIn.ok) {
        setIsLoading(false);
        router.refresh();
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(isLoggedIn.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <section className="min-h-screen flex justify-center flex-col items-center p-4">
      {/* <Toaster /> */}
      <div className="relative h-20 w-40 flex justify-center items-center">
        <img src="/assets/logo_icon.png" alt="logo" className="h-full w-full" />
        <span className="text-4xl font-[futura]">Infinity</span>
      </div>
      <div className="border-2 border-black rounded-lg w-fit h-fit p-6 flex flex-col gap-3 custom-shadow">
        {error && (
          <h2 className="text-md text-red-500 text-center break-words">
            {error}
          </h2>
        )}
        <form onSubmit={loginUsingCredential} className="flex flex-col gap-5">
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
            type="submit"
            disabled={data || isLoading}
            className="text-md md:text-lg font-semibold rounded-md  bg-primary px-6 md:px-8 py-[10px] flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            Log In {isLoading && <ImSpinner className="animate-spin" />}
          </button>
        </form>

        <hr className="h-[2px] bg-violet-400" />
        <div className="flex flex-col gap-4 items-center">
          <button
            disabled={data}
            onClick={() =>
              signIn("google", { callbackUrl: callbackUrl, redirect: true })
            }
            className="text-md cursor-pointer md:text-lg font-semibold rounded-md  bg-primary px-6 md:px-8 py-[10px] flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            <ImGoogle />
            Sign in with Google
          </button>
          <button
            disabled={data}
            onClick={() =>
              signIn("github", { callbackUrl: callbackUrl, redirect: true })
            }
            className="text-md cursor-pointer md:text-lg font-semibold rounded-md  bg-primary px-6 md:px-8 py-[10px]  flex items-center justify-center gap-4 text-lg text-white w-full hover:bg-secondary transition duration-200 ease-in-out"
          >
            <BsGithub />
            Sign in with Github
          </button>
        </div>
        <h2 className="text-center hover:underline transition-all duration-200 ease-in-out">
          <a href="/signup">Sign up before Login</a>
        </h2>
      </div>
      <div className="text-md font-serif py-2">
        test email: trial@gmail.com
        <br />
        test password : 12345678
      </div>
    </section>
  );
};

export default Login;
