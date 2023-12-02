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
export type UploadPostFunc = (post: PostDataType) => void;
export interface EditorProps {
  post: PostDataType;
  categoryList: string[];
  tagList: string[];
  onSubmit: UploadPostFunc;
}

export type SetEditorPostFunc = (
  key: string,
  value: string | boolean | string[],
) => void;

// Edit Input
export type OnTypingEditorFunc = (key: string, text: string) => void;
export interface EditorTextInputProps {
  typeName: string;
  onTyping: OnTypingEditorFunc;
  state: string;
}

// Edit MD
export type OnChangeEditorMDFunc = (value: string) => void;
export interface EditorMDProps {
  onTyping: OnTypingEditorFunc;
  state: string;
}

// Edit Public
export type OnToggleEditorFunc = (key: string, state: boolean) => void;
export type ChangePublicTextFunc = (isPublic: boolean) => string;
export interface EditPublicProps {
  state: boolean;
  onToggle: OnToggleEditorFunc;
}

// Editor Categpry
export type SelectingEditorCategoryFunc = (key: string, state: string) => void;
export interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: SelectingEditorCategoryFunc;
}

//Editor Tag
export type EditorTagSelectingFunc = (key: string, tag: string[]) => void;
export interface EditorTagsProps {
  tags: string[];
  state: string[];
  onSelecting: EditorTagSelectingFunc;
}
