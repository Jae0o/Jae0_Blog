import { PostData } from "../../API/FirebaseTypes";

// EditPage
export type UploadPost = (post: PostData) => void;
export interface EditorProps {
  post: PostData;
  categoryList: string[];
  tagList: string[];
  onSubmit: UploadPost;
}

export type SetEditorPost = (
  key: string,
  value: string | boolean | string[],
) => void;

// Edit Input
export type OnTypingEditor = (key: string, text: string) => void;
export interface EditorTextInputProps {
  typeName: string;
  onTyping: OnTypingEditor;
  state: string;
}

// Edit MD
export type OnChangeEditorMD = (value: string) => void;
export interface EditorMDProps {
  onTyping: OnTypingEditor;
  state: string;
}

// Edit Public
export type OnToggleEditor = (key: string, state: boolean) => void;
export type ChangePublicText = (isPublic: boolean) => string;
export interface EditPublicProps {
  state: boolean;
  onToggle: OnToggleEditor;
}

// Editor Categpry
export type SelectingEditorCategory = (key: string, state: string) => void;
export interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: SelectingEditorCategory;
}

//Editor Tag
export type EditorTagSelecting = (key: string, tag: string[]) => void;
export interface EditorTagsProps {
  tags: string[];
  state: string[];
  onSelecting: EditorTagSelecting;
}
