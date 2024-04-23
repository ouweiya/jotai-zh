export const Wrapper = ({ children, ...rest }) => {
  return (
    <div
      className="relative flex flex-col lg:mx-auto lg:max-w-[1920px] lg:flex-row lg:justify-start 2xl:gap-20 lg:pl-36"
      {...rest}
    >
      {children}
    </div>
  );
};
