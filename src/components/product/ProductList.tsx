
import React from 'react';
import { cn } from "@/lib/utils";
import SortableItem, { Product } from '../SortableItem';

interface ProductListProps {
  products: Product[];
  className?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-6",
      className
    )}>
      {products.map((product) => (
        <div key={product.id} className="animate-fade-in">
          <SortableItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
