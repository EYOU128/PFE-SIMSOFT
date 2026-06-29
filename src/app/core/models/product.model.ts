export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductScreenshot {
  title: string;
  kind: 'crm' | 'erp' | 'gmao' | 'pos' | 'code' | 'support';
}

export interface ProductBenefit {
  title: string;
  desc: string;
}

export interface ProductUseCase {
  industry: string;
  scenario: string;
}

export interface ProductStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  hero: string;
  icon: string;
  overview: string;
  objectives: string[];
  targets: string[];
  features: ProductFeature[];
  screenshots: ProductScreenshot[];
  benefits: ProductBenefit[];
  useCases: ProductUseCase[];
  stats: ProductStat[];
  faq: ProductFaq[];
}
