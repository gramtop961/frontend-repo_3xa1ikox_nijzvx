import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Fingerprint, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-neutral-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-28 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/60 ring-1 ring-white/10 px-3.5 py-2 text-xs text-neutral-300">
            <Fingerprint className="h-4 w-4 text-cyan-400" />
            Biometric-first, passwordless auth
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Auth that disappears.
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl max-w-xl">
            Ship passwordless authentication with a single line of code. Biometrics, WebAuthn, passkeys — all handled, so your users log in without thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#code"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-medium px-5 py-3 transition-colors"
            >
              <Rocket className="h-4 w-4" />
              Start in 60 seconds
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 text-white font-medium px-5 py-3 transition-colors"
            >
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              Why teams trust us
            </a>
          </div>
        </div>

        <div className="relative h-[360px] md:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Iridescent glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/5 to-transparent" />
        </div>
      </div>

      {/* Subtle radial backdrop */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.25), rgba(99,102,241,0.12), transparent 60%)' }} />
    </section>
  );
};

export default Hero;
