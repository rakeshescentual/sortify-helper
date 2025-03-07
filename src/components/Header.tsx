
import React from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full py-6 px-8 flex items-center justify-between fixed top-0 left-0 right-0 z-50 glass",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-primary flex items-center justify-center animate-pulse-subtle">
          <span className="text-white font-semibold text-sm">S</span>
        </div>
        <h1 className="text-xl font-medium tracking-tight">Sortify</h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-premium-fast hover-lift">
          Features
        </a>
        <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-premium-fast hover-lift">
          Examples
        </a>
        <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-premium-fast hover-lift">
          Documentation
        </a>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="text-sm px-4 py-2 rounded-full bg-secondary text-foreground/80 hover:text-foreground transition-premium-fast hover-lift">
          Try Demo
        </button>
        <button className="text-sm px-4 py-2 rounded-full bg-primary text-white transition-premium-fast hover-lift">
          Install App
        </button>
      </div>
    </header>
  );
};

export default Header;
