export interface NavItem {
  label: string;
  href: string;
  isRed?: boolean;
}

export interface HeroSlide {
  src: string;
  alt: string;
  href?: string;
}

export interface CategoryBanner {
  src: string;
  alt: string;
  label: string;
  caption: string;
  href: string;
}

export interface ProductCard {
  src: string;
  alt: string;
  name: string;
  href?: string;
}

export interface LifestyleCard {
  src: string;
  alt: string;
  title: string;
  href?: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string; isColored?: boolean }[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
