import { SocialLinkData, SocialLinkStructure } from "./navbarIndex";

export const SocialLinks = () => {
  return (
    <>
      {SocialLinkData.map((data, idx) => (
        <SocialLinkStructure key={idx} link={data.link} icon={data.icon} />
      ))}
    </>
  );
};
