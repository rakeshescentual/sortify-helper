
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import SortOptions, { SortOption } from './SortOptions';
import ProductGrid from './ProductGrid';

interface PreviewSectionProps {
  className?: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ className }) => {
  const [currentSortOption, setCurrentSortOption] = useState<SortOption>({
    id: 'featured',
    label: 'Featured',
    value: 'featured'
  });

  const handleSortChange = (option: SortOption) => {
    setCurrentSortOption(option);
  };

  // Helper to determine if the current sort is trending-related
  const isTrendingSort = () => {
    return ['trending', 'trending-tiktok', 'trending-youtube', 'trending-instagram'].includes(currentSortOption.value);
  };

  return (
    <section className={cn(
      "w-full max-w-7xl mx-auto px-4 py-8",
      className
    )}>
      <div className="mb-8">
        <h2 className="text-2xl font-medium mb-6">Live Demo</h2>
        <div className="p-6 border border-border rounded-lg bg-card">
          <SortOptions 
            onChange={handleSortChange} 
            className="mb-8"
          />
          
          {isTrendingSort() && (
            <div className="mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
              <h3 className="text-sm font-medium mb-2">About Trending Sort</h3>
              <p className="text-sm text-muted-foreground">
                {currentSortOption.value === 'trending' && 
                  "Products are sorted based on overall AI sentiment analysis across the internet, including social media platforms."}
                {currentSortOption.value === 'trending-tiktok' && 
                  "Products are sorted based on AI sentiment analysis specifically from TikTok content and engagement."}
                {currentSortOption.value === 'trending-youtube' && 
                  "Products are sorted based on AI sentiment analysis specifically from YouTube content and engagement."}
                {currentSortOption.value === 'trending-instagram' && 
                  "Products are sorted based on AI sentiment analysis specifically from Instagram content and engagement."}
              </p>
            </div>
          )}

          {currentSortOption.value === 'discount-desc' && (
            <div className="mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
              <h3 className="text-sm font-medium mb-2">About Discount Sort</h3>
              <p className="text-sm text-muted-foreground">
                Products are sorted by highest discount percentage, showing you the best deals first.
              </p>
            </div>
          )}
          
          <ProductGrid sortOption={currentSortOption} />
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
