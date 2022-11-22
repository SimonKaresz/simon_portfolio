import { Email } from "../otherComponents/email/email";

export const Contact = () => {
  return (
    <section
      id="connect"
      className="text-white w-full py-48 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-900 via-indigo-400/60 to-black"
    >
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold ">Send me a message!</h1>
        <Email />
      </div>
    </section>
  );
};
