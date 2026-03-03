'use client';

import { useState, useCallback } from 'react';
import { ArticleImage } from './ArticleImage';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';

interface HeroCarouselProps {
  articles: Article[];
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

const HEAT_BADGE: Record<string, string> = {
  BREAKING: 'bg-red-600',
  HOT: 'bg-orange-500',
  NEW: 'bg-emerald-600',
};

interface HeroSlideProps {
  article: Article;
  onOpen: (a: Article) => void;
  api: CarouselApi;
  current: number;
  total: number;
}

function HeroSlide({ article, onOpen, api, current, total }: HeroSlideProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(article)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(article); }}
      className="group cursor-pointer"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Hero image */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[480px]">
          {/* Fallback background */}
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

          {/* Gradient scrim */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Liquid glass headline panel */}
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-xl sm:px-5 sm:py-4">
              {/* Category + heat signal badges */}
              <div className="flex items-center gap-2">
                <span className={cn('inline-block rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white', CAT_BADGE[article.categories[0]] ?? 'bg-magenta')}>
                  {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
                </span>
                {article.heatSignal && (
                  <span className={cn('inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white', HEAT_BADGE[article.heatSignal] ?? 'bg-gray-600')}>
                    {article.heatSignal}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-2 font-display text-lg font-black leading-tight tracking-tight text-white decoration-white/40 underline-offset-4 group-hover:underline sm:text-2xl lg:text-3xl">
                {article.title}
              </h1>

              {/* Summary — large screens only */}
              <p className="mt-1.5 hidden text-sm leading-relaxed text-white/70 lg:line-clamp-2">
                {article.summary}
              </p>

              {/* Bottom row: meta + nav controls */}
              <div
                className="mt-3 flex items-center justify-between gap-4"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <p className="truncate text-xs text-white/50">
                  {article.author && <span>{article.author} · </span>}
                  {article.source} · {formatTimeAgo(article.publishedAt)}
                </p>

                {/* Nav controls */}
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: total }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={cn(
                          'h-1.5 rounded-full transition-all duration-300',
                          i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => api?.scrollNext()}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                    aria-label="Next story"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroCarousel({ articles, onOpen }: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onApiChange = useCallback((carouselApi: CarouselApi) => {
    setApi(carouselApi);
    carouselApi?.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, []);

  return (
    <div className="border-b border-border">
      <Carousel
        setApi={onApiChange}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {articles.map((article) => (
            <CarouselItem key={article.id} className="pl-0">
              <HeroSlide
                article={article}
                onOpen={onOpen}
                api={api}
                current={current}
                total={articles.length}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
