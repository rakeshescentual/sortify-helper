
import React from 'react';
import { cn } from "@/lib/utils";

interface ProductSkeletonProps {
  count?: number;
  className?: string;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ 
  count = 8,
  className 
}) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-square bg-secondary rounded-lg mb-3"></div>
          <div className="h-3 bg-secondary rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-secondary rounded w-2/3 mb-2"></div>
          <div className="h-3 bg-secondary rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
