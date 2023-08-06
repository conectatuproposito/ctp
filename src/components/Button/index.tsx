interface IButton {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
}

import ArrowRight from "assets/images/arrow-right.svg";

const Button = ({ children, className, ...args }: IButton) => {
  return (
    <a
      className={`
        flex items-center justify-center 
        text-white rounded-full p-2 px-6
        bg-purple-800 hover:bg-sky-400 
        sm:w-[300px] h-11
        lg:w-[354px]
        transition-all ${className}`}
      {...args}
    >
      {children}

      <img
        src={ArrowRight}
        alt="Arrow Right"
        className="pt-[2px] ml-2 w-4 h-4"
      />
    </a>
  );
};

export default Button;
