import { AboutMeText, SectionTitle } from "./aboutMeIndex";

export const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="flex min-h-[700px] w-full flex-col items-center justify-center bg-neutral-900/80 py-12"
    >
      <div className="mx-auto flex w-3/4 flex-col items-center justify-center text-white lg:flex-row lg:justify-around">
        <SectionTitle />
        <AboutMeText />
      </div>
    </section>
  );
};
