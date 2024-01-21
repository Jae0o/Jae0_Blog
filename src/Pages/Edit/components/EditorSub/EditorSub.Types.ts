export type OnUpdateOption = (name: string) => void;

export interface EditorSubPageProps {
  onUpdate: OnUpdateOption;
}

export interface InsertOptionButtonProps {
  onUpdate: OnUpdateOption;
  listType: string;
}
