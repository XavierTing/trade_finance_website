import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Card = ({ children, className = '', animate = true }: CardProps) => {
  const classes = `rounded-xl border border-black/[0.04] bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${className}`;

  if (animate) {
    return (
      <motion.div
        variants={fadeInUp}
        className={classes}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
};

export default Card;
