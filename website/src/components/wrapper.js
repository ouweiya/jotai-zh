export const Wrapper = ({ children, ...rest }) => {
  return (
    <div
      className="relative flex flex-col lg:mx-auto lg:max-w-[1920px] lg:flex-row lg:justify-start lg:gap-16 lg:ml-[140px]"
      {...rest}
    >
      {children}
    </div>
  );
};
