"use client";

import { useState } from "react";

export function NotifyForm({ id = "notify", kicker }: { id?: string; kicker?: string }) {
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
        body: JSON.stringify({ email, source: "h2lp-launch" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
      setMessage(data?.message || "You're on the list.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "done") {
    return (
      <div className="lf-cta" id={id}>
        {kicker ? <p className="lf-cta-kicker">{kicker}</p> : null}
        <p className="lf-lead" style={{ marginBottom: 0 }}>
          <strong>{message}</strong> Watch your inbox — launch details land there first.
        </p>
      </div>
    );
  }

  return (
    <div className="lf-cta" id={id}>
      {kicker ? <p className="lf-cta-kicker">{kicker}</p> : null}
      <form onSubmit={submit} style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
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
          {state === "busy" ? "Adding…" : "Notify me at launch"}
        </button>
      </form>
      {state === "error" ? (
        <p className="lf-tiny" style={{ color: "var(--red)" }}>
          {message}
        </p>
      ) : (
        <p className="lf-tiny">One email when it launches. Nothing else. Unsubscribe anytime.</p>
      )}
    </div>
  );
}
