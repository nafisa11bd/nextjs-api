import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.findUnique({
      where: { id: 3 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
