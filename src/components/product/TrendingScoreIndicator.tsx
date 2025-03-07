
import React from 'react';

interface TrendingScoreIndicatorProps {
  score: number;
}

const TrendingScoreIndicator: React.FC<TrendingScoreIndicatorProps> = ({ score }) => {
  if (!score || score <= 0) return null;
  
  return (
    <div className="mt-1 mb-2">
      <div className="w-full bg-secondary rounded-full h-1">
        <div 
          className="bg-gradient-to-r from-primary to-amber-500 h-1 rounded-full" 
          style={{ width: `${Math.min(score, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
        <span>Trend score</span>
        <span>{score}/100</span>
      </div>
    </div>
  );
};

export default TrendingScoreIndicator;
