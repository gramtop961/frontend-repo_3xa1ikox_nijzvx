import React from 'react';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

const logos = [
  { name: 'Vercel', text: 'Vercel' },
  { name: 'Linear', text: 'Linear' },
  { name: 'Supabase', text: 'Supabase' },
  { name: 'Raycast', text: 'Raycast' },
  { name: 'Arc', text: 'Arc' },
];

const TrustBar = () => {
  return (
    <section id="trust" className="bg-neutral-950 text-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-semibold">Security that earns trust</h3>
            <p className="mt-2 text-neutral-300">Built on WebAuthn and FIDO2 standards. Hardware-backed keys, device attestation, and risk signals out of the box.</p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-neutral-200">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-cyan-400" /> SOC 2 Type II ready</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-400" /> GDPR compliant</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> WebAuthn + Passkeys</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-neutral-400 text-xs uppercase tracking-wider">Trusted by builders at</div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {logos.map((l) => (
                <div key={l.name} className="h-10 rounded-md bg-neutral-900/50 ring-1 ring-white/5 flex items-center justify-center text-neutral-300">
                  {l.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
