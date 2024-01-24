import { PostData } from "../../../../API/Firebase.Types";

// EditPage
export type UploadPost = (post: PostData) => void;
export interface EditorProps {
  category: string;
  id: string;
  categoryList: string[];
  tagList: string[];
  onSubmit: UploadPost;
}

export type EditValue =
  | "main"
  | "category"
  | "isPublic"
  | "tag"
  | "title"
  | "thumbnail";

export type SetEditorPost = (
  key: EditValue,
  value: string | boolean | string[],
) => void;

// Edit Input
export type OnTypingEditor = (key: EditValue, text: string) => void;
export interface EditorTextInputProps {
  typeName: EditValue;
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
export type OnToggleEditor = (key: EditValue, state: boolean) => void;
export type ChangePublicText = (isPublic: boolean) => string;
export interface EditPublicProps {
  state: boolean;
  onToggle: OnToggleEditor;
}

// Editor Category
export type SelectingEditorCategory = (key: EditValue, state: string) => void;
export interface EditorCategoryProps {
  categoryList: string[];
  state: string;
  onSelecting: SelectingEditorCategory;
}

//Editor Tag
export type EditorTagSelecting = (key: EditValue, tag: string[]) => void;
export interface EditorTagsProps {
  tags: string[];
  state: string[];
  onSelecting: EditorTagSelecting;
}
