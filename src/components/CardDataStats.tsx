import React, { ReactNode } from 'react';
interface CardDataStatsProps {
  title: string;
  total: string | number;
  children: ReactNode;
}
const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  
  return (
    <div className="rounded-sm border border-stroke bg-gray-200 py-6 px-7 shadow-md">
      <div className="flex h-11.5 w-11.5 items-center justify-start ">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black ">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
