import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqbody = await req.json();
    let result = await prisma.users.update({
      where: { id: reqbody["id"] },
      data: {
        first_name: reqbody["first_name"],
        last_name: reqbody["last_name"],
        age: reqbody["age"],
        grade: reqbody["grade"],
        course: reqbody["course"],
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
