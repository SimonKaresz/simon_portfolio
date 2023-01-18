import { ContactSectionTitle, Email } from "./contactIndex";

export const Contact = () => {
  return (
    <section
      id="connect"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-indigo-400/60 to-black py-20 text-white"
    >
      <ContactSectionTitle />
      <Email />
    </section>
  );
};
