import { motion } from 'framer-motion';
import { staggerContainer } from '../../lib/animations';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from './ProductCard';
import type { Category } from '../../types/Product';

interface CategorySectionProps {
  category: Category;
}

const CategorySection = ({ category }: CategorySectionProps) => (
  <section id={category.id} className="py-36">
    <Container>
      <SectionHeading title={category.title} titleSecondary={category.titleSecondary} subtitle={category.subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="space-y-24"
      >
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </Container>
  </section>
);

export default CategorySection;
