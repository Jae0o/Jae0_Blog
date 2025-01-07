export const ROUTE_PATH = {
  HOME: "/",
  NEW_EDIT: "/editor/newPost",
  POST_LIST: (category: string) => `/post/list/${category}`,
  POST_DETAIL: (id: string) => `/post/detail/${id}`,
} as const;
