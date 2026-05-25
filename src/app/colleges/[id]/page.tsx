import { prisma } from "@/lib/prisma"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const college = await prisma.college.findUnique({
    where: { id },
  })

  
  if (!college) notFound()

  const p = college.placements as any

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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Back */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#2563eb",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          ← Back to colleges
        </Link>

        {/* Main Card */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            marginTop: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Type Badge */}
          <span
            style={{
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {college.type}
          </span>

          {/* Title */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              marginTop: "18px",
              color: "#0f172a",
              letterSpacing: "-1px",
            }}
          >
            {college.name}
          </h1>

          {/* Location */}
          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              marginTop: "10px",
              fontWeight: 500,
            }}
          >
            📍 {college.location}, {college.state}
          </p>

          {/* Description */}
          <p
            style={{
              marginTop: "24px",
              color: "#334155",
              fontSize: "17px",
              lineHeight: "30px",
              maxWidth: "850px",
            }}
          >
            {college.description}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {[
              {
                label: "Annual Fees",
                value: `₹${(college.fees / 100000).toFixed(1)}L`,
              },
              {
                label: "Rating",
                value: `⭐ ${college.rating}/5`,
              },
              {
                label: "Average Package",
                value: `₹${(p.averagePackage / 100000).toFixed(1)}L`,
              },
              {
                label: "Placement Rate",
                value: `${p.placementRate}%`,
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#f8fafc",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  {item.label}
                </p>

                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "20px",
                color: "#0f172a",
              }}
            >
              Courses Offered
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {college.courses.map((course: string) => (
                <span
                  key={course}
                  style={{
                    background: "#eff6ff",
                    color: "#2563eb",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Placement Stats */}
          <div style={{ marginTop: "55px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "22px",
                color: "#0f172a",
              }}
            >
              Placement Statistics
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#ecfdf5",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#065f46",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Highest Package
                </p>

                <h2
                  style={{
                    color: "#047857",
                    fontSize: "34px",
                    fontWeight: 800,
                  }}
                >
                  ₹{(p.highestPackage / 100000).toFixed(0)}L
                </h2>
              </div>

              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#1d4ed8",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Average Package
                </p>

                <h2
                  style={{
                    color: "#1e40af",
                    fontSize: "34px",
                    fontWeight: 800,
                  }}
                >
                  ₹{(p.averagePackage / 100000).toFixed(1)}L
                </h2>
              </div>

              <div
                style={{
                  background: "#faf5ff",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#7e22ce",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Placement Rate
                </p>

                <h2
                  style={{
                    color: "#6b21a8",
                    fontSize: "34px",
                    fontWeight: 800,
                  }}
                >
                  {p.placementRate}%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}