import type { FlowStepData } from '../../types/Product';

interface FlowStepProps {
  step: FlowStepData;
  index: number;
  total: number;
}

const FlowStep = ({ step, index, total }: FlowStepProps) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-text-primary/[0.08] text-xs font-semibold text-text-primary">
        {index + 1}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-text-primary">{step.label}</p>
        {step.description && (
          <p className="text-xs text-text-secondary">{step.description}</p>
        )}
      </div>
    </div>
    {index < total - 1 && (
      <div className="mx-2 hidden h-px w-6 bg-text-secondary/30 md:block" />
    )}
  </div>
);

export default FlowStep;
