import { useForm } from "react-hook-form";
import { cls } from "../../libs/client/utils";
import useMutation from "../../libs/client/useMutation";
import Button from "./Button";
import Input from "./JustInput";
import TextArea from "./Textarea";
import useStore from "../../helpers/store";
import styles from "../../styles/styles.module.css";
import Head from "next/head";

export default function Contact() {
  const [contact, { loading, data, error }] = useMutation("/api/contact");
  const { register, reset, handleSubmit, watch, setValue, getValues } =
    useForm();

  const [imageUrl, setImageUrl] = useStore((state) => [
    state.imageUrl,
    state.setImageUrl,
  ]);

  const onValid = (validForm) => {
    setValue("url", imageUrl);
    const newValues = getValues();
    contact(newValues);
    alert("전송완료!");
    reset();
    setImageUrl("");
  };
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      <div
        className={cls(
          styles.font_regular_500,
          "relative px-4  flex flex-col justify-center items-center w-full h-full bg-[#d6c2ad] text-[rgba(0,0,0,0.5)]"
        )}
      >
        <h3 className="text-3xl font-bold text-center">contact us</h3>
        <div className=" flex flex-col justify-center items-center mt-4 space-y-3">
          <p className="text-sm">We are waiting for your message.</p>
        </div>
        <>
          <form
            onSubmit={handleSubmit(onValid)}
            className="flex flex-col mt-4 space-y-4"
          >
            <Input
              register={register("name", { required: true })}
              label="Your name (required)"
              type="text"
              name="name"
              required
            />
            <Input
              register={register("email", { required: true })}
              label="Your email (required)"
              type="email"
              name="email"
              required
            />
            <TextArea
              register={register("description", { required: true })}
              label="Message (required)"
              name="description"
              required
            />
            <Button text="send" />
          </form>
        </>
      </div>
    </>
  );
}
