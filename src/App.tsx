import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextAuthUserProvider } from "./Context/ContextAuthUser";
import { ContextCategoryListProvider } from "./Context/ContextCategory";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";
import { ContextPostsProvider } from "./Context/ContextPosts";
import { ContextTagListProvider } from "./Context/ContextTagList";
import Edit from "./Pages/Edit/Edit";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post";
import PostDetail from "./Pages/Post/components/PostDetail/PostDetail";
import PostList from "./Pages/Post/components/PostList/PostList";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>임시 에러창</h1>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/editor/:category/:id",
        element: <Edit />,
      },
      {
        path: "/post",
        element: <Post />,
        children: [
          { path: "/post/list/:category", element: <PostList /> },
          { path: "/post/detail/:category/:id", element: <PostDetail /> },
        ],
      },
    ],
  },
]);

const App = (): React.ReactNode => {
  return (
    <ContextAuthUserProvider>
      <ContextIsLoadingProvider>
        <ContextPostsProvider>
          <ContextTagListProvider>
            <ContextCategoryListProvider>
              <RouterProvider router={router} />
              <div id="modal" />
            </ContextCategoryListProvider>
          </ContextTagListProvider>
        </ContextPostsProvider>
      </ContextIsLoadingProvider>
    </ContextAuthUserProvider>
  );
};

export default App;
