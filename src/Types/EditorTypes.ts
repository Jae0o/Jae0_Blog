export interface EditInputProps {
  typeName: string;
  onTyping(key: string, text: string): void;
}

export interface PostData {
  title?: string;
  subtitle?: string;
  main?: string;
}

export type setPostType = (key: string, value: string) => void;
