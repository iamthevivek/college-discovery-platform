import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default async function SavedPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return (
      <div>
        <Navbar />
        <div
          style={{
            padding: "80px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Please login first
        </div>
      </div>
    )
  }

  // FIND USER
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    return (
      <div>
        <Navbar />
        <div
          style={{
            padding: "80px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          User not found
        </div>
      </div>
    )
  }

  // GET SAVED COLLEGES
  const saved = await prisma.savedCollege.findMany({
    where: {
      userId: user.id,
    },
    include: {
      college: true,
    },
  })

  const colleges = saved.map((item) => item.college)

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "32px",
          }}
        >
          ❤️ Saved Colleges
        </h1>

        {colleges.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "60px",
              borderRadius: "20px",
              textAlign: "center",
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            No saved colleges yet.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {colleges.map((college: any) => {
              const p = college.placements as any

              return (
                <div
                  key={college.id}
                  style={{
                    background: "white",
                    borderRadius: "18px",
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      padding: "4px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {college.type}
                  </span>

                  <h2
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginTop: "14px",
                    }}
                  >
                    {college.name}
                  </h2>

                  <p
                    style={{
                      color: "#64748b",
                      marginTop: "6px",
                    }}
                  >
                    📍 {college.location}, {college.state}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                        }}
                      >
                        Fees
                      </p>

                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        ₹
                        {(college.fees / 100000).toFixed(1)}
                        L
                      </h3>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                        }}
                      >
                        Rating
                      </p>

                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        ⭐ {college.rating}
                      </h3>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                        }}
                      >
                        Placement
                      </p>

                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {p.placementRate}%
                      </h3>
                    </div>
                  </div>

                  <Link
                    href={`/colleges/${college.id}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#1e40af",
                      color: "white",
                      padding: "12px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginTop: "24px",
                    }}
                  >
                    View Details
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}