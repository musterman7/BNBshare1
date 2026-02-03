import Link from "next/link";
import { MatrixRain } from "@/components/MatrixRain";
import { TreasuryAddress } from "@/components/TreasuryAddress";

export default function HomePage() {
  return (
    <>
      <MatrixRain />
      <main className="relative min-h-screen bg-transparent pt-24 pb-20">
        <div className="relative mx-auto max-w-4xl px-4">
        {/* Stats bar */}
        <div className="hover-glow mb-12 grid grid-cols-3 gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">0</div>
            <div className="text-xs text-white/60">Tokens Launched</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl font-bold text-emerald-400">$0</div>
            <div className="text-xs text-white/60">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">0 BNB</div>
            <div className="text-xs text-white/60">Fees Collected</div>
          </div>
        </div>

        {/* Hero - Landing */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Launch Tokens with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                Tax Sharing
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Create tokens on Four.Meme (BNB Chain) and send 100% of trading tax to a
            shared treasury. Claim your share later from your account.
          </p>
          <Link
            href="/create"
            className="hover-glow mt-8 inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105"
          >
            Go to Token Creator
          </Link>

          {/* X and Telegram buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://x.com/4share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-white/5 text-white transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:scale-105"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/4share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-white/5 text-white transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:scale-105"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          {/* Treasury Contract Address */}
          <TreasuryAddress />
        </div>

        {/* How It Works */}
        <section className="hover-glow mb-20 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-white/5 to-emerald-500/5 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-bold text-white">How It Works</h2>
          <div className="space-y-6">
            <div className="group flex gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white font-bold shadow-lg shadow-emerald-500/50">
                01
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Fill Token Details</h3>
                <p className="text-sm text-white/70">
                  Name, symbol, image and tax rate (1%, 3%, 5% or 10%).
                </p>
              </div>
            </div>
            <div className="group flex gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white font-bold shadow-lg shadow-emerald-500/50">
                02
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Tax to Shared Treasury</h3>
                <p className="text-sm text-white/70">
                  100% of tax goes to 4Share treasury. Each token is linked to your account.
                </p>
              </div>
            </div>
            <div className="group flex gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white font-bold shadow-lg shadow-emerald-500/50">
                03
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Launch & Claim</h3>
                <p className="text-sm text-white/70">
                  Create token on Four.Meme. When fees accumulate, claim from the Claim page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project explanation */}
        <section className="hover-glow rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-white/5 to-emerald-500/5 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-bold text-white">About 4Share</h2>
          <p className="mb-4 text-white/80 leading-relaxed">
            4Share is a platform that lets you launch <strong className="text-emerald-400">Tax Tokens</strong> on
            Four.Meme (BNB Chain). When you create a token, 100% of the trading tax
            goes to a shared treasury. Your share is linked to your wallet, and you
            can claim it anytime from the Claim page.
          </p>
          <p className="mb-4 text-white/80 leading-relaxed">
            We use Four.Meme&apos;s Free Mode: your token starts on a bonding curve and
            migrates to the DEX after graduation. You choose the tax rate (1%, 3%, 5%,
            or 10%) applied to each trade after graduation—all of it flows to the
            treasury, and you get your portion when you withdraw.
          </p>
          <p className="text-white/70 leading-relaxed">
            Connect your wallet, create your token in the <Link href="/create" className="text-emerald-400 hover:underline">Token Creator</Link>,
            and when fees accumulate, claim from the <Link href="/claim" className="text-emerald-400 hover:underline">Claim page</Link>.
          </p>
        </section>
        </div>
      </main>
    </>
  );
}
