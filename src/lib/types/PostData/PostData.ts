export interface PostData {
  id: string;
  createAt: string;
  updateAt: string;
  isPublic: boolean;
  title: string;
  main: string;
  category: string;
  tag: string[];
  thumbnail: string;
  miniThumbnail: string;
}
