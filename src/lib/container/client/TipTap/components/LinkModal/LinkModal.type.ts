import { ModalProps } from "@/lib/components/client/Modal/Modal.type";

export interface LinkModalProps extends Omit<ModalProps, "children"> {
  onConfirm: (url: string) => void;
}
