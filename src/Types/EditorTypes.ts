export interface PostData {
  isPublic: boolean;
  title: string;
  subtitle: string;
  main: string;
}
// EditPage
export type setPostType = (key: string, value: string | boolean) => void;

// Edit Input
export type OnTypingType = (key: string, text: string) => void;
export interface EditorTextInputProps {
  typeName: string;
  onTyping: OnTypingType;
  state: string;
}

// Edit MD
export type OnChangeMDType = (value: string) => void;
export interface EditorMDProps {
  onTyping: OnTypingType;
  state: string;
}

// Edit Public
export type OnToggleType = (key: string, state: boolean) => void;
export interface EditPublicToggleProps {
  state: boolean;
  onToggle: OnToggleType;
}
