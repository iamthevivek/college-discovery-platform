import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const college = await prisma.college.findUnique({
      where: { id: params.id },
    })
    if (!college) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
    return NextResponse.json(college)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}