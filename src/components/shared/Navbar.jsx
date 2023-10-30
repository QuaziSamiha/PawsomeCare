// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png";
function Navbar() {
  const routes = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "testimonials", name: "Testimonials" },
    { id: "careTips", name: "Care Tips" },
  ];

  return (
    <nav className="bg-[#fff5ed] text-[#8d2232] py-6 w-full flex items-center justify-between">
      <div className="">
        <div className=" flex items-center mx-12">
          <div className="w-8 h-10">
            <img src={logo} alt="" />
          </div>
          <p className=" pl-3 text-xl font-bold uppercase">Pawsomecare</p>
        </div>
      </div>
      <ul className="flex mx-8 text-[#f59d4a]">
        {routes.map((route) => (
          <li
            key={route.id}
            className="font-semibold text-lg px-4 cursor-pointer hover:font-Pachano"
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
