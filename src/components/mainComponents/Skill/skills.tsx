import { ProgressBarSection, SectionTitle } from "./skillsIndex";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center justify-center bg-black py-48 text-white"
    >
      <SectionTitle />
      <div className="flex w-full select-none items-center justify-center max-lg:flex-col">
        <ProgressBarSection />
      </div>
    </section>
  );
};
