import { motion } from 'framer-motion';
import { Shield, FileCheck, Banknote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Container from '../ui/Container';

const features = [
  {
    icon: Shield,
    title: 'Payment Assurance',
    description: 'Guarantees the seller will get paid, even across borders with different legal systems.',
  },
  {
    icon: FileCheck,
    title: 'Document Control',
    description: 'Shipping documents are held by the bank until payment conditions are met.',
  },
  {
    icon: Banknote,
    title: 'Financing',
    description: 'Advance cash before payment is due, so businesses can keep operations running.',
  },
];

const WhatIsTradeFinance = () => (
  <section id="overview" className="py-36">
    <Container>
      {/* Label */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6 text-xs font-medium uppercase tracking-widest text-text-secondary"
      >
        Overview
      </motion.p>

      {/* Two-column: heading left, description right */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-24 grid items-start gap-12 lg:grid-cols-2"
      >
        <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
          <span className="text-text-primary">What is</span>
          <br />
          <span className="text-text-secondary">Trade Finance?</span>
        </h2>
        <div className="max-w-lg lg:pt-2">
          <h3 className="mb-4 text-xl font-semibold text-text-primary">Problem of International Trade</h3>
          <p className="leading-relaxed text-text-secondary">
            The buyer doesn't want to pay until goods are shipped. The seller doesn't want to ship
            until payment is guaranteed. They're in different countries with different laws.
            Banks step in as trusted intermediaries to bridge this gap — providing the financial
            tools that help buyers and sellers conduct international trade safely.
          </p>
        </div>
      </motion.div>

      {/* Features header */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6 text-xs font-medium uppercase tracking-widest text-text-secondary"
      >
        How Banks Bridge the Gap
      </motion.p>

      {/* Three-column features — flat, no cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-12 border-t border-text-primary/[0.06] pt-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={fadeInUp}>
            <feature.icon size={24} strokeWidth={1.5} className="mb-5 text-text-primary" />
            <h3 className="mb-2 text-lg font-semibold text-text-primary">{feature.title}</h3>
            <p className="leading-relaxed text-text-secondary">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default WhatIsTradeFinance;
