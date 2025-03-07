
import React from 'react';
import { Clock } from 'lucide-react';

interface LastViewedIndicatorProps {
  lastViewed: string | undefined;
}

const LastViewedIndicator: React.FC<LastViewedIndicatorProps> = ({ lastViewed }) => {
  const formatLastViewed = () => {
    if (!lastViewed) return null;
    
    const lastViewedDate = new Date(lastViewed);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - lastViewedDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
  };

  const formattedTime = formatLastViewed();
  
  if (!formattedTime) return null;
  
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
      <Clock size={12} />
      <span>Viewed {formattedTime}</span>
    </div>
  );
};

export default LastViewedIndicator;
