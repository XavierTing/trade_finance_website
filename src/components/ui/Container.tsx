interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className = '', id }: ContainerProps) => (
  <div id={id} className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export default Container;
