"use client";

import { useState } from "react";

export function EpubNotify() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "busy" || state === "done") return;
    setState("busy");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "h2lp-epub" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
      setMessage("Got it — the EPUB lands in your inbox when it's ready.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "done") {
    return (
      <p className="lf-tiny">
        <strong>{message}</strong>
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        disabled={state === "busy"}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 18,
          padding: "14px 16px",
          minWidth: 260,
          border: "2px solid var(--ink)",
          background: "#fff",
          color: "var(--ink)",
        }}
      />
      <button type="submit" className="lf-btn lf-btn-red" disabled={state === "busy"}>
        {state === "busy" ? "Adding…" : "Email me the EPUB"}
      </button>
      {state === "error" ? (
        <p className="lf-tiny" style={{ color: "var(--red)", width: "100%" }}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
