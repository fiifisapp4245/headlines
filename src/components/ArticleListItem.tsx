'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';

interface ArticleListItemProps {
  article: Article;
  onOpen: (article: Article) => void;
}

const CAT_LABEL: Record<string, string> = {
  TELECOM_AI: 'Telecom & AI',
  GENERAL_AI: 'General AI',
};

export function ArticleListItem({ article, onOpen }: ArticleListItemProps) {
  const [imgError, setImgError] = useState(false);

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
        <span className="inline-block rounded-sm bg-magenta/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-magenta">
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
      <div className="h-16 w-16 shrink-0 overflow-hidden sm:h-20 sm:w-20">
        {article.previewImageUrl && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.previewImageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={cn(
            'flex h-full w-full items-center justify-center',
            article.categories[0] === 'TELECOM_AI' ? 'bg-blue-950' : 'bg-violet-950'
          )}>
            <span className="text-[8px] font-bold uppercase text-white/30">AI</span>
          </div>
        )}
      </div>
    </div>
  );
}
