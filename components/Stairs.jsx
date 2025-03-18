import { animate, motion } from "framer-motion";

// varient
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reveredIndexed = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {/* Render a motion div, each representing a step of the stair.*/}
      {[...Array(6)].map((_, idx) => {
        return (
          <motion.div
            key={idx}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reveredIndexed(idx) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
