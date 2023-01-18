import { FooterSocialLinkData, FooterSocialStructure } from "./FooterIndex";

export const FooterSocialLinks = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      {FooterSocialLinkData.map((data, idx) => (
        <FooterSocialStructure key={idx} {...data} />
      ))}
    </div>
  );
};
