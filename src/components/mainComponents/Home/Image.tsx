import ProfileImage from "../../../dist/image/portf_main.png";

export const Image = () => {
  return (
    <img
      src={ProfileImage}
      alt={ProfileImage}
      className="bg-trasnparent w-[200px] rounded-full brightness-75 lg:w-[400px]"
    />
  );
};
