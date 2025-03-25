import { useForm } from "react-hook-form";

const useLinkForm = () => {
  const { handleSubmit, formState, register } = useForm<{ url: string }>({
    defaultValues: {
      url: "",
    },
  });

  return { handleSubmit, formState, register };
};

export default useLinkForm;
