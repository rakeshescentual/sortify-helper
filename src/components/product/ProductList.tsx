
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import SortableItem, { Product } from '../SortableItem';
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";

interface ProductListProps {
  products: Product[];
  className?: string;
  onDateOverride?: (productId: string, newDate: string) => void;
  previewMode?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  className,
  onDateOverride,
  previewMode = false
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("12:00");

  const handleApplyDate = (productId: string) => {
    if (selectedDate && onDateOverride) {
      // Format the date and time as an ISO string
      const dateString = format(selectedDate, "yyyy-MM-dd");
      const dateTimeString = `${dateString}T${selectedTime}:00Z`;
      
      onDateOverride(productId, dateTimeString);
      setSelectedProduct(null);
      setSelectedDate(undefined);
    }
  };

  return (
    <div>
      <div className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6",
        className
      )}>
        {products.map((product) => (
          <div key={product.id} className="animate-fade-in relative group">
            <SortableItem product={product} />
            
            {onDateOverride && (
              <div className={cn(
                "absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10",
                previewMode && product.customSortDate && "opacity-100"
              )}>
                <Popover open={selectedProduct === product.id} onOpenChange={(open) => {
                  if (open) {
                    setSelectedProduct(product.id);
                    // If the product has a custom date, pre-populate the date picker
                    if (product.customSortDate) {
                      const date = new Date(product.customSortDate);
                      setSelectedDate(date);
                      setSelectedTime(format(date, "HH:mm"));
                    } else if (product.publishedAt) {
                      const date = new Date(product.publishedAt);
                      setSelectedDate(date);
                      setSelectedTime(format(date, "HH:mm"));
                    }
                  } else {
                    setSelectedProduct(null);
                  }
                }}>
                  <PopoverTrigger asChild>
                    <Button 
                      size="sm" 
                      variant={product.customSortDate ? "default" : "outline"}
                      className={cn(
                        "rounded-full w-8 h-8 p-0",
                        product.customSortDate && "bg-yellow-500 hover:bg-yellow-600"
                      )}
                    >
                      <Clock size={14} />
                      <span className="sr-only">Adjust published date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4" align="end">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Override Published Date</h4>
                        <p className="text-xs text-muted-foreground">
                          {product.customSortDate 
                            ? "This product has a custom sort date." 
                            : "Set a custom date to override Shopify's published date."}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="grid gap-2">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs">Time:</span>
                          <Input
                            type="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="h-8 text-xs"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-2 justify-end">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedProduct(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleApplyDate(product.id)}
                          disabled={!selectedDate}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
            
            {product.customSortDate && previewMode && (
              <div className="absolute top-0 left-0 w-full h-full border-2 border-yellow-500 rounded-lg pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
      
      {previewMode && (
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-md">
          <p className="text-xs text-yellow-800 dark:text-yellow-200">
            <span className="font-medium">Preview Mode:</span> Products with highlighted borders have custom dates that override their Shopify published dates.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
