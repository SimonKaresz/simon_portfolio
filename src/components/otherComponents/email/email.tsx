import { useForm, ValidationError } from "@formspree/react";
export const Email = () => {
  const [state, handleSubmit] = useForm("meqdvbro");
  if (state.succeeded) {
    return (
      <h1 className="my-12 py-48 text-4xl font-bold text-orange-500 text-center mx-auto">
        Thanks for joining!
      </h1>
    );
  }
  return (
    <form
      className="mx-auto flex flex-col w-[800px] h-[600px] justify-center max-lg:w-[90%]"
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Name"
        className="border-2 border-blue-900 bg-transparent my-8 p-2 rounded-lg focus:outline-none"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        className="my-8 border-2 border-blue-900 bg-transparent p-2 rounded-lg focus:outline-none"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        className="my-8 border-2 border-blue-900 bg-transparent p-2 rounded-lg h-[200px] resize-none focus:outline-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        className="border-2 border-indigo-400 p-3 w-[200px] mx-auto rounded-lg transition duration-500 ease-in-out hover:bg-indigo-400 active:bg-indigo-400 cursor-pointer"
        type="submit"
        value="Send Message"
        disabled={state.submitting}
      />
    </form>
  );
};
