export type setAddListsFunc = (listType: string, value: string) => Promise<void>;

export type getListFunc = (listType: string) => Promise<string[]>;
