import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const images = [
  "https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3",
];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = (page % images.length + images.length) % images.length;

  return (
    <>
      <div className="relative w-full h-80 overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full object-cover rounded-2xl"
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between p-4">
          <button
            className="bg-black/20 backdrop-blur-xl text-white w-[40px] h-[40px] rounded-full flex items-center justify-center"
            onClick={() => paginate(-1)}
          >
            {"‣"}
          </button>
          <button
            className="bg-black/20 backdrop-blur-xl text-white w-[40px] h-[40px] rounded-full flex items-center justify-center"
            onClick={() => paginate(1)}
          >
            {"‣"}
          </button>
        </div>
      </div>
      <div className="my-[40px] text-center">Created by <a className="text-blue-500 text-bold" href="https://www.linkedin.com/in/abdillah-ag-930172167/" target="_blank" rel="noreferrer">Abdillah AG</a></div>
    </>
  );
};

export default Carousel;
