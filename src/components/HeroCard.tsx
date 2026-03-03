'use client';

import { ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { ArticleImage } from './ArticleImage';

interface HeroCardProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpen: (article: Article) => void;
}

const CAT_LABEL: Record<string, string> = {
  TELECOM_AI: 'Telecom & AI',
  GENERAL_AI: 'General AI',
};

export function HeroCard({ article, onOpen }: HeroCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group cursor-pointer"
    >
      {/* Full-width hero image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '21/9' }}>
        {/* Fallback background — always rendered, hidden by image when it loads */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          article.categories[0] === 'TELECOM_AI' ? 'bg-blue-950' : 'bg-violet-950'
        )}>
          <span className="text-sm font-bold uppercase tracking-widest text-white/20">
            {CAT_LABEL[article.categories[0]]}
          </span>
        </div>
        <ArticleImage
          article={article}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Text content below image */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Category badge */}
        <div className="mb-3">
          <span className="inline-block rounded-sm bg-magenta px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl font-black leading-tight tracking-tight text-foreground decoration-foreground/40 underline-offset-4 group-hover:underline sm:text-3xl lg:text-4xl lg:leading-tight">
          {article.title}
        </h1>

        {/* Summary */}
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {article.summary}
        </p>

        {/* Meta + read link */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {article.author && <span>{article.author} · </span>}
            {article.source} · {formatTimeAgo(article.publishedAt)}
          </p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground/60 transition-colors group-hover:text-foreground">
            Read full story <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
