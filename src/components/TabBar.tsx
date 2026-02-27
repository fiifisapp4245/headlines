'use client';

import { cn } from '@/lib/utils';
import { TabId } from '@/lib/types';
import { Bookmark } from 'lucide-react';

interface TabBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  savedCount: number;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General AI' },
  { id: 'telecom', label: 'Telecom & AI' },
  { id: 'saved', label: 'Saved' },
];

export function TabBar({ activeTab, onTabChange, savedCount }: TabBarProps) {
  return (
    <div className="sticky top-14 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                activeTab === tab.id
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {tab.id === 'saved' && <Bookmark size={12} />}
              {tab.label}
              {tab.id === 'saved' && savedCount > 0 && (
                <span
                  className={cn(
                    'ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold',
                    activeTab === 'saved'
                      ? 'bg-background/20 text-background'
                      : 'bg-muted-foreground/20 text-muted-foreground'
                  )}
                >
                  {savedCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
