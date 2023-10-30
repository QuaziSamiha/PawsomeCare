import { Link } from "react-router-dom";

function Navbar() {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Review", path: "/review" },
  ];
  return (
    <>
      <nav className="bg-[#FFFF00] py-2">
        <div></div>
        <ul className="md:flex  justify-end">
          {routes.map((route) => (
            <>
              <li key={route.id} className="text-white font-bold text-lg px-4">
                <Link to={route.path}>{route.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
