import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Edit from "./Components/EditPage/Edit";
import PostList from "./Components/PostListPage/PostList";
import { ContextCategoryListProvider } from "./Context/ContextCategory";
import { ContextTagListProvider } from "./Context/ContextTagList";
import { ContextPostListProvider } from "./Context/ContextPostList";
import { ContextIsLoadingProvider } from "./Context/ContextIsLoading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>임시 에러창</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/editor/:ID", element: <Edit /> },
      { path: "/postlist/:Category", element: <PostList /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <ContextIsLoadingProvider>
      <ContextPostListProvider>
        <ContextTagListProvider>
          <ContextCategoryListProvider>
            <RouterProvider router={router} />
          </ContextCategoryListProvider>
        </ContextTagListProvider>
      </ContextPostListProvider>
    </ContextIsLoadingProvider>
  );
};

export default App;
