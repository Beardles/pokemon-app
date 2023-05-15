import { NextResponse } from "next/server";
import { prisma } from "~/config/db";

export async function POST(request: Request) {
  const { body } = request;
  await prisma.pokedex.create({
    data: {
      name: body
    }
  })
  return NextResponse.json({ "data": "sup" })
}