'use client';

import { RefreshCw, Moon, Sun } from 'lucide-react';
import { formatLastUpdated } from '@/lib/utils';

interface AppHeaderProps {
  lastUpdated: string;
  darkMode: boolean;
  onToggleDark: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export function AppHeader({
  lastUpdated,
  darkMode,
  onToggleDark,
  onRefresh,
  isRefreshing,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-foreground">
            Headlines
          </span>
          <span className="hidden rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground sm:inline">
            AI
          </span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted-foreground sm:block" suppressHydrationWarning>
            Updated {formatLastUpdated(lastUpdated)}
          </span>

          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
            aria-label="Refresh feed"
          >
            <RefreshCw
              size={13}
              className={isRefreshing ? 'animate-spin' : ''}
            />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={onToggleDark}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
