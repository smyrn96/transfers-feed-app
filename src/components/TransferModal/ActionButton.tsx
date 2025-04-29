import { ReactNode } from "react";

type ActionButtonPropsType = {
  text: string;
  icon: ReactNode;
};

const ActionButton: React.FC<ActionButtonPropsType> = ({ text, icon }) => {
  return (
    <button className="bg-[#F4F5F6] w-[45%] h-[48px] mb-6 rounded-sm flex flex-row items-center justify-center gap-3">
      {icon}
      <p className="text-base text-[#2D3B4E] font-semibold">{text}</p>
    </button>
  );
};

export default ActionButton;
