export type onUpdateFunc = (name: string, value: string) => void;

export interface EditSubPageProps {
  onUpdate: onUpdateFunc;
}

export interface EditCategoryListProps {
  onUpdate: onUpdateFunc;
}
