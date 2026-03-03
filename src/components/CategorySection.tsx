import { Article, Section } from '@/lib/types';
import { FeaturedCard } from './FeaturedCard';
import { ArticleListItem } from './ArticleListItem';

interface CategorySectionProps {
  section: Section;
  articles: Article[];
  onOpen: (article: Article) => void;
}

export function CategorySection({ section, articles, onOpen }: CategorySectionProps) {
  if (articles.length === 0) return null;

  const featured = articles[0];
  const listItems = articles.slice(1, 4);

  return (
    <section>
      {/* Section header */}
      <div className="mb-5 flex items-center gap-3">
        <div className={`h-5 w-1 rounded-full ${section.accentClass}`} />
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {section.label}
        </h2>
      </div>

      {/* Content grid: featured left + list right */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Featured article */}
        <div className="lg:w-[55%]">
          <FeaturedCard article={featured} onOpen={onOpen} />
        </div>

        {/* List articles */}
        {listItems.length > 0 && (
          <div className="divide-y divide-border lg:flex-1">
            {listItems.map((article) => (
              <ArticleListItem key={article.id} article={article} onOpen={onOpen} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
