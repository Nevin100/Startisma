/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//GET user by ID :
export async function GET(
  req: Request,
  { params }: { params: { id: any } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "No ID retrieved from request", error: true },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found", error: true },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User retrieved successfully", data: user, error: false },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal Server Issue", error: true },
      { status: 500 }
    );
  }
}

// Delete user by ID :
export async function DELETE(request : Request, { params} : { params : any }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: "No Id retrived from request", error: true }, { status: 400 });
    }

    const user = await prisma.user.delete({
      where : { id: Number(id) },
    })
    if (!user) {
      return NextResponse.json({ message: "User not found", error: true }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully", data: user, error: false }, { status: 200 });
  
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Issue", error: true }, { status: 500 });
  }
}

// Update User by ID :
export async function PUT(request: Request, { params }: { params: { id: any } }) { 
  try {
    const { id } = params;
    const body = await request.json();
    const { name, email } = body;
    
    if (!name && !email) {
      return NextResponse.json({ message:"Name or email is required for update", error: true }, { status: 400 });
    }
    
    if (!id) {
      return NextResponse.json({ message: "No Id retrieved from request", error: true }, { status: 400 });
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: name,
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found", error: true }, { status: 404 });
    }
    return NextResponse.json({ message: "User updated successfully", data: user, error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Issue", error: true }, { status: 500 });
  }
}