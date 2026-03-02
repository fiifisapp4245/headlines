'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { AppHeader } from '@/components/AppHeader';
import { TabBar } from '@/components/TabBar';
import { DailyBriefing } from '@/components/DailyBriefing';
import { HeroCard } from '@/components/HeroCard';
import { StoryCard } from '@/components/StoryCard';
import { CardGrid } from '@/components/CardGrid';
import { Sidebar } from '@/components/Sidebar';
import { EmptyState } from '@/components/EmptyState';
import { HeroSkeleton, SkeletonCard } from '@/components/LoadingState';
import { RefreshConfirmation } from '@/components/RefreshConfirmation';
import { ReaderView } from '@/components/ReaderView';
import { useSaved } from '@/lib/saved-store';
import { articles, dailyBriefing, lastUpdated as initialLastUpdated } from '@/lib/mock-data';
import { TabId, Article } from '@/lib/types';

const THEME_KEY = 'headlines-theme';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [darkMode, setDarkMode] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showRefreshed, setShowRefreshed] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(initialLastUpdated);
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const { savedIds, toggle, isSaved } = useSaved();

  // Initialise dark mode from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date().toISOString());
      setShowRefreshed(true);
      setTimeout(() => setShowRefreshed(false), 2200);
    }, 1500);
  }, []);

  const hero: Article = useMemo(
    () => articles.find((a) => a.isHero) ?? articles[0],
    []
  );

  const secondary: Article[] = useMemo(() => {
    const rest = articles.filter((a) => a.id !== hero.id);
    switch (activeTab) {
      case 'general':
        return rest.filter((a) => a.categories.includes('GENERAL_AI'));
      case 'telecom':
        return rest.filter((a) => a.categories.includes('TELECOM_AI'));
      case 'saved':
        return articles.filter((a) => savedIds.has(a.id));
      default:
        return rest;
    }
  }, [activeTab, savedIds, hero.id]);

  const showHero = activeTab !== 'saved' || savedIds.has(hero.id);

  const telecomArticles = useMemo(
    () => articles.filter((a) => a.categories.includes('TELECOM_AI')),
    []
  );

  const emptyMessages: Partial<Record<TabId, string>> = {
    telecom: 'No Telecom & AI news in the last 24 hours — check back soon.',
    saved: "You haven't saved any stories yet. Tap the bookmark icon on any card.",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppHeader
        lastUpdated={lastUpdated}
        darkMode={darkMode}
        onToggleDark={toggleDark}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        savedCount={savedIds.size}
      />

      <DailyBriefing text={dailyBriefing} />

      {/* Main content area */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:flex lg:gap-8">
        {/* Feed column */}
        <main className="min-w-0 flex-1">
          {/* Hero */}
          {isRefreshing ? (
            <HeroSkeleton />
          ) : showHero && activeTab !== 'saved' ? (
            <div className="mb-6 -mx-4 sm:-mx-6 lg:mx-0">
              <HeroCard
                article={hero}
                isSaved={isSaved(hero.id)}
                onToggleSave={toggle}
                onOpen={setOpenArticle}
              />
            </div>
          ) : null}

          {/* Secondary cards */}
          {isRefreshing ? (
            <CardGrid>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </CardGrid>
          ) : secondary.length === 0 ? (
            <EmptyState
              message={emptyMessages[activeTab] ?? 'No stories match this filter.'}
            />
          ) : (
            <CardGrid>
              {secondary.map((article) => (
                <StoryCard
                  key={article.id}
                  article={article}
                  isSaved={isSaved(article.id)}
                  onToggleSave={toggle}
                  onOpen={setOpenArticle}
                />
              ))}
            </CardGrid>
          )}
        </main>

        {/* Sidebar — desktop only */}
        <div className="mt-6 shrink-0 lg:mt-0 lg:w-80 xl:w-96">
          <Sidebar
            telecomArticles={telecomArticles}
            lastUpdated={lastUpdated}
            onOpen={setOpenArticle}
          />
        </div>
      </div>

      <RefreshConfirmation visible={showRefreshed} />

      {/* Reader View overlay */}
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
