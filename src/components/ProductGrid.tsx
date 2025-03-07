
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { SortOption } from './SortOptions';
import ProductSkeleton from './product/ProductSkeleton';
import ProductList from './product/ProductList';
import { getSortedProducts, SAMPLE_PRODUCTS, overrideProductDate } from './product/ProductDataUtils';
import { Product } from './SortableItem';
import { AlertCircle, Check, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface ProductGridProps {
  sortOption: SortOption;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ sortOption, className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);
  const [modifiedProducts, setModifiedProducts] = useState<Product[]>([]);
  const [useCustomDates, setUseCustomDates] = useState(false);

  // Get products based on the selected option
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API request delay
    const timeoutId = setTimeout(() => {
      // Use modified products in preview mode, otherwise use original
      const baseProducts = previewMode ? modifiedProducts : SAMPLE_PRODUCTS;
      const sortedProducts = getSortedProducts(sortOption.value, baseProducts, useCustomDates);
      setProducts(sortedProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timeoutId);
  }, [sortOption, previewMode, modifiedProducts, useCustomDates]);

  // Function to handle custom date override
  const handleDateOverride = (productId: string, newDate: string) => {
    const updatedProducts = overrideProductDate(productId, newDate, 
      modifiedProducts.length > 0 ? modifiedProducts : SAMPLE_PRODUCTS);
    
    setModifiedProducts(updatedProducts);
    
    if (!previewMode) {
      setPreviewMode(true);
      setUseCustomDates(true);
      toast.info('Preview mode activated. You can now see how your custom dates affect sorting.', {
        duration: 5000,
      });
    } else {
      toast.success('Custom date updated. Preview refreshed.', {
        duration: 3000,
      });
    }
  };

  // Function to confirm changes
  const confirmChanges = () => {
    setPreviewMode(false);
    toast.success('Custom sort order confirmed and applied!', {
      duration: 3000,
    });
    // Here you would typically save the changes to your backend
  };

  // Function to reset preview
  const resetPreview = () => {
    setPreviewMode(false);
    setModifiedProducts([]);
    setUseCustomDates(false);
    toast.info('Changes discarded. Reverted to original sort order.', {
      duration: 3000,
    });
  };

  if (isLoading) {
    return <ProductSkeleton className={className} />;
  }

  return (
    <div className="space-y-6">
      {sortOption.value === 'newest' && (
        <div className="rounded-lg border p-4 mb-6 bg-card">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Sort by Shopify Published Date</h3>
                {previewMode && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    <AlertCircle size={12} className="mr-1" />
                    Preview Mode
                  </span>
                )}
              </div>
              {previewMode && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetPreview}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <RotateCcw size={12} />
                    Discard
                  </button>
                  <button
                    onClick={confirmChanges}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Check size={12} />
                    Confirm
                  </button>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Products are sorted by their Shopify "Published At" date by default. 
              You can override this sort order by modifying the date for specific products.
            </p>
          </div>
        </div>
      )}

      <ProductList 
        products={products} 
        className={className}
        onDateOverride={sortOption.value === 'newest' ? handleDateOverride : undefined}
        previewMode={previewMode}
      />
    </div>
  );
};

export default ProductGrid;
