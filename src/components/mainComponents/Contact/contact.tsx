import { Email } from "../../otherComponents/email/email";

export const Contact = () => {
  return (
    <section
      id="connect"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-indigo-400/60 to-black py-48 text-white"
    >
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold ">Send me a message!</h1>
        <Email />
      </div>
    </section>
  );
};
