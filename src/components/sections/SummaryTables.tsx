import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { importExportSummary, guaranteeBillsFinancingSummary } from '../../data/summaryData';
import type { SummaryRow } from '../../types/Product';

const protectionBadge = (level: string) => {
  switch (level) {
    case 'High':
      return <Badge variant="green">{level}</Badge>;
    case 'Medium':
      return <Badge variant="amber">{level}</Badge>;
    case 'Low':
    case 'Low risk':
      return <Badge variant="blue">{level}</Badge>;
    default:
      return <Badge>{level}</Badge>;
  }
};

const categoryBadge = (cat: string) => {
  switch (cat) {
    case 'Import':
      return <Badge variant="blue">{cat}</Badge>;
    case 'Export':
      return <Badge variant="green">{cat}</Badge>;
    case 'Guarantee':
      return <Badge variant="amber">{cat}</Badge>;
    case 'Bills':
      return <Badge variant="red">{cat}</Badge>;
    case 'Financing':
      return <Badge variant="default">{cat}</Badge>;
    default:
      return <Badge>{cat}</Badge>;
  }
};

interface SummaryTableProps {
  title: string;
  rows: SummaryRow[];
}

const SummaryTable = ({ title, rows }: SummaryTableProps) => (
  <motion.div variants={fadeInUp} className="overflow-hidden rounded-xl border border-black/[0.04] bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
    <div className="border-b border-text-primary/5 px-6 py-4">
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-text-primary/[0.06] bg-bg-secondary/40">
            <th className="px-6 py-3 font-semibold text-text-secondary">Product</th>
            <th className="px-6 py-3 font-semibold text-text-secondary">Category</th>
            <th className="px-6 py-3 font-semibold text-text-secondary">Protection</th>
            <th className="px-6 py-3 font-semibold text-text-secondary">Key Benefit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-text-primary/[0.06] transition-colors duration-200 hover:bg-bg-secondary/30"
            >
              <td className="px-6 py-3 font-medium text-text-primary">{row.product}</td>
              <td className="px-6 py-3">{categoryBadge(row.category)}</td>
              <td className="px-6 py-3">{protectionBadge(row.protection)}</td>
              <td className="px-6 py-3 text-text-secondary">{row.keyBenefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const SummaryTables = () => (
  <section id="summary" className="py-36">
    <Container>
      <SectionHeading
        title="Product"
        titleSecondary="Summary"
        subtitle="A quick reference guide to all trade finance products and their key characteristics."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        <SummaryTable title="Import & Export Products" rows={importExportSummary} />
        <SummaryTable title="Guarantee, Bills & Financing Products" rows={guaranteeBillsFinancingSummary} />
      </motion.div>
    </Container>
  </section>
);

export default SummaryTables;
