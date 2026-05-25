import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search") || ""
  const type = searchParams.get("type") || ""
  const page = parseInt(searchParams.get("page") || "1")
  const limit = 6

  const where: any = {
    AND: [
      search ? {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { location: { contains: search, mode: "insensitive" } },
        ]
      } : {},
      type ? { type } : {},
    ]
  }

  const [colleges, total] = await Promise.all([
    prisma.college.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { rating: "desc" },
    }),
    prisma.college.count({ where }),
  ])

  return NextResponse.json({ colleges, total, pages: Math.ceil(total / limit) })
}