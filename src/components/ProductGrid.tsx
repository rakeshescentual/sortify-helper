
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { SortOption } from './SortOptions';
import ProductSkeleton from './product/ProductSkeleton';
import ProductList from './product/ProductList';
import { getSortedProducts } from './product/ProductDataUtils';

interface ProductGridProps {
  sortOption: SortOption;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ sortOption, className }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get products based on the selected option
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API request delay
    const timeoutId = setTimeout(() => {
      const sortedProducts = getSortedProducts(sortOption.value);
      setProducts(sortedProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timeoutId);
  }, [sortOption]);

  if (isLoading) {
    return <ProductSkeleton className={className} />;
  }

  return <ProductList products={products} className={className} />;
};

export default ProductGrid;
