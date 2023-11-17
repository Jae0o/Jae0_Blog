import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Edit from "./Components/EditPage/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>임시 에러창</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/editor", element: <Edit /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
