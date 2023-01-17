export const DividingLine = (props: { visible: boolean }) => {
  return (
    <div
      className={
        props.visible ? "max-lg:my-5 max-lg:w-full max-lg:border-[1px]" : ""
      }
    ></div>
  );
};
