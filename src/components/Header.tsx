"use client";

import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-500/20 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2 transition">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-green-400 transition-all">
            4Share
          </span>
          <span className="hidden text-xs text-white/50 sm:inline">Tax · Four.Meme · Treasury</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/tokens"
            className="text-sm font-medium text-white/80 transition hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          >
            Tokens
          </Link>
          <Link
            href="/claim"
            className="text-sm font-medium text-white/80 transition hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          >
            Claim
          </Link>
          <Link
            href="/how-to-claim"
            className="text-sm font-medium text-white/80 transition hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          >
            How to Claim
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium text-white/80 transition hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          >
            Token Creator
          </Link>
          <ConnectWallet />
        </nav>
      </div>
    </header>
  );
}
