
import React from 'react';
import { cn } from "@/lib/utils";
import { TrendingUp, Star, Clock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  // New trending properties
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

  // Helper function to determine which trending platform has the highest score
  const getTopTrendingPlatform = () => {
    if (!product.trendingTikTok && !product.trendingYouTube && !product.trendingInstagram) return null;
    
    const platforms = [
      { name: 'TikTok', score: product.trendingTikTok || 0 },
      { name: 'YouTube', score: product.trendingYouTube || 0 },
      { name: 'Instagram', score: product.trendingInstagram || 0 }
    ];
    
    return platforms.reduce((max, platform) => 
      platform.score > max.score ? platform : max
    );
  };

  // Helper function to format the lastViewed date
  const formatLastViewed = () => {
    if (!product.lastViewed) return null;
    
    const lastViewedDate = new Date(product.lastViewed);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - lastViewedDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
  };

  const topTrendingPlatform = getTopTrendingPlatform();
  const lastViewedFormatted = formatLastViewed();

  return (
    <div 
      className={cn(
        "group flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card transition-premium hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.tag && (
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
              {product.tag}
            </span>
          </div>
        )}
        
        {product.discount && product.discount > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-destructive text-white">
              {`-${Math.round(product.discount * 100)}%`}
            </span>
          </div>
        )}
        
        {/* Trending badge */}
        {product.trendingScore && product.trendingScore > 80 && (
          <div className="absolute bottom-2 left-2 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-amber-500/90 text-white backdrop-blur-sm">
              <TrendingUp size={12} />
              Trending
              {topTrendingPlatform && topTrendingPlatform.score > 85 && (
                <span className="ml-1">on {topTrendingPlatform.name}</span>
              )}
            </span>
          </div>
        )}
        
        {/* Bestseller badge */}
        {product.isBestseller && (
          <div className="absolute bottom-2 right-2 z-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/90 text-white backdrop-blur-sm">
                    <Star size={14} fill="currentColor" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-primary text-primary-foreground text-xs">
                  <p>Bestseller</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        
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
        
        <div className="flex items-center mb-2 text-xs space-x-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating) 
                    ? "text-amber-500" 
                    : i < product.rating
                      ? "text-amber-500/50" 
                      : "text-gray-300"
                )}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-muted-foreground">
            ({product.ratingCount})
          </span>
        </div>

        {/* Last viewed indicator */}
        {lastViewedFormatted && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            <Clock size={12} />
            <span>Viewed {lastViewedFormatted}</span>
          </div>
        )}

        {product.trendingScore && product.trendingScore > 0 && (
          <div className="mt-1 mb-2">
            <div className="w-full bg-secondary rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-primary to-amber-500 h-1 rounded-full" 
                style={{ width: `${Math.min(product.trendingScore, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
              <span>Trend score</span>
              <span>{product.trendingScore}/100</span>
            </div>
          </div>
        )}
        
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
