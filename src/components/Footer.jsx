import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold text-lg">GhostAuth</div>
            <p className="text-sm text-neutral-400 mt-1">Passwordless authentication that disappears.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:founders@ghostauth.dev" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} GhostAuth, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
