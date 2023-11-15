export type OnTypingType = (key: string, text: string) => void;
export interface EditTextInputProps {
  typeName: string;
  onTyping: OnTypingType;
  state: string;
}

export interface EditMDProps {
  onTyping: OnTypingType;
  state: string;
}

export interface PostData {
  title: string;
  subtitle: string;
  main: string;
}

export type setPostType = (key: string, value: string) => void;

export type OnChangeMDType = (value: string) => void;
