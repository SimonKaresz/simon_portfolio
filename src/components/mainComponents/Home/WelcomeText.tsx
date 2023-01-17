import TypeWriter from "typewriter-effect";

export const WelcomeText = () => {
  return (
    <div className="mt-28 mr-0 flex flex-col items-center justify-center text-center lg:mr-28">
      <h1 className="mb-8 text-5xl font-bold text-red-500">
        Welcome to my Portfolio
      </h1>
      <h2 className="mb-2 text-4xl font-bold">I'm Károly Simon</h2>
      <span className="text-md text-rose-600">
        <TypeWriter
          options={{
            strings: ["Junior Frontend Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};
