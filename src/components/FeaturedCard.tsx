'use client';

import { ArrowDown } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { ArticleImage } from './ArticleImage';

interface FeaturedCardProps {
  article: Article;
  onOpen: (article: Article) => void;
}

const CAT_LABEL: Record<string, string> = {
  TELECOM_AI: 'Telecom & AI',
  GENERAL_AI: 'General AI',
};

const CAT_BADGE: Record<string, string> = {
  TELECOM_AI: 'bg-blue-600',
  GENERAL_AI: 'bg-violet-600',
};

export function FeaturedCard({ article, onOpen }: FeaturedCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group cursor-pointer"
    >
      {/* Image with glass headline overlay */}
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
        {/* Fallback background */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          article.categories[0] === 'TELECOM_AI' ? 'bg-blue-950' : 'bg-violet-950'
        )}>
          <span className="text-xs font-bold uppercase tracking-widest text-white/30">
            {CAT_LABEL[article.categories[0]]}
          </span>
        </div>
        <ArticleImage
          article={article}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Gradient scrim */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Liquid glass headline */}
        <div className="absolute inset-x-3 bottom-3">
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-xl">
            <span className={cn('inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white', CAT_BADGE[article.categories[0]] ?? 'bg-magenta')}>
              {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
            </span>
            <h3 className="mt-1.5 font-display text-sm font-bold leading-snug text-white decoration-white/40 underline-offset-2 group-hover:underline sm:text-base">
              {article.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Meta below image */}
      <div className="mt-2.5 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {article.source} · {formatTimeAgo(article.publishedAt)}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-magenta">
          Read more <ArrowDown size={11} />
        </span>
      </div>
    </div>
  );
}
