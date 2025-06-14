
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
