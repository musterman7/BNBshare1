"use client";

import { useState } from "react";

const TREASURY_ADDRESS = "0x5d0240C80F57B6bf6cc59F3CcBCE89CF11afa063";

export function TreasuryAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TREASURY_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 mx-auto max-w-2xl">
      <div className="hover-glow rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-green-500/5 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
              <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-white/60 mb-1">4Share Contract</p>
              <p className="font-mono text-sm text-emerald-400 truncate">
                {TREASURY_ADDRESS}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 rounded-lg border border-emerald-500/30 bg-white/5 p-2 text-emerald-400 transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:scale-105"
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
