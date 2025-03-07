
import React from 'react';
import { cn } from "@/lib/utils";

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
        {product.tag && (
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
              {product.tag}
            </span>
          </div>
        )}
        
        {product.discount && (
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-destructive text-white">
              {`-${Math.round(product.discount * 100)}%`}
            </span>
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
        
        <div className="mt-auto">
          {product.discount ? (
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
