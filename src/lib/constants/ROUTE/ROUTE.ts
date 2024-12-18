export const ROUTE_PATH = {
  HOME: "/",
  NEW_EDIT: "/editor/newPost",
  POST_LIST: (category: string) => `/post/list/${category}`,
} as const;
