"use client";

import { MouseEventHandler } from "react";

import { Button, Modal, TextInput } from "@/lib/components/client";
import { TipTap_LinkIcon } from "@/lib/components/server";

import { LinkModalProps } from "./LinkModal.type";
import { useLinkForm } from "./hooks";

const LinkModal = ({ ...rest }: LinkModalProps) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useLinkForm();

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    rest.onClose();
  };

  return (
    <Modal {...rest}>
      <form
        className="w-[34rem] flex flex-col gap-[1.2rem]"
        onSubmit={handleSubmit(({ url }) => {
          rest.onConfirm(url);
          rest.onClose();
        })}
      >
        <span className="flex items-center gap-[0.6rem] text-[1.6rem] font-bold select-none">
          <TipTap_LinkIcon size="2.4rem" />
          <p>Link 등록</p>
        </span>

        <TextInput
          className="w-full"
          {...register("url", {
            required: "* URL을 입력해주세요.",
          })}
        />

        {errors.url?.message && (
          <small className="w-full h-[2rem] px-[1rem] flex items-center text-red_500 text-[1.2rem] font-semibold">
            {errors.url.message}
          </small>
        )}

        <div className="w-full flex items-center justify-center gap-[2.4rem]">
          <Button className="w-[8rem] bg-green_500 text-white_500">등록</Button>

          <Button
            className="w-[8rem] bg-gray_500 text-white_500"
            onClick={handleCloseModal}
          >
            닫기
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LinkModal;
