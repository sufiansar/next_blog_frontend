"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 h-16 w-full bg-background/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/30 z-50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/30 dark:hover:shadow-slate-900/40">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* Logo with subtle animation */}
        <Link
          href="/"
          className="flex-shrink-0 group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="flex items-center gap-2">
            <Logo />
            {/* <span className="hidden lg:inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 ml-2">
              <Sparkles className="w-3 h-3 mr-1 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
              Premium
            </span> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <NavMenu className="bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/30 dark:border-slate-700/30" />
        </div>

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {/* <Link href="/contact" className="flex items-center">
              Contact Us
            </Link> */}
          </Button>

          <Button className="rounded-full px-6 py-2 text-sm md:text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 active:scale-95">
            <Link href="/login" className="flex items-center gap-2">
              <span>Login</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden ml-2">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
