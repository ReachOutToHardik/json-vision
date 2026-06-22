'use client';

import React from 'react';
import { Braces, ArrowLeft, FileText, Scale } from 'lucide-react';

export default function TermsOfService() {
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
          <div className="bg-purple-950/40 border border-purple-900/50 p-4 rounded-2xl w-fit text-purple-400">
            <FileText size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-sm text-slate-400">Last updated: June 22, 2026</p>
        </section>

        {/* Introduction */}
        <p className="text-slate-300 leading-relaxed">
          Welcome to JSON Vision. By accessing or using our developer utility at [jsonvision.vercel.app](https://jsonvision.vercel.app), you agree to comply with and be bound by the following Terms of Service.
        </p>

        {/* Detailed Sections */}
        <section className="space-y-8 text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Permitted Use</h2>
            <p>
              JSON Vision is a free, web-based tool provided for visual debugging, formatting, and path querying of JSON data. You may use this utility for commercial, personal, academic, or professional developer workflows.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Open Source License</h2>
            <p>
              The code and assets behind JSON Vision are licensed under the standard MIT License. You are free to view, fork, customize, or contribute to the repository at [github.com/ReachOutToHardik/json-vision](https://github.com/ReachOutToHardik/json-vision) according to the terms of the MIT license agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Disclaimer of Warranties</h2>
            <p className="text-sm border-l-2 border-purple-500 pl-4 bg-purple-950/10 py-3 rounded-r-lg">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
            <p>
              JSON Vision, its gradients, design structures, code implementations, and branding are the property of Hardik Joshi and its open-source contributors. All trademarks and project assets are reserved.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws applicable in the region of the primary developer (India), without regard to its conflict of law provisions.
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
