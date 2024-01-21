import { Advice } from "../../../constants/VariablesType";

export interface PostBanner {
  id?: string;
  category?: string;
}

export interface BannerInfo {
  advice: Advice;
  thumbnail: string;
}

export type FetchPostFunc = (category: string, pathId: string) => void;
