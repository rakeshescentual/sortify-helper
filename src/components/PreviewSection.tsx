
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
          <ProductGrid sortOption={currentSortOption} />
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
