
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import FilterTag from './FilterTag';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';

export type SortOption = {
  id: string;
  label: string;
  value: string;
};

const DEFAULT_SORT_OPTIONS: SortOption[] = [
  { id: 'featured', label: 'Featured', value: 'featured' },
  { id: 'price-low', label: 'Price: Low to High', value: 'price-asc' },
  { id: 'price-high', label: 'Price: High to Low', value: 'price-desc' },
  { id: 'newest', label: 'Newest', value: 'newest' },
  { id: 'rating', label: 'Best Rating', value: 'rating-desc' },
  { id: 'popularity', label: 'Most Popular', value: 'popularity-desc' },
];

interface SortOptionsProps {
  options?: SortOption[];
  onChange: (option: SortOption) => void;
  className?: string;
}

const SortOptions: React.FC<SortOptionsProps> = ({ 
  options = DEFAULT_SORT_OPTIONS,
  onChange,
  className 
}) => {
  const [activeOption, setActiveOption] = useState<SortOption>(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleSelectOption = (option: SortOption) => {
    setActiveOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowFilter(!showFilter)}
            className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full transition-premium-fast bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full transition-premium-fast bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              <span>Sort by: </span>
              <span className="font-medium">{activeOption.label}</span>
              <ChevronDown size={14} className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")} />
            </button>

            {isOpen && (
              <div className="absolute top-full mt-2 left-0 z-10 w-56 p-1 rounded-lg glass shadow-lg border border-border animate-scale-in">
                <div className="overflow-hidden rounded-md">
                  {options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-2 text-sm transition-premium-fast cursor-pointer",
                        option.id === activeOption.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary/60"
                      )}
                    >
                      <span>{option.label}</span>
                      {option.id === activeOption.id && <Check size={14} />}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto py-1 no-scrollbar">
          <span className="text-xs text-muted-foreground whitespace-nowrap">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            <FilterTag active onRemove={() => console.log('Remove category')}>Category: Skincare</FilterTag>
            <FilterTag active onRemove={() => console.log('Remove brand')}>Brand: Escentual</FilterTag>
            <FilterTag active onRemove={() => console.log('Remove price')}>Price: £10-£50</FilterTag>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="mt-4 p-4 rounded-lg border border-border bg-card animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <FilterTag onClick={() => console.log('Category 1')}>Skincare</FilterTag>
                <FilterTag onClick={() => console.log('Category 2')}>Makeup</FilterTag>
                <FilterTag onClick={() => console.log('Category 3')}>Fragrances</FilterTag>
                <FilterTag onClick={() => console.log('Category 4')}>Hair</FilterTag>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Brands</h3>
              <div className="flex flex-wrap gap-2">
                <FilterTag onClick={() => console.log('Brand 1')}>Escentual</FilterTag>
                <FilterTag onClick={() => console.log('Brand 2')}>La Roche-Posay</FilterTag>
                <FilterTag onClick={() => console.log('Brand 3')}>Vichy</FilterTag>
                <FilterTag onClick={() => console.log('Brand 4')}>Avène</FilterTag>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                <FilterTag onClick={() => console.log('Price 1')}>Under £10</FilterTag>
                <FilterTag onClick={() => console.log('Price 2')}>£10-£50</FilterTag>
                <FilterTag onClick={() => console.log('Price 3')}>£50-£100</FilterTag>
                <FilterTag onClick={() => console.log('Price 4')}>Over £100</FilterTag>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortOptions;
