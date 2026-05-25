"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav
      style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
            }}
          >
            🎓
          </div>

          <div>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "800",
                color: "#0f172a",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              CollegeFinder
            </h1>

            <p
              style={{
                fontSize: "11px",
                color: "#64748b",
                margin: 0,
                marginTop: "2px",
                fontWeight: 500,
              }}
            >
              Discover Your Future
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {session ? (
            <>
              <Link
                href="/saved"
                style={{
                  textDecoration: "none",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 16px",
                  borderRadius: "10px",
                  transition: "0.2s",
                  background: "#f8fafc",
                }}
              >
                ❤️ Saved Colleges
              </Link>

              <button
                onClick={() => signOut()}
                style={{
                  border: "none",
                  background: "#ef4444",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "14px",
                  boxShadow: "0 4px 12px rgba(239,68,68,0.2)",
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              style={{
                border: "none",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                color: "white",
                padding: "12px 20px",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "14px",
                boxShadow: "0 6px 18px rgba(37,99,235,0.25)",
              }}
            >
              Sign In with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}