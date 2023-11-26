export type OnOptionUpdateFunc = (name: string) => void;

export interface EditSubPageProps {
  onUpdate: OnOptionUpdateFunc;
}

export interface EditOptionListsProps {
  onUpdate: OnOptionUpdateFunc;
  listType: string;
}
