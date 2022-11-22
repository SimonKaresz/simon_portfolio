import ProfileImage from "../../dist/image/portf_main.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="home"
      className="py-48 w-full text-white flex justify-center items-center max-lg:flex-col"
    >
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="flex flex-col justify-center items-center mr-28 max-lg:mr-0 max-lg:mt-28 text-center"
      >
        <h1 className="text-5xl mb-8 font-bold text-red-500">
          Welcome to my Porfolio
        </h1>
        <h2 className="text-4xl mb-2 font-bold">I'm Károly Simon</h2>
        <span className="text-rose-600 text-md">Junior Frontend Developer</span>
      </div>
      <div>
        <img
          src={ProfileImage}
          alt={ProfileImage}
          className="w-[400px] max-lg:w-[200px] brightness-75 rounded-full bg-trasnparent"
        />
      </div>
    </section>
  );
};
