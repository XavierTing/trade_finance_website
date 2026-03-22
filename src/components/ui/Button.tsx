interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button = ({ children, variant = 'primary', onClick, className = '', href }: ButtonProps) => {
  const base = 'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-out hover:[&>svg]:rotate-45';
  const variants = {
    primary: 'bg-text-primary text-bg-primary hover:bg-[#333333] hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'border border-text-primary/20 text-text-primary hover:bg-text-primary/5 hover:scale-[1.02] active:scale-[0.98]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
