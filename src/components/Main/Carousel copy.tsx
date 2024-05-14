import carouselOne from "../../assets/carouselOne.png";
import carouselTwo from "../../assets/carouselTwo.png";
import carouselThree from "../../assets/carouselThree.png";
import carouselFour from "../../assets/carouselFour.png";
import { Button } from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const imgs = [carouselOne, carouselTwo, carouselThree, carouselFour];
const buttonStyle =
  "material-symbols-outlined text-3xl text-gray-400 bg-white rounded-full p-2 px-3 -mr-7 -ml-7 shadow hover:scale-110 transition-transform";

const Carousel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((prevCurr) => (prevCurr === 0 ? imgs.length - 1 : prevCurr - 1));
  };

  const next = () => {
    setCurr((prevCurr) => (prevCurr === imgs.length - 1 ? 0 : prevCurr + 1));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {imgs.map((img, index) => {
            return <img key={index} src={img} alt="" />;
          })}
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex justify-between items-center"
            >
              <motion.button
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                exit={{ x: 20 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
              >
                <Button children="chevron_left" className={buttonStyle} />
              </motion.button>
              <motion.button
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
              >
                <Button children="chevron_right" className={buttonStyle} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {imgs.map((_, i) => (
              <div
                className={
                  `transition-all w-2 h-2 bg-white rounded-full ${curr == i ? "p-1" : "bg-opacity-50"}`
                } 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel