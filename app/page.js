import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24 relative z-10">
      {/* HERO */}
      <section className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-glow glitch-animation bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
          MicroShield
        </h1>

        <p className="text-lg sm:text-xl text-violet-300/90 font-semibold text-glow-subtle">
          Lightweight In-App Micro Firewall
        </p>

        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300/90 leading-relaxed px-2">
          MicroShield is an embedded security middleware that provides runtime
          protection against common web attacks without relying on external
          Web Application Firewalls (WAFs). It is designed for small developers
          and freelancers who need simple, explainable, and effective security.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 px-4 sm:px-0">
          <a
            href="https://github.com/microshieldAI"
            target="_blank"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 sm:px-8 py-3 text-white font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 border-glow text-sm sm:text-base"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
          How MicroShield Works
        </h2>

        <div className="rounded-xl border border-violet-500/20 bg-violet-950/10 backdrop-blur-sm p-4 sm:p-6 text-xs sm:text-sm text-gray-200 border-glow overflow-x-auto">
          <code className="block text-center font-mono text-violet-200/90 whitespace-nowrap sm:whitespace-normal">
            Client Request → MicroShield Middleware → Static Rules + AI Detection → Allow / Block
          </code>
        </div>

        <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
          MicroShield intercepts incoming HTTP requests at the middleware level,
          evaluates them using deterministic security rules and an AI-based
          anomaly detection engine, and then allows or blocks the request in
          real time.
        </p>
      </section>

      {/* THREAT COVERAGE */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
          Threat Coverage
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-200">
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> SQL Injection
          </li>
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> Cross-Site Scripting (XSS)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> Command Injection
          </li>
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> Path Traversal
          </li>
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> Oversized / Malformed Payloads
          </li>
          <li className="flex items-center gap-2">
            <span className="text-violet-400">▸</span> Suspicious User Agents
          </li>
        </ul>
      </section>

      {/* AI ENGINE */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
          AI-Based Anomaly Detection
        </h2>

        <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
          For unknown or obfuscated attack patterns that bypass static rules,
          MicroShield uses an <span className="text-violet-300 font-bold text-glow-subtle">Isolation Forest</span>–based
          anomaly detection model. The model analyzes numerical request features
          to identify abnormal traffic behavior without relying on predefined
          signatures.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-200">
          <li className="flex items-center gap-2">
            <span className="text-fuchsia-400">◆</span> Request size
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fuchsia-400">◆</span> URL path length
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fuchsia-400">◆</span> Query parameter count
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fuchsia-400">◆</span> Entropy of request data
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fuchsia-400">◆</span> HTTP method behavior
          </li>
        </ul>
      </section>

      {/* ARCHITECTURE */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
          System Architecture
        </h2>

        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-200">
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-violet-400 mt-0.5 sm:mt-1">●</span>
            <span>Middleware interception layer</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-violet-400 mt-0.5 sm:mt-1">●</span>
            <span>Deterministic static rule engine</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-violet-400 mt-0.5 sm:mt-1">●</span>
            <span>Feature extraction pipeline</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-violet-400 mt-0.5 sm:mt-1">●</span>
            <span>Isolation Forest anomaly detection model</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-violet-400 mt-0.5 sm:mt-1">●</span>
            <span>Structured logging with explainable blocking decisions</span>
          </li>
        </ul>
      </section>

      {/* STATUS */}
      <section className="rounded-xl border border-violet-500/20 bg-violet-950/10 backdrop-blur-sm p-5 sm:p-8 space-y-3 sm:space-y-4 border-glow">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
          Project Status
        </h2>
        <p className="text-sm sm:text-base text-gray-200">
          <span className="font-bold text-violet-300">Status:</span> Active Development (Beta)
        </p>
        <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
          Planned features include an adaptive learning phase using
          application-specific traffic baselines and release as an npm package
          after API stabilization.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="pt-8 sm:pt-10 border-t border-violet-500/15 text-center text-xs sm:text-sm text-gray-500">
        MicroShield © 2025 · Embedded Security Middleware Project
      </footer>
    </main>
  );
}
