
import React from 'react';
import { cn } from "@/lib/utils";
import ProductBadges from './product/ProductBadges';
import ProductRating from './product/ProductRating';
import TrendingScoreIndicator from './product/TrendingScoreIndicator';
import LastViewedIndicator from './product/LastViewedIndicator';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
  ratingCount: number;
  date: string;
  discount?: number;
  tag?: string;
  // Trending properties
  trendingScore?: number;
  trendingTikTok?: number;
  trendingYouTube?: number;
  trendingInstagram?: number;
  isBestseller?: boolean;
  lastViewed?: string;
};

interface SortableItemProps {
  product: Product;
  className?: string;
}

const SortableItem: React.FC<SortableItemProps> = ({ product, className }) => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  }).format(product.price);
  
  const discountedPrice = product.discount 
    ? new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      }).format(product.price * (1 - product.discount))
    : null;

  return (
    <div 
      className={cn(
        "group flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card transition-premium hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <ProductBadges product={product} />
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
        <h3 className="font-medium text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <ProductRating rating={product.rating} ratingCount={product.ratingCount} />
        
        <LastViewedIndicator lastViewed={product.lastViewed} />

        <TrendingScoreIndicator score={product.trendingScore || 0} />
        
        <div className="mt-auto">
          {product.discount && product.discount > 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-destructive font-medium">{discountedPrice}</span>
              <span className="text-muted-foreground text-sm line-through">{formattedPrice}</span>
            </div>
          ) : (
            <span className="font-medium">{formattedPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
