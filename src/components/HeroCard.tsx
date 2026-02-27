'use client';

import { ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';

interface HeroCardProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export function HeroCard({ article, isSaved, onToggleSave }: HeroCardProps) {
  return (
    <div className="group relative border-b border-border bg-card transition-colors hover:bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        {/* Category badges */}
        <div className="mb-3 flex items-center gap-2">
          {article.categories.map((cat) => (
            <span
              key={cat}
              className={cn(
                'rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                cat === 'TELECOM_AI'
                  ? 'bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400'
                  : 'bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400'
              )}
            >
              {cat === 'TELECOM_AI' ? 'Telecom & AI' : 'General AI'}
            </span>
          ))}
          <span className="text-xs text-muted-foreground">
            {formatTimeAgo(article.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <a
          href={article.articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link block"
        >
          <h1 className="text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl lg:leading-tight">
            {article.title}
            <ExternalLink
              size={18}
              className="ml-2 inline-block -translate-y-0.5 opacity-0 transition-opacity group-hover/link:opacity-60"
            />
          </h1>
        </a>

        {/* Summary + source */}
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {article.summary}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground/60">
            {article.source}
          </span>
          <button
            onClick={() => onToggleSave(article.id)}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
              isSaved
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
            aria-label={isSaved ? 'Remove from saved' : 'Save article'}
          >
            {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
