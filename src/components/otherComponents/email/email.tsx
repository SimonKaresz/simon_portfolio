import { useForm, ValidationError } from "@formspree/react";
export const Email = () => {
  const [state, handleSubmit] = useForm("meqdvbro");
  if (state.succeeded) {
    return (
      <h1 className="my-12 mx-auto py-20 text-center text-4xl font-bold text-orange-500">
        Thanks for joining!
      </h1>
    );
  }
  return (
    <form
      className="mx-auto flex h-[600px] w-[800px] flex-col justify-center max-lg:w-[90%]"
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Name"
        className="my-8 rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        className="my-8 rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        className="my-8 h-[200px] resize-none rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        className="mx-auto w-[200px] cursor-pointer rounded-lg border-2 border-indigo-400 p-3 transition duration-500 ease-in-out hover:bg-indigo-400 active:bg-indigo-400"
        type="submit"
        value="Send Message"
        disabled={state.submitting}
      />
    </form>
  );
};
