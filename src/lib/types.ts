export type Category = 'GENERAL_AI' | 'TELECOM_AI';
export type TabId = 'all' | 'general' | 'telecom' | 'saved';

export interface Article {
  id: string;
  title: string;
  source: string;
  articleUrl: string;
  publishedAt: string; // ISO timestamp
  summary: string;     // max ~20 words
  categories: Category[];
  isHero?: boolean;
}
