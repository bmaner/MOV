import useStore from "../../helpers/store";
import useMutation from "../../libs/client/useMutation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import Button from "./Button";
import TextArea from "./Textarea";

export default function Modal() {
  const [setAddMessage] = useStore((state) => [state.setAddMessage]);
  const [addMessages, { loading, data: resultData, error }] =
    useMutation("/api/messages");
  const { register, handleSubmit } = useForm();
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, mutate } = useSWR(`/api/messages`, fetcher);
  const onValid = (validForm) => {
    if (loading) return;
    addMessages(validForm);
  };

  useEffect(() => {
    if (resultData && resultData.ok) {
      mutate(`/api/messages`);
      setAddMessage(false);
    }
  }, [resultData, mutate]);

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="absolute px-4 py-4 bg-white rounded-lg shadow-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div className="flex flex-col justify-center max-w-xs px-2 py-4 max-h-52 space-y-4">
        <svg
          onClick={() => setAddMessage(false)}
          className="absolute w-6 h-6 text-gray-400 cursor-pointer top-1 right-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <TextArea
          required
          name="description"
          label="Message (required)"
          register={register("message", { required: true, maxLength: 40 })}
        />
        <Button text="메세지 남기기" />
      </div>
    </form>
  );
}
