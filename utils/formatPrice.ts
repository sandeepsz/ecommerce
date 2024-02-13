import { siteConfig } from '@/config/site';

export const formatPrice = (price: number, pricePrefix?: string) =>
  `${siteConfig.currency.symbol}${pricePrefix ?? ''}${price.toFixed(2)}`;
