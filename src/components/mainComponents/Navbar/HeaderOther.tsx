import { FiMenu } from "react-icons/fi";

export const HeaderOther = (props: { event: () => void }) => {
  return (
    <div className="mx-12 flex w-full items-center justify-between text-2xl font-bold text-white">
      <p className="mx-2">Simon Portfolio</p>
      <FiMenu
        onClick={props.event}
        className="mx-2 cursor-pointer text-3xl hover:text-red-500 active:text-red-500 lg:hidden"
      />
    </div>
  );
};
