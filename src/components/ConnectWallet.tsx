"use client";

import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Avoid hydration mismatch: server has no window.ethereum, so connectors differ. Only enable button after client mount.
  useEffect(() => setMounted(true), []);

  // Use injected connector (MetaMask, Rabby, etc.) — BNB Chain is the only chain in wagmi config
  const injectedConnector = connectors.find((c) => c.type === "injected") ?? connectors[0];
  const isDisabled = !mounted || isPending || !injectedConnector;

  if (!mounted) {
    return (
      <button
        disabled
        className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/30 opacity-70"
        aria-label="Connect wallet (loading)"
      >
        Connect Wallet
      </button>
    );
  }

  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105"
        title="Disconnect wallet"
      >
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => injectedConnector && connect({ connector: injectedConnector })}
      disabled={isDisabled}
      className="hover-glow rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      title="Connect with MetaMask or Rabby (BNB Chain)"
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
