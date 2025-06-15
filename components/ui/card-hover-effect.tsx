import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6', className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon;
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={idx}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 rounded-xl bg-violet-600/10 ring-2 ring-violet-500"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 p-6 rounded-xl bg-[#1A1A1A] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Icon className="mx-auto text-violet-500 size-10 mb-4" />
              <p className="text-white font-semibold text-lg">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
