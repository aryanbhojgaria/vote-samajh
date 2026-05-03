'use client';

import India from '@svg-maps/india';
import { motion } from 'framer-motion';

export default function IndiaMap() {
  return (
    <div className="fixed inset-0 z-[-1] flex items-center justify-center opacity-[0.03] dark:opacity-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[120%] h-[120%] md:w-[80%] md:h-[80%] max-w-4xl"
      >
        <svg
          viewBox={India.viewBox}
          className="w-full h-full fill-primary stroke-background stroke-[0.5] drop-shadow-2xl"
          aria-label={India.label}
        >
          {India.locations.map((location: { id: string; name: string; path: string }) => (
            <path
              key={location.id}
              id={location.id}
              name={location.name}
              d={location.path}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
