import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const routes = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "testimonials", name: "Testimonials" },

    { id: "careTips", name: "Care Tips" },
  ];

  return (
    <nav className="bg-[#FFFF00] py-2 fixed w-full">
      <ul className="md:flex justify-end">
        {routes.map((route) => (
          <li key={route.id} className="text-white font-bold text-lg px-4">
            <Link
              activeClass="active"
              to={route.id}
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value to offset the scroll position if you have a fixed header
              duration={500}
            >
              {route.name}
            </Link>
            {/* 
            <Link activeClass="active"
      to="target"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}
      spyThrottle={500}
>
  Your name
</Link>
            */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
