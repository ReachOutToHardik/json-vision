'use client';

import React from 'react';
import { Braces, ArrowLeft, Shield, Lock, EyeOff } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500/30">
      {/* Navigation Header */}
      <header className="border-b border-slate-900 bg-slate-900/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Braces className="text-white" size={18} />
            </div>
            <span className="font-bold text-white tracking-wide">JSON Vision</span>
          </div>
          <a
            href="/"
            className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back to Tool</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-10">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="bg-blue-950/40 border border-blue-900/50 p-4 rounded-2xl w-fit text-blue-400">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-sm text-slate-400">Last updated: June 22, 2026</p>
        </section>

        {/* Highlight Banner */}
        <section className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-slate-800 p-6 rounded-xl space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center space-x-2">
            <Lock size={18} className="text-emerald-400" />
            <span>100% Client-Side Execution</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            JSON Vision parses all of your JSON payloads directly inside your browser. **None of your data is ever transmitted, processed, stored, or analyzed on our servers.** All visualization, formatting, and path queries are computed locally via client-side JavaScript.
          </p>
        </section>

        {/* Detailed Sections */}
        <section className="space-y-8 text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Do Not Collect</h2>
            <p>
              When you paste, upload, or query JSON payloads using JSON Vision, that data remains strictly in your system&apos;s volatile memory. We do not use databases, backend loggers, or analytics engines to capture or retain the structures or contents of the files you import.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Local Storage and Session State</h2>
            <p>
              Any state persistence (such as saving the view layout mode or keeping your current payload loaded across page refreshes) is handled entirely using standard client-side browser mechanisms like state variables and local memory. No authentication or cookies are used to track sessions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Third-Party Integrations</h2>
            <p>
              JSON Vision is hosted on secure global hosting platforms (such as Vercel). These platforms may collect standard web server access logs (such as IP address, user-agent, and request timestamps) to maintain platform stability and detect malicious traffic. These logs do not contain any of the JSON payloads you supply to the application.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted directly to this URL, and the modified date at the top of this page will be updated accordingly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this privacy policy or client-side operations, feel free to reach out via email at: **cloud1inthesky@gmail.com**.
            </p>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 mt-12 text-center text-xs text-slate-500">
        <p>© 2025 JSON Vision. Built by Hardik Joshi. All rights reserved.</p>
      </footer>
    </div>
  );
}
