export type EditValue =
  | "main"
  | "category"
  | "isPublic"
  | "tag"
  | "title"
  | "thumbnail"
  | "miniThumbnail";

export type OnTypingEditor = (key: EditValue, text: string) => void;
