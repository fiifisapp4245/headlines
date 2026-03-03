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

export function FeaturedCard({ article, onOpen }: FeaturedCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
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
      </div>

      {/* Text */}
      <div className="mt-3">
        {/* Category badge */}
        <span className="inline-block rounded-sm bg-magenta px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
        </span>

        {/* Headline */}
        <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground decoration-foreground/40 underline-offset-2 group-hover:underline sm:text-lg">
          {article.title}
        </h3>

        {/* Meta */}
        <p className="mt-1.5 text-xs text-muted-foreground">
          {article.source} · {formatTimeAgo(article.publishedAt)}
        </p>

        {/* Read more */}
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-magenta">
          Read more <ArrowDown size={11} />
        </span>
      </div>
    </div>
  );
}
