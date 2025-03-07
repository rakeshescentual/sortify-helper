
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TrendingScoreIndicatorProps {
  score: number;
  className?: string;
}

const TrendingScoreIndicator: React.FC<TrendingScoreIndicatorProps> = ({ score, className }) => {
  if (!score || score <= 0) return null;
  
  // Calculate appropriate color based on score
  const getScoreColor = () => {
    if (score >= 80) return "from-primary to-amber-500";
    if (score >= 60) return "from-amber-500 to-amber-400";
    if (score >= 40) return "from-amber-400 to-yellow-300";
    return "from-yellow-300 to-gray-300";
  };

  // Determine text color based on score for better accessibility
  const getTextColor = () => {
    if (score >= 80) return "text-primary/80";
    if (score >= 60) return "text-amber-600";
    if (score >= 40) return "text-amber-700";
    return "text-gray-500";
  };

  // Generate a descriptive label that's easy to understand
  const getTrendLabel = () => {
    if (score >= 90) return "Viral";
    if (score >= 80) return "Very hot";
    if (score >= 70) return "Hot";
    if (score >= 60) return "Trending";
    if (score >= 50) return "Rising";
    if (score >= 40) return "Gaining interest";
    return "Moderate interest";
  };
  
  return (
    <div className={cn("mt-1 mb-2", className)}>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <div className="flex justify-between items-center text-[10px] mb-0.5">
                <div className="flex items-center gap-0.5">
                  <TrendingUp size={11} className={cn(getTextColor())} />
                  <span className={cn("font-medium", getTextColor())}>
                    {getTrendLabel()}
                  </span>
                </div>
                <span className="text-muted-foreground">{score}/100</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-1.5">
                <div 
                  className={cn(
                    "bg-gradient-to-r h-1.5 rounded-full transition-all duration-500 ease-out",
                    getScoreColor()
                  )}
                  style={{ width: `${Math.min(score, 100)}%` }}
                />
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[220px] text-xs">
            <p>This product has a trend score of {score}/100 based on social media analytics and performance across multiple platforms.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TrendingScoreIndicator;
