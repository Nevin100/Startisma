
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Get All Users :
export async function GET() {
  try {
    const users = await prisma.user.findMany();

    if (!users || users.length === 0) {
      return NextResponse.json({ message: "No users found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Users retrieved successfully", data: users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}

// Create User :
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    
    if (!name || !email ) {
      return NextResponse.json(
        { message: "Name, email, and password are required.", error: true }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    if (user) {
      return NextResponse.json({ message: "User already exists", error: true }, { status: 401 });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      }
    });

    if(newUser) {
      return NextResponse.json({ message: "User created successfully", data: newUser, error: false }, { status: 201 });
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"Internal Server Issue", error: true}, { status: 500 });
  }
}