const RollingText = ({ children, className = "" }) => (
  <span
    className={`relative inline-block overflow-hidden align-middle leading-[1.1] ${className}`}
  >
    <span className="sr-only">{children}</span>
    <span
      aria-hidden="true"
      className="flex items-center gap-1 transition-transform duration-300 ease-out group-hover:-translate-y-full"
    >
      {children}
    </span>
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 flex items-center gap-1 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
    >
      {children}
    </span>
  </span>
);

export default RollingText;
