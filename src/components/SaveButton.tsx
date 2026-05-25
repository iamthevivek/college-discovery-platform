"use client"

import { useState, useEffect } from "react"
import { useSession, signIn } from "next-auth/react"

export default function SaveButton({
  collegeId,
  initialSaved,
}: {
  collegeId: string
  initialSaved: boolean
}) {
  const { data: session } = useSession()

  const [saved, setSaved] = useState(initialSaved)
  const [loading, setLoading] = useState(false)

  // IMPORTANT FIX
  useEffect(() => {
    setSaved(initialSaved)
  }, [initialSaved])

  const toggleSave = async () => {
    if (!session) {
      signIn("google")
      return
    }

    try {
      setLoading(true)

      // instant UI update
      setSaved((prev) => !prev)

      const res = await fetch("/api/saved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collegeId,
        }),
      })

      // rollback if failed
      if (!res.ok) {
        setSaved((prev) => !prev)
      }
    } catch (error) {
      console.error(error)

      // rollback
      setSaved((prev) => !prev)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={toggleSave}
      disabled={loading}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        border: "none",
        background: "transparent",
        color: saved ? "#ef4444" : "#94a3b8",
        fontSize: saved ? "28px" : "22px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.15s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: saved ? "scale(1.15)" : "scale(1)",
      }}
    >
      {saved ? "♥" : "♡"}
    </button>
  )
}