import { AnimatePresence, motion } from "framer-motion";

export default function AnimationMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        {...{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
          className,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
