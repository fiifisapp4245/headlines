'use client';

import { Search, Bell, User } from 'lucide-react';

interface NavBarProps {
  savedCount?: number;
}

function TMobileLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="T-Mobile">
      <rect width="28" height="28" rx="4" fill="#E20074" />
      <path d="M6 8h16v3.5h-6.25V22h-3.5V11.5H6V8z" fill="white" />
    </svg>
  );
}

export function NavBar({ savedCount }: NavBarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D]">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: logo + nav links */}
        <div className="flex items-center gap-8">
          <TMobileLogo />
          <nav className="hidden items-center gap-6 md:flex">
            {['Home', 'Categories', 'Events', 'Resources'].map((item) => (
              <button
                key={item}
                className={
                  item === 'Home'
                    ? 'border-b-2 border-magenta pb-0.5 text-sm font-semibold text-white'
                    : 'text-sm font-medium text-white/60 transition-colors hover:text-white'
                }
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <button className="text-white/60 transition-colors hover:text-white" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="relative text-white/60 transition-colors hover:text-white" aria-label="Notifications">
            <Bell size={18} />
            {savedCount != null && savedCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-magenta text-[9px] font-bold text-white">
                {savedCount}
              </span>
            )}
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white" aria-label="Account">
            <User size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
