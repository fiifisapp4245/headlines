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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero image */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[420px]">
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
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Controls overlaid on image — centered at bottom */}
          <div
            className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              onClick={() => api?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Previous story"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === current
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => api?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Next story"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="mx-auto max-w-7xl px-4 pt-5 pb-6 sm:px-6">
        <span className="inline-block rounded-sm bg-magenta px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {CAT_LABEL[article.categories[0]] ?? article.categories[0]}
        </span>

        <h1 className="mt-3 font-display text-2xl font-black leading-tight tracking-tight text-foreground decoration-foreground/40 underline-offset-4 group-hover:underline sm:text-3xl lg:text-4xl lg:leading-tight">
          {article.title}
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {article.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {article.author && <span>{article.author} · </span>}
            {article.source} · {formatTimeAgo(article.publishedAt)}
          </p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground/60 transition-colors group-hover:text-foreground">
            Read full story <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>
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
        {/* ml-0 / pl-0 strip shadcn's default gutter */}
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
