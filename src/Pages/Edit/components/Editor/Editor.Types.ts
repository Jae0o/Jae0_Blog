export type EditValue =
  | "main"
  | "category"
  | "isPublic"
  | "tag"
  | "title"
  | "thumbnail";

export type OnTypingEditor = (key: EditValue, text: string) => void;
