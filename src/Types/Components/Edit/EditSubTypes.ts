export type OnUpdateOption = (name: string) => void;

export interface EditSubPageProps {
  onUpdate: OnUpdateOption;
}

export interface InsertOptionButtonProps {
  onUpdate: OnUpdateOption;
  listType: string;
}
