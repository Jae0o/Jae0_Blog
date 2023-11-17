export interface PostDataType {
  id: string;
  createAt: string;
  updateAt: string;
  isPublic: boolean;
  title: string;
  subtitle: string;
  main: string;
  category: string;
  tag: string[];
}
// EditPage
export interface EditorProps {
  post: PostDataType;
  categoryList: string[];
  tagList: string[];
}

export type EditorSetPostFunc = (key: string, value: string | boolean | string[]) => void;

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
export type EditorCategorySelectingFunc = (key: string, state: string) => void;
export interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: EditorCategorySelectingFunc;
}

//Editor Tag
export type EditorTagSelectingFunc = (key: string, tag: string[]) => void;
export interface EditorTagsProps {
  tags: string[];
  state: string[];
  onSelecting: EditorTagSelectingFunc;
}
