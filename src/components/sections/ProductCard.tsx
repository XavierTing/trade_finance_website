import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import FlowDiagram from '../ui/FlowDiagram';
import type { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const hasFlow = product.flow && product.flow.length > 0;

  return (
    <motion.div variants={fadeInUp}>
      <div>
        {/* Text content — full width */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {product.name}
        </h3>

        <div className="mb-5 rounded-lg bg-bg-secondary px-4 py-3">
          <p className="text-sm font-medium text-text-primary">Example</p>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">{product.scenario}</p>
        </div>

        <p className="leading-relaxed text-text-secondary">{product.explanation}</p>

        {product.bullets && product.bullets.length > 0 && (
          <ul className="mt-5 space-y-2">
            {product.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-secondary/40" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Process flow visual */}
        {product.diagram && (
          <div className="mt-6">
            <product.diagram />
          </div>
        )}
        {product.image && (
          <div className="mt-6">
            <img src={product.image} alt={`${product.name} process flow`} className="w-full rounded-lg" />
          </div>
        )}
        {hasFlow && <FlowDiagram steps={product.flow!} />}
      </div>
    </motion.div>
  );
};

export default ProductCard;
