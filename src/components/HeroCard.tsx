'use client';

import { Bookmark, BookmarkCheck, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { Article, HeatSignal } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { useState } from 'react';

interface HeroCardProps {
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
    icon: <Flame size={10} />,
    className: 'bg-red-500 text-white',
  },
  HOT: {
    label: 'Hot',
    icon: <Flame size={10} />,
    className: 'bg-orange-500 text-white',
  },
  NEW: {
    label: 'New',
    icon: <Sparkles size={10} />,
    className: 'bg-emerald-500 text-white',
  },
};

function CategoryFallback({ category }: { category: string }) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        category === 'TELECOM_AI'
          ? 'bg-blue-950 dark:bg-blue-950'
          : 'bg-violet-950 dark:bg-violet-950'
      )}
    >
      <span className="text-sm font-bold uppercase tracking-widest text-white/40">
        {category === 'TELECOM_AI' ? 'Telecom & AI' : 'General AI'}
      </span>
    </div>
  );
}

export function HeroCard({ article, isSaved, onToggleSave, onOpen }: HeroCardProps) {
  const [imgError, setImgError] = useState(false);
  const heat = article.heatSignal ? HEAT_CONFIG[article.heatSignal] : null;
  const primaryCategory = article.categories[0];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group relative cursor-pointer overflow-hidden border-b border-border bg-card transition-colors hover:bg-muted/20"
    >
      {/* Preview image */}
      <div className="relative h-48 w-full sm:h-60 lg:h-72">
        {article.previewImageUrl && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.previewImageUrl}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <CategoryFallback category={primaryCategory} />
        )}
        {/* Heat signal — overlaid on image, no border radius */}
        {heat && (
          <span
            className={cn(
              'absolute left-0 top-0 flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow',
              heat.className
            )}
          >
            {heat.icon}
            {heat.label}
          </span>
        )}
      </div>

      {/* Text content */}
      <div className="px-4 py-5 sm:px-6 sm:py-6 lg:py-8">
        {/* Category + time */}
        <div className="mb-3 flex items-center gap-2">
          {article.categories.map((cat) => (
            <span
              key={cat}
              className={cn(
                'px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
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
        <h1 className="font-display text-2xl font-black leading-tight tracking-tight text-foreground decoration-foreground/40 underline-offset-4 group-hover:underline sm:text-3xl lg:text-4xl lg:leading-tight">
          {article.title}
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {article.summary}
        </p>

        <div className="mt-4 flex items-center justify-between">
          {/* "Read full story" cue */}
          <span className="flex items-center gap-1 text-sm font-semibold text-foreground/50 transition-colors group-hover:text-foreground">
            Read full story <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); onToggleSave(article.id); }}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium transition-colors',
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
