import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqbody = await req.json();
    let result = await prisma.users.create({
      data: reqbody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
