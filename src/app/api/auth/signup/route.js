import User from "@/models/user";
import { connectToMongoose } from "@/lib/database/connectToMongo";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  // Parse tha data
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return new NextResponse("Unable to create User With given Credential", {
      status: 202,
    });
  }

  // If all required data is available
  try {
    await connectToMongoose();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 202 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    await connectToMongoose();
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      return new NextResponse("ok", { status: 201 });
    }
    return new NextResponse("Unable to create User", { status: 501 });
  } catch (error) {
    return new NextResponse({ meassage: error.message }, { status: 500 });
  }
};
