'use client';

import { ArrowDown } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { ArticleImage } from './ArticleImage';

interface ArticleListItemProps {
  article: Article;
  onOpen: (article: Article) => void;
}

const CAT_LABEL: Record<string, string> = {
  TELECOM_AI: 'Telecom & AI',
  GENERAL_AI: 'General AI',
};

const CAT_SOFT: Record<string, string> = {
  TELECOM_AI: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  GENERAL_AI: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
};

export function ArticleListItem({ article, onOpen }: ArticleListItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group flex cursor-pointer items-start gap-3 py-3"
    >
      {/* Text left */}
      <div className="min-w-0 flex-1">
        <span className={cn('inline-block rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider', CAT_SOFT[article.categories[0]] ?? 'bg-magenta/10 text-magenta')}>
          {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
        </span>
        <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-foreground decoration-foreground/40 underline-offset-2 group-hover:underline">
          {article.title}
        </h3>
        <span className="mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-semibold text-magenta">
          Read more <ArrowDown size={10} />
        </span>
      </div>

      {/* Thumbnail right */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
        {/* Fallback background */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          article.categories[0] === 'TELECOM_AI' ? 'bg-blue-950' : 'bg-violet-950'
        )}>
          <span className="text-[8px] font-bold uppercase text-white/30">AI</span>
        </div>
        <ArticleImage
          article={article}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
