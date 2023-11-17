export interface PostDataType {
  isPublic: boolean;
  title: string;
  subtitle: string;
  main: string;
  category: string;
}
// EditPage
export interface EditorProps {
  post: PostDataType;
  categoryList: string[];
}
export type EditorSetPostFunc = (key: string, value: string | boolean) => void;

// Edit Input
export type EditorOnTypingFunc = (key: string, text: string) => void;
export interface EditorTextInputProps {
  typeName: string;
  onTyping: EditorOnTypingFunc;
  state: string;
}

// Edit MD
export type EditorMDOnChangeFunc = (value: string) => void;
export interface EditorMDProps {
  onTyping: EditorOnTypingFunc;
  state: string;
}

// Edit Public
export type EditorOnToggleFunc = (key: string, state: boolean) => void;
export interface EditPublicToggleProps {
  state: boolean;
  onToggle: EditorOnToggleFunc;
}

// Editor Categpry
export type EditorOnSelectingFunc = (key: string, state: string) => void;
export interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: EditorOnSelectingFunc;
}
