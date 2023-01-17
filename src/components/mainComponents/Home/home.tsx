import { WelcomeText, Image } from "./homeIndex";

export const Home = () => {
  return (
    <section
      id="home"
      className="my-20 flex w-full flex-col items-center justify-center text-white lg:flex-row"
    >
      <WelcomeText />
      <Image />
    </section>
  );
};
