export interface PostBanner {
  id?: string;
  category?: string;
}

export type FetchPostFunc = (category: string, pathId: string) => void;
