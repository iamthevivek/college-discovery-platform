"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import CollegeCard from "@/components/CollegeCard"
import Navbar from "@/components/Navbar"

export default function Home() {
  const { data: session } = useSession()

  const [colleges, setColleges] = useState([])
  const [savedIds, setSavedIds] = useState<string[]>([])
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchColleges = async () => {
    try {
      setLoading(true)

      const params = new URLSearchParams({
        search,
        type,
        page: String(page),
      })

      const res = await fetch(`/api/colleges?${params}`)
      const data = await res.json()

      setColleges(data.colleges || [])
      setTotal(data.total || 0)
      setPages(data.pages || 1)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchSaved = async () => {
    try {
      if (!session) {
        setSavedIds([])
        return
      }

      const res = await fetch("/api/saved")

      if (!res.ok) return

      const data = await res.json()

      if (Array.isArray(data)) {
        setSavedIds(data.map((c: any) => c.id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchColleges()
  }, [search, type, page])

  useEffect(() => {
    fetchSaved()
  }, [session])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "white",
            margin: "0 0 12px 0",
            letterSpacing: "-1px",
          }}
        >
          Find Your Perfect College
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#bfdbfe",
            fontWeight: 500,
            margin: "0 0 40px 0",
          }}
        >
          Discover from {total} top colleges across India
        </p>

        {/* Search */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            gap: "12px",
          }}
        >
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            placeholder="Search by college name or city..."
            style={{
              flex: 1,
              padding: "16px 20px",
              borderRadius: "12px",
              border: "none",
              fontSize: "15px",
              fontWeight: 500,
              color: "#0f172a",
              outline: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />

          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value)
              setPage(1)
            }}
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              border: "none",
              fontSize: "15px",
              fontWeight: 600,
              color: "#0f172a",
              outline: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <option value="">All Types</option>
            <option value="Engineering">Engineering</option>
            <option value="Medical">Medical</option>
            <option value="Management">Management</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#64748b",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Showing {colleges.length} of {total} colleges
        </p>

        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px",
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            Loading colleges...
          </div>
        ) : colleges.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px",
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            No colleges found. Try a different search.
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
            {colleges.map((college: any) => (
              <CollegeCard
                key={college.id}
                college={college}
                savedIds={savedIds}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "48px",
            }}
          >
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  background:
                    page === i + 1 ? "#1e40af" : "white",
                  color:
                    page === i + 1 ? "white" : "#374151",
                  boxShadow:
                    "0 2px 6px rgba(0,0,0,0.08)",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}