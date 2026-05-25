import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!user) {
      return NextResponse.json([])
    }

    const saved = await prisma.savedCollege.findMany({
      where: {
        userId: user.id,
      },
      include: {
        college: true,
      },
    })

    return NextResponse.json(
      saved.map((s) => s.college)
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    const { collegeId } = await req.json()

    // Check existing saved college
    const existing = await prisma.savedCollege.findFirst({
      where: {
        userId: user.id,
        collegeId,
      },
    })

    // Remove if already saved
    if (existing) {
      await prisma.savedCollege.delete({
        where: {
          id: existing.id,
        },
      })

      return NextResponse.json({
        saved: false,
      })
    }

    // Save new college
    await prisma.savedCollege.create({
      data: {
        userId: user.id,
        collegeId,
      },
    })

    return NextResponse.json({
      saved: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}