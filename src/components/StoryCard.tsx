'use client';

import { ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';

interface StoryCardProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export function StoryCard({ article, isSaved, onToggleSave }: StoryCardProps) {
  return (
    <div className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-4 transition-colors hover:border-border/60 hover:bg-muted/30">
      {/* Meta row */}
      <div className="flex items-center gap-2">
        {article.categories.map((cat) => (
          <span
            key={cat}
            className={cn(
              'rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
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
      <a
        href={article.articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link"
      >
        <h2 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover/link:text-foreground/80 sm:text-[15px]">
          {article.title}
          <ExternalLink
            size={11}
            className="ml-1.5 inline-block -translate-y-0.5 opacity-0 transition-opacity group-hover/link:opacity-50"
          />
        </h2>
      </a>

      {/* Summary + save */}
      <div className="flex items-end justify-between gap-2">
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {article.summary}
        </p>
        <button
          onClick={() => onToggleSave(article.id)}
          className={cn(
            'shrink-0 rounded p-1 transition-colors',
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
