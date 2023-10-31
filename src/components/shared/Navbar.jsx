// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "testimonials", name: "Testimonials" },
    { id: "careTips", name: "Care Tips" },
    { id: "services", name: "Services" },
  ];

  return (
    <nav
      className={` ${
        isOpen ? "bg-[#8d2232] text-[#fff5ed]" : "bg-[#fff5ed] text-[#8d2232]"
      }  lg:py-6 w-full flex items-baseline md:items-center justify-between`}
    >
      <div className="">
        <div className="flex items-baseline md:items-center py-3 md:py-6 mx-4 md:mx-12">
          <div className="w-6 md:w-8 h-6 md:h-10">
            <img src={logo} alt="" />
          </div>
          <p className="pl-3 text-lg md:text-xl font-semibold md:font-bold uppercase">
            Pawsomecare
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen === false ? (
            <Bars3Icon className="h-6 w-6 mx-10" />
          ) : (
            <XMarkIcon className="h-6 w-6 mx-10 text-[#fff5ed]" />
          )}
        </button>
      </div>
      <ul
        className={`lg:flex items-baseline justify-left md:justify-end mx-8 absolute md:static duration-500 w-full pl-1 ${
          isOpen
            ? "top-12 sm:top-28 bg-[#8d2232] text-[#fff5ed]"
            : "-top-48 text-[#f59d4a] hidden"
        }`}
      >
        {routes.map((route) => (
          <li
            key={route.id}
            className="lg:text-lg px-4 cursor-pointer hover:text-[#fdaf66]"
          >
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
