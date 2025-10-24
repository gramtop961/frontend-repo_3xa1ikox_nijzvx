import React, { useState } from 'react';
import { Copy, Check, Code, Smartphone, Fingerprint } from 'lucide-react';

const snippets = {
  javascript: `// Install: npm i @ghostauth/js
import { Auth } from '@ghostauth/js';

// Auth that disappears — enable biometrics with one line
const auth = new Auth({ projectId: 'YOUR_PROJECT_ID' });
await auth.signIn({ biometric: true });`,
  python: `# Install: pip install ghostauth
from ghostauth import Auth

auth = Auth(project_id='YOUR_PROJECT_ID')
auth.sign_in(biometric=True)`,
  curl: `# Use WebAuthn/Passkeys from the browser; server example
curl -X POST "$BACKEND_URL/auth/biometric/start" \\
  -H 'Content-Type: application/json' \\
  -d '{"user":"user@example.com"}'`
};

const languages = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
  { key: 'curl', label: 'cURL' },
];

const CodeSnippet = () => {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(snippets[active]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="code" className="bg-neutral-950 text-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/60 ring-1 ring-white/10 px-3.5 py-2 text-xs text-neutral-300">
              <Fingerprint className="h-4 w-4 text-cyan-400" />
              One line to biometric login
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Drop-in, passwordless by default</h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">Ship passkeys and biometrics without protocol plumbing. We handle flows, device binding, recovery, and risk — you ship product.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Smartphone className="h-4 w-4" /> Works on iOS, Android, and desktop
          </div>
        </div>

        <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10">
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setActive(l.key)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    active === l.key
                      ? 'bg-cyan-500 text-neutral-900 font-medium'
                      : 'bg-neutral-800/60 text-neutral-200 hover:bg-neutral-800'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button onClick={copy} className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white">
              {copied ? <Check className="h-4 w-4 text-cyan-400" /> : <Copy className="h-4 w-4" />} {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="relative m-0 p-4 md:p-6 overflow-auto text-sm leading-relaxed bg-gradient-to-br from-neutral-950 to-neutral-900">
            <code className="block whitespace-pre text-neutral-200">
{snippets[active]}
            </code>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/5 to-transparent" />
          </pre>
          <div className="flex items-center gap-2 px-4 md:px-6 py-3 border-t border-white/10 text-sm text-neutral-300">
            <Code className="h-4 w-4 text-cyan-400" /> No passwords, no sessions — signed challenges with device keys.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippet;
