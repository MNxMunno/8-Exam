import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/store.js";
import Laziy from "./components/lazy/Laziy.jsx";
import "./index.css";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="load">
          <img
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-18-223_512.gif"
            alt=""
          />
        </div>
      }
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
