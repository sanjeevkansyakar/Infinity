import { connectToMongoose } from "@/lib/database/connectToMongo";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";

export const runtime = "edge";
export const options = {
  pages: {
    signIn: "/login",
    error: "/login",
    newUser: "/signup",
  },
  // Configure one or more authentication providers
  providers: [
    // Github
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // Personal credential
    CredentialsProvider({
      name: "Credentials",
      id: "credential",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter password",
        },
      },
      async authorize(credentials) {
        try {
          await connectToMongoose();
          // check wheather the user is available or not
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found");
          }
          // Check password
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          //   If password isn't correct
          if (!isPasswordCorrect) {
            throw new Error("Try to login with correct Credentials");
          }
          return user;
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connectToMongoose();
      const { name, email, image } = user;
      const { provider } = account;
      try {
        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (typeof userExists == Error || userExists) {
          // If it's already there do Nothing
          return user;
        }

        // If it's not in the database then
        const userDetail = await User.create({
          name,
          email,
          userImage: image,
          provider,
        });
        if (userDetail) {
          return user;
        }
      } catch (error) {
        console.log(error);
      }
      return user;
    },
  },
};
