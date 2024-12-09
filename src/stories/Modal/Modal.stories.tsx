import React from "react";

import { Button, Modal } from "@/lib/components/client";
import { useModal } from "@/lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Modal Ui Component
 *
 * Modal UI를 편하게 사용할 수 있도록 구현한 Modal Component입니다.<br>
 * 기본적으로 `AwayClick`, `Escape key`를 이용한 Modal 닫기 기능을 제공합니다.<br>
 * ( 해당 기능은 Option을 통해 off 할 수 있습니다. )
 *
 * ### 사용 방법
 *
 * Modal은 `useModal hook`과 함께 사용하여 useModal 내부의 값을 Modal에 전달하여 사용할 수 있습니다.<br>
 *
 * - **isShow Props**에 useModal hook 내부 isShow를 전달합니다.
 * - **onClose Props**에 useModal hook 내부 handleCloseModal 전달합니다.
 *
 * <br>
 *
 * ```tsx
 * import { Modal } from "@/lib/components";
 * import { useModal } from "@/lib/hooks"
 *
 * const [
 *   isShow, // Modal Component의 isShow Prop에 전달합니다.
 *   handleShowModal, // Modal을 활성화시킬 때 호출합니다.
 *   handleCloseModal // Modal Component의 onClose Prop에 전달합니다.
 * ] = useModal();
 *
 * return (
 *   <Modal
 *     isShow={isShow}
 *     onClose={handleCloseModal}
 *
 *     // Optional
 *     hideCloseIcon={false}
 *     disableAwayClick={false}
 *     backgroundStyle={CSS style}
 *     modalStyle={CSS style}
 *     zIndex={500}
 *  >
 *
 *  { children }
 *
 *   </Modal>
 * )
 * ```
 *
 * ### Props
 *
 * - **isShow**<br>
 *   useModal의 `isShow` 값을 전달받습니다.
 *
 * - **onClose**<br>
 *   useModal의 `handleCloseModal` 메서드를 전달받습니다.
 *
 * - **hideCloseIcon ( optional )**<br>
 *   true 전달 시 기본 스타일 `Close Icon`을 비활성화합니다.
 *
 * - **disableAwayClick ( optional )**<br>
 *   true 전달 시 `Away Click`을 통한 Modal close 기능을 비활성화합니다.
 *
 * ### type
 *
 * - **isShow** : `boolean`
 * - **onClose** : `() => void`
 *
 * <br>
 *
 * - **hideCloseIcon ( optional )** : `boolean`
 * - **disableAwayClick ( optional )** : `boolean`
 * */
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    isShow: {
      control: { disable: true },
      description: "useModal의 `isShow` 값을 전달받습니다.",
    },

    onClose: {
      control: { disable: true },
      description: "useModal의 `handleCloseModal` 메서드를 전달받습니다.",
    },

    children: {
      control: { disable: true },
      description: "Modal 내부에 나타낼 요소를 전달받습니다.",
    },

    hideCloseIcon: {
      control: "boolean",
      description: "true 전달 시 기본 스타일 `Close Icon`을 비활성화합니다.",
    },

    disableAwayClick: {
      control: "boolean",
      description:
        "true 전달 시 `Away Click`을 통한 Modal close 기능을 비활성화합니다.",
    },
  },

  args: {
    isShow: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-[20rem] h-[20rem] flex items-center justify-center font-semibold text-large select-none">
        Modal Layout 입니다!
      </div>
    ),
  },
  decorators: [
    (StoryFn, { args }) => {
      const ModalDecorator = () => {
        const [isShow, showModal, closeModal] = useModal();

        return (
          <>
            <Button
              onClick={showModal}
              className="bg-green_700 text-white_500"
            >
              Modal Open!
            </Button>

            <StoryFn args={{ ...args, isShow, onClose: closeModal }} />
          </>
        );
      };

      return <ModalDecorator />;
    },
  ],
};
