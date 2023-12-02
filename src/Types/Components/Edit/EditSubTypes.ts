export type OnUpdateOptionFunc = (name: string) => void;

export interface EditSubPageProps {
  onUpdate: OnUpdateOptionFunc;
}

export interface InsertOptionButtonProps {
  onUpdate: OnUpdateOptionFunc;
  listType: string;
}
