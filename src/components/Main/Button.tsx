export const Button: React.FC<{children: React.ReactNode, className: string}> = ({children, className}) => {
  return (
    <button >
      <span className={className}>{children}</span>
    </button>
  );
};
