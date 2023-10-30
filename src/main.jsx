import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="sm:mx-8 lg:mx-14 font-Outfit">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
