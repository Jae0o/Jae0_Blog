export type setCategoryFunc = (category: string) => Promise<void>;

export type getCategoryFunc = () => Promise<string[]>;

export type setLabelFunc = (label: string) => Promise<void>;

export type getLabelFunc = () => Promise<string[]>;
