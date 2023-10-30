import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="sm:mx-14">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
