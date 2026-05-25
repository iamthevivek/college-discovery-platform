import Link from "next/link"
import SaveButton from "./SaveButton"

export default function CollegeCard({
  college,
  savedIds,
}: {
  college: any
  savedIds: string[]
}) {
  const p = college.placements as any

  const typeColors: any = {
    Engineering: { bg: "#dbeafe", color: "#1d4ed8" },
    Medical: { bg: "#dcfce7", color: "#15803d" },
    Management: { bg: "#fef9c3", color: "#a16207" },
    Arts: { bg: "#fce7f3", color: "#be185d" },
  }

  const tc =
    typeColors[college.type] || {
      bg: "#f1f5f9",
      color: "#475569",
    }

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.12)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 2px 8px rgba(0,0,0,0.06)")
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              background: tc.bg,
              color: tc.color,
              padding: "4px 12px",
              borderRadius: "20px",
            }}
          >
            {college.type}
          </span>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0f172a",
              margin: "10px 0 4px 0",
              letterSpacing: "-0.3px",
            }}
          >
            {college.name}
          </h3>

          <p
            style={{
              fontSize: "13px",
              color: "#64748b",
              fontWeight: 500,
            }}
          >
            📍 {college.location}, {college.state}
          </p>
        </div>

        <SaveButton
          collegeId={college.id}
          initialSaved={savedIds.includes(college.id)}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "10px",
            padding: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#64748b",
              fontWeight: 600,
              marginBottom: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Fees/yr
          </p>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            ₹{(college.fees / 100000).toFixed(1)}L
          </p>
        </div>

        <div
          style={{
            background: "#f8fafc",
            borderRadius: "10px",
            padding: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#64748b",
              fontWeight: 600,
              marginBottom: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Rating
          </p>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            ⭐ {college.rating}
          </p>
        </div>

        <div
          style={{
            background: "#f8fafc",
            borderRadius: "10px",
            padding: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#64748b",
              fontWeight: 600,
              marginBottom: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Placed
          </p>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {p.placementRate}%
          </p>
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
          letterSpacing: "0.2px",
        }}
      >
        View Details
      </Link>
    </div>
  )
}