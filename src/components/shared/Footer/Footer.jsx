function Footer() {
  return (
    <>
      <div>
        {/* <h1>this is footer</h1> */}
        <div className="bg-[#fff5ed] h-16 ">
          <h1 className="text-center text-blue-900 text-sm py-3">
            copy right by samiha 2023
          </h1>
          {/* <div className="md:grid md:grid-cols-2 bg-[#fff5ed] h-96 lg:grid-cols-4 gap-5"> */}
          {/* <div className="h-80">Contact Us</div> */}
          {/* <div>Social Media</div> */}
          {/* <div>FAQ</div> */}
          {/* <div className="h-80"> */}
          {/* {routes.map((route) => (
              <li
                key={route.id}
                className="lg:text-lg px-2 cursor-pointer hover:text-[#fdaf66]"
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
              </li>
            ))} */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
