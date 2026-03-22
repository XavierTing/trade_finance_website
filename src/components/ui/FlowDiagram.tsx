import type { FlowStepData } from '../../types/Product';
import FlowStep from './FlowStep';

interface FlowDiagramProps {
  steps: FlowStepData[];
}

const FlowDiagram = ({ steps }: FlowDiagramProps) => (
  <div className="mt-5 rounded-lg bg-bg-secondary/70 p-4">
    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
      Process Flow
    </p>
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-2">
      {steps.map((step, i) => (
        <FlowStep key={i} step={step} index={i} total={steps.length} />
      ))}
    </div>
  </div>
);

export default FlowDiagram;
