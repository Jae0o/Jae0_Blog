export type OnUpdateOptionFunc = (name: string) => void;

export interface EditSubPageProps {
  onUpdate: OnUpdateOptionFunc;
}

export interface EditOptionListsProps {
  onUpdate: OnUpdateOptionFunc;
  listType: string;
}
