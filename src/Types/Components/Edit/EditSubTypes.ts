export type OnOptionUpdateFunc = (name: string, value: string) => void;

export interface EditSubPageProps {
  onUpdate: OnOptionUpdateFunc;
}

export interface EditOptionListsProps {
  onUpdate: OnOptionUpdateFunc;
  listType: string;
}
