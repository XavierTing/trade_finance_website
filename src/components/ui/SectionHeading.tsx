import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface SectionHeadingProps {
  title: string;
  titleSecondary?: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, titleSecondary, subtitle, className = '' }: SectionHeadingProps) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className={`mb-16 ${className}`}
  >
    <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl">
      <span className="text-text-primary">{title}</span>
      {titleSecondary && (
        <>
          <br />
          <span className="text-text-secondary">{titleSecondary}</span>
        </>
      )}
    </h2>
    {subtitle && (
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
