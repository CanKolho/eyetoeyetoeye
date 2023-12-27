import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**
 * Reveal component that animates its children when it comes into view.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const Reveal = ({ children, index = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Determine the y-value based on the direction
  const yValue = direction === "up" ? 40 : -40;

  const variants = {
    hidden: { opacity: 0, y: yValue },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.15 }} // Use index for delay
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexDirection: 'column' 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
