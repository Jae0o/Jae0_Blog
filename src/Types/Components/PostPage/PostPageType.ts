export interface PostBannerParamsType {
  id?: string;
  category?: string;
}

export type FetchPostFunc = (category: string, pathId: string) => void;
