"use client";

import { useState } from "react";

export default function CopyResultsButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md border border-bluebook px-4 py-2 text-sm font-semibold text-bluebook hover:bg-bluebook hover:text-white"
    >
      {copied ? "Nusxalandi" : "Natijani nusxalash"}
    </button>
  );
}
