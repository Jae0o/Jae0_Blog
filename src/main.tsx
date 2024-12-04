import "./index.css";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";

const root = document.getElementById("root")!;
const rootDom = ReactDOM.createRoot(root);

rootDom.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
