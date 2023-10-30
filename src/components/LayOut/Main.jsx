import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Main() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Main;
