'use client';

import React from 'react';
import { Braces, ArrowLeft, Network, Eye, Search, Lock, Zap } from 'lucide-react';

export default function About() {
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
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight">
            About JSON Vision
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            A premium, client-side developer utility for inspecting, validating, and exploring complex JSON payloads dynamically.
          </p>
        </section>

        {/* Feature Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300">
            <div className="bg-blue-950/50 p-3 rounded-lg w-fit text-blue-400 mb-4">
              <Eye size={20} />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Interactive Tree View</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Explore your JSON nodes using a collapsable, color-coded structure. Easily copy paths directly to your clipboard in a single click.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-purple-500/30 transition-all duration-300">
            <div className="bg-purple-950/50 p-3 rounded-lg w-fit text-purple-400 mb-4">
              <Network size={20} />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Dynamic Graph Layout</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Visualize relationships, array item schemas, and deep nesting structures in an intuitive nodes-and-edges graph. Drag to arrange and organize.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
            <div className="bg-emerald-950/50 p-3 rounded-lg w-fit text-emerald-400 mb-4">
              <Search size={20} />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">JSONPath Queries</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Query objects using standard JSONPath queries instantly. Extract precise subsets of data without having to parse payloads manually.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-amber-500/30 transition-all duration-300">
            <div className="bg-amber-950/50 p-3 rounded-lg w-fit text-amber-400 mb-4">
              <Lock size={20} />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">100% Privacy Focused</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              No servers are involved. Your JSON data is processed strictly in your local browser sandbox, keeping sensitive production configurations secure.
            </p>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Why We Built JSON Vision</h2>
          <p>
            Standard JSON viewers present data linearly, making it extremely difficult to identify connections, understand relationships, or extract specific object keys in deeply nested structures. JSON Vision resolves this by treating JSON objects as schemas that developers can explore visually or filter instantly.
          </p>
          <p>
            Whether you are debugging API payloads, modeling database schemas, or writing clean configurations, JSON Vision enables you to visualize data formats on the fly with no installation or signup required.
          </p>
        </section>

        {/* Technical Highlights */}
        <section className="bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-slate-800/80 rounded-2xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center space-x-2">
            <Zap size={18} className="text-yellow-400 animate-pulse" />
            <span>Developer-First Platform Features</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span>Fast React-based rendering</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
              <span>SVG rendering for node-links</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Real-time linter and error visualizer</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              <span>Download & copy features built-in</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 mt-12 text-center text-xs text-slate-500">
        <p>© 2025 JSON Vision. Built by Hardik Joshi. All rights reserved.</p>
      </footer>
    </div>
  );
}
