import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import Post from "./Pages/Post/Post";
import PostDetail from "./Pages/Post/components/PostDetail/PostDetail";
import PostList from "./Pages/Post/components/PostList/PostList";
import { ContextCategoryListProvider } from "./Context/ContextCategory";
import { ContextTagListProvider } from "./Context/ContextTagList";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";
import { ContextPostsProvider } from "./Context/ContextPosts";
import { ContextIsAdminUserProvider } from "./Context/ContextIsAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>임시 에러창</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/editor/:category/:id", element: <Edit /> },
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

const App: React.FC = () => {
  return (
    <ContextIsAdminUserProvider>
      <ContextIsLoadingProvider>
        <ContextPostsProvider>
          <ContextTagListProvider>
            <ContextCategoryListProvider>
              <RouterProvider router={router} />
            </ContextCategoryListProvider>
          </ContextTagListProvider>
        </ContextPostsProvider>
      </ContextIsLoadingProvider>
    </ContextIsAdminUserProvider>
  );
};

export default App;
