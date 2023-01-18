import { useForm } from "@formspree/react";
import { InputField, Submit, TextareaField } from "./contactIndex";
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
      className="mx-auto flex h-[600px] w-[800px] max-w-[90%] flex-col justify-center"
      onSubmit={handleSubmit}
    >
      <InputField errors={state.errors} />
      <TextareaField errors={state.errors} />
      <Submit disabled={state.submitting} />
    </form>
  );
};
