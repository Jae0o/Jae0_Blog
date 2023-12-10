import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Post from "./Pages/Post";
import PostDetail from "./Components/PostPage/PostDetail/PostDetail";
import PostList from "./Components/PostPage/PostList/PostList";
import { ContextCategoryListProvider } from "./Context/ContextCategory";
import { ContextTagListProvider } from "./Context/ContextTagList";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";

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
    <ContextIsLoadingProvider>
      <ContextTagListProvider>
        <ContextCategoryListProvider>
          <RouterProvider router={router} />
        </ContextCategoryListProvider>
      </ContextTagListProvider>
    </ContextIsLoadingProvider>
  );
};

export default App;
