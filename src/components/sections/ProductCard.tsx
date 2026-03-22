import Card from '../ui/Card';
import FlowDiagram from '../ui/FlowDiagram';
import type { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card>
    <h3 className="mb-3 text-lg font-semibold text-text-primary">{product.name}</h3>

    <div className="mb-4 rounded-lg bg-bg-secondary px-4 py-3">
      <p className="text-sm font-medium text-text-primary">Why?</p>
      <p className="mt-1 text-sm text-text-secondary">{product.scenario}</p>
    </div>

    <p className="text-sm leading-relaxed text-text-secondary">{product.explanation}</p>

    {product.bullets && product.bullets.length > 0 && (
      <ul className="mt-4 space-y-1.5">
        {product.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-secondary/40" />
            {bullet}
          </li>
        ))}
      </ul>
    )}

    {product.flow && product.flow.length > 0 && (
      <FlowDiagram steps={product.flow} />
    )}
  </Card>
);

export default ProductCard;
