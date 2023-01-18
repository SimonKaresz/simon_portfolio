import { CopyrightText, FooterNav, FooterSocialLinks } from "./FooterIndex";

export const Footer = () => {
  return (
    <footer className="flex w-full select-none flex-col-reverse items-center justify-around bg-gradient-to-b from-black py-12 text-white md:flex-row">
      <CopyrightText />
      <FooterNav />
      <FooterSocialLinks />
    </footer>
  );
};
