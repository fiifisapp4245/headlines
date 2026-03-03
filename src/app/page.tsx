'use client';

import { useState, useEffect, useMemo } from 'react';
import { NavBar } from '@/components/NavBar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CategorySection } from '@/components/CategorySection';
import { SiteFooter } from '@/components/SiteFooter';
import { RefreshConfirmation } from '@/components/RefreshConfirmation';
import { ReaderView } from '@/components/ReaderView';
import { useSaved } from '@/lib/saved-store';
import { articles, sections, heroArticleIds, dailyBriefing } from '@/lib/mock-data';
import { Article } from '@/lib/types';

const THEME_KEY = 'headlines-theme';

export default function Home() {
  const [showRefreshed] = useState(false);
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const { savedIds, toggle, isSaved } = useSaved();

  // Initialise dark mode from localStorage / system preference
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const articleMap = useMemo(
    () => new Map(articles.map((a) => [a.id, a])),
    []
  );

  const heroArticles = useMemo(
    () => heroArticleIds.map((id) => articleMap.get(id)).filter((a): a is Article => a !== undefined),
    [articleMap]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar savedCount={savedIds.size} />

      {/* Page title */}
      <div className="border-b border-border bg-gradient-to-b from-magenta/5 to-transparent py-10 text-center">
        <h1 className="font-display text-5xl font-black text-magenta sm:text-6xl">
          Headlines
        </h1>
        <p className="mx-auto mt-3 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
          {dailyBriefing}
        </p>
      </div>

      {/* Hero carousel — full width, no max-w constraint */}
      <HeroCarousel articles={heroArticles} onOpen={setOpenArticle} />

      {/* Category sections */}
      <div className="mx-auto max-w-7xl divide-y divide-border px-4 sm:px-6">
        {sections.map((section) => {
          const sectionArticles = section.articleIds
            .map((id) => articleMap.get(id))
            .filter((a): a is Article => a !== undefined);

          return (
            <div key={section.id} className="py-10">
              <CategorySection
                section={section}
                articles={sectionArticles}
                onOpen={setOpenArticle}
              />
            </div>
          );
        })}
      </div>

      <SiteFooter />

      <RefreshConfirmation visible={showRefreshed} />

      {openArticle && (
        <ReaderView
          article={openArticle}
          isSaved={isSaved(openArticle.id)}
          onToggleSave={toggle}
          onClose={() => setOpenArticle(null)}
        />
      )}
    </div>
  );
}
