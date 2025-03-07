
import React from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Product } from '../SortableItem';

interface ProductBadgesProps {
  product: Product;
}

const ProductBadges: React.FC<ProductBadgesProps> = ({ product }) => {
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

  const topTrendingPlatform = getTopTrendingPlatform();

  return (
    <>
      {/* Tag badge */}
      {product.tag && (
        <div className="absolute top-2 left-2 z-10">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
            {product.tag}
          </span>
        </div>
      )}
      
      {/* Discount badge */}
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
    </>
  );
};

export default ProductBadges;
