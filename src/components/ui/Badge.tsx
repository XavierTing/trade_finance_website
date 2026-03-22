interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'amber' | 'red';
  className?: string;
}

const variantStyles = {
  default: 'bg-text-primary/[0.08] text-text-primary',
  blue: 'bg-blue-600/[0.08] text-blue-700',
  green: 'bg-emerald-600/[0.08] text-emerald-700',
  amber: 'bg-amber-600/[0.08] text-amber-700',
  red: 'bg-red-600/[0.08] text-red-700',
};

const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => (
  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}>
    {children}
  </span>
);

export default Badge;
