import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="aboutme" className="flex flex-col">
      <div className=" bg-gradient-to-b from-[#15142d] via-black/10 to-black w-full py-96">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-3/4 flex mx-auto max-lg:justify-center max-lg:flex-col flex-row text-white justify-around items-center"
        >
          <div>
            <h1 className="text-6xl text-center font-bold text-lime-300 max-lg:mb-16">
              About Me
            </h1>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <p className="text-xl leading-9 font-bold text-neutral-300">
              Hello! My name is Károly Simon. I have finished a Frontend
              Training in 2022 at Ruander Education Center. I spend several
              hours with self-education daily. I am currently learning React-,
              and Tailwind CSS framework. I look forward to opportunities where
              I can expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
