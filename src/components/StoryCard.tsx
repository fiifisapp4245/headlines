'use client';

import { Bookmark, BookmarkCheck, Flame, Sparkles } from 'lucide-react';
import { Article, HeatSignal } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';

interface StoryCardProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpen: (article: Article) => void;
}

const HEAT_CONFIG: Record<
  NonNullable<HeatSignal>,
  { label: string; icon: React.ReactNode; className: string }
> = {
  BREAKING: {
    label: 'Breaking',
    icon: <Flame size={9} />,
    className: 'bg-red-500 text-white',
  },
  HOT: {
    label: 'Hot',
    icon: <Flame size={9} />,
    className: 'bg-orange-500 text-white',
  },
  NEW: {
    label: 'New',
    icon: <Sparkles size={9} />,
    className: 'bg-emerald-500 text-white',
  },
};

export function StoryCard({ article, isSaved, onToggleSave, onOpen }: StoryCardProps) {
  const heat = article.heatSignal ? HEAT_CONFIG[article.heatSignal] : null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group relative flex cursor-pointer flex-col gap-2 border-b border-border bg-card px-4 py-4 transition-colors hover:bg-muted/25"
    >
      {/* Left accent bar */}
      <div className="absolute inset-y-0 left-0 w-0.5 bg-transparent transition-colors group-hover:bg-foreground" />

      {/* Heat signal */}
      {heat && (
        <span
          className={cn(
            'absolute right-3 top-3 flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
            heat.className
          )}
        >
          {heat.icon}
          {heat.label}
        </span>
      )}

      {/* Category + meta */}
      <div className="flex items-center gap-2 pr-16">
        {article.categories.map((cat) => (
          <span
            key={cat}
            className={cn(
              'px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
              cat === 'TELECOM_AI'
                ? 'bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400'
                : 'bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400'
            )}
          >
            {cat === 'TELECOM_AI' ? 'Telecom' : 'AI'}
          </span>
        ))}
        <span className="text-xs text-muted-foreground">
          {article.source} · {formatTimeAgo(article.publishedAt)}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display text-sm font-bold leading-snug text-foreground decoration-foreground/40 underline-offset-2 group-hover:underline sm:text-[15px]">
        {article.title}
      </h2>

      {/* Summary + bookmark */}
      <div className="flex items-end justify-between gap-2">
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {article.summary}
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); onToggleSave(article.id); }}
          className={cn(
            'shrink-0 p-1 transition-colors',
            isSaved
              ? 'text-foreground'
              : 'text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground'
          )}
          aria-label={isSaved ? 'Remove from saved' : 'Save article'}
        >
          {isSaved ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
        </button>
      </div>
    </div>
  );
}
