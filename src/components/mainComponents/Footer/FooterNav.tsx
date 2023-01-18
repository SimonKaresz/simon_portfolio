import { FooterNavData, FooterNavItemStructure } from "./FooterIndex";

export const FooterNav = () => {
  return (
    <div className="my-12 flex items-center justify-center text-center max-[380px]:flex-col md:my-0">
      {FooterNavData.map((data, idx) => (
        <FooterNavItemStructure key={idx} {...data} />
      ))}
    </div>
  );
};
