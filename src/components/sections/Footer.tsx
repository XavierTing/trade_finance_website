import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, FileCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Container from '../ui/Container';
import Button from '../ui/Button';

const badges = [
  { icon: Shield, label: 'SOC 2' },
  { icon: Lock, label: 'GDPR' },
  { icon: CheckCircle, label: 'ISO 27001' },
  { icon: FileCheck, label: 'PCI DSS' },
  { icon: Shield, label: 'HIPAA' },
];

const Footer = () => (
  <footer className="py-36">
    <Container>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl"
        >
          <span className="text-text-primary">Ready to explore</span>
          <br />
          <span className="text-text-secondary">trade finance?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-lg leading-relaxed text-text-secondary"
        >
          For more information on The Bank Trade Finance products, visit the bank's website or
          contact your Relationship Manager.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10">
          <Button href="#" className="mx-auto">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Compliance badges */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-20 flex flex-wrap items-center justify-center gap-3"
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.label}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-text-primary/[0.08] px-4 py-2 text-xs font-medium text-text-secondary"
          >
            <badge.icon size={14} />
            {badge.label}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 border-t border-text-primary/[0.08] pt-8 text-center text-sm text-text-secondary"
      >
        <p>Trade Finance 101 — Educational content based on The Bank's trade finance products.</p>
      </motion.div>
    </Container>
  </footer>
);

export default Footer;
