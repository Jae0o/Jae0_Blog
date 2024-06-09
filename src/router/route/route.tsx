import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Root = React.lazy(() => import("@/Root"));
const Error = React.lazy(() => import("@/pages/Error/Error"));
const Edit = React.lazy(() => import("@/pages/Edit/Edit"));
const Home = React.lazy(() => import("@/pages/Home/Home"));
const Post = React.lazy(() => import("@/pages/Post/Post"));
const PostDetail = React.lazy(
  () => import("@/pages/Post/components/PostDetail/PostDetail"),
);
const PostList = React.lazy(
  () => import("@/pages/Post/components/PostList/PostList"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/editor/:id",
        element: <Edit />,
      },
      {
        path: "/post",
        element: <Post />,
        children: [
          { path: "/post/list/:category", element: <PostList /> },
          { path: "/post/detail/:id", element: <PostDetail /> },
        ],
      },
    ],
  },
]);

export default router;
