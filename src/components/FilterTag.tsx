
import React from 'react';
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FilterTagProps {
  children: React.ReactNode;
  active?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

const FilterTag: React.FC<FilterTagProps> = ({ 
  children, 
  active = false, 
  onRemove, 
  onClick,
  className 
}) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
        "transition-premium-fast cursor-pointer",
        active 
          ? "bg-primary text-primary-foreground shadow-sm" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      {onRemove && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className={cn(
            "w-4 h-4 rounded-full flex items-center justify-center",
            active 
              ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" 
              : "bg-secondary-foreground/10 text-secondary-foreground/70 hover:bg-secondary-foreground/20",
            "transition-premium-fast"
          )}
        >
          <X size={10} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default FilterTag;
