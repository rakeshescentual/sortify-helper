
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import SortableItem, { Product } from './SortableItem';
import { SortOption } from './SortOptions';

// Sample product data
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "La Roche-Posay Anthelios UVMUNE 400 Invisible Fluid SPF50+ 50ml",
    price: 20.00,
    image: "https://images.escentual.com/img/215x250/93/1718202105_anthelios_uvmune_400_invisible_fluid_spf50_50ml_001.jpg",
    brand: "La Roche-Posay",
    rating: 4.7,
    ratingCount: 234,
    date: "2023-09-15",
    tag: "Bestseller"
  },
  {
    id: "2",
    name: "Avène Cleanance Comedomed Anti-Blemish Concentrate 30ml",
    price: 18.50,
    image: "https://images.escentual.com/img/215x250/98/1719904471_avene_cleanance_comedomed_anti-blemish_concentrate_30ml_1.jpg",
    brand: "Avène",
    rating: 4.2,
    ratingCount: 156,
    date: "2023-11-20",
    discount: 0.15
  },
  {
    id: "3",
    name: "Vichy Normaderm Phytosolution Double-Correction Daily Care 50ml",
    price: 24.00,
    image: "https://images.escentual.com/img/215x250/89/1585928339_vichy_normaderm_phytosolution_double-correction_daily_care_50ml_001.jpg",
    brand: "Vichy",
    rating: 4.5,
    ratingCount: 189,
    date: "2024-01-05"
  },
  {
    id: "4",
    name: "Bioderma Sensibio H2O Micellar Water 500ml",
    price: 16.99,
    image: "https://images.escentual.com/img/215x250/63/1608298963-bioderma-sensibio-h2o-micellar-water-500ml-001.jpg",
    brand: "Bioderma",
    rating: 4.9,
    ratingCount: 456,
    date: "2023-08-10",
    tag: "Popular"
  },
  {
    id: "5",
    name: "Caudalie Vinoperfect Radiance Serum 30ml",
    price: 49.00,
    image: "https://images.escentual.com/img/215x250/57/1623400057-caudalie-vinoperfect-radiance-serum-30ml-001.jpg",
    brand: "Caudalie",
    rating: 4.6,
    ratingCount: 210,
    date: "2023-12-12",
    discount: 0.20
  },
  {
    id: "6",
    name: "Embryolisse Lait-Crème Concentré 75ml",
    price: 20.00,
    image: "https://images.escentual.com/img/215x250/23/1683277923-embryolisse-lait-creme-concentre-75ml-2023-001.jpg",
    brand: "Embryolisse",
    rating: 4.4,
    ratingCount: 178,
    date: "2023-10-05"
  },
  {
    id: "7",
    name: "Nuxe Huile Prodigieuse Multi-Purpose Dry Oil 100ml",
    price: 29.50,
    image: "https://images.escentual.com/img/215x250/90/1588855790-nuxe-huile-prodigieuse-multi-purpose-dry-oil-100ml-2019-001.jpg",
    brand: "Nuxe",
    rating: 4.8,
    ratingCount: 324,
    date: "2023-07-15",
    tag: "New"
  },
  {
    id: "8",
    name: "CeraVe Moisturising Lotion 236ml",
    price: 12.50,
    image: "https://images.escentual.com/img/215x250/67/1627989167-cerave-moisturising-lotion-236ml-001.jpg",
    brand: "CeraVe",
    rating: 4.7,
    ratingCount: 289,
    date: "2024-02-01",
    discount: 0.10
  }
];

interface ProductGridProps {
  sortOption: SortOption;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ sortOption, className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sort products based on the selected option
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API request delay
    const timeoutId = setTimeout(() => {
      let sortedProducts = [...SAMPLE_PRODUCTS];
      
      switch (sortOption.value) {
        case 'price-asc':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          sortedProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case 'rating-desc':
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'popularity-desc':
          sortedProducts.sort((a, b) => b.ratingCount - a.ratingCount);
          break;
        // 'featured' is the default case, no sorting needed
      }
      
      setProducts(sortedProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timeoutId);
  }, [sortOption]);

  if (isLoading) {
    return (
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-square bg-secondary rounded-lg mb-3"></div>
            <div className="h-3 bg-secondary rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-secondary rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-secondary rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

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

export default ProductGrid;
