import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="padding-x absolute py-8 pt-6 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex leading-none items-center">
          <img src={logo} width={100} height={200} alt="logo" className="" />
          <span className="text-blue-800 font-montserrat z-10 
          font-bold text-2xl">BMW</span>
        </a>
        <ul className={`flex-1 flex justify-center items-center
         gap-16 max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat 
              leading-normal text-blue-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="max-lg:block hidden">
         
          <RxHamburgerMenu
            className={`cursor-pointer hover:text-gray-700    `}
            width={150}
            height={150}
            onClick={toggleNav}
          />
          {nav && (
            <ul className="bg-white absolute top-16 right-0 
            p-4 mt-2 rounded shadow">
              {navLinks.map((item) => (
                <li className="" key={item.label}>
                  <a href={item.href} className=" hover:bg-gray-700 hover:text-white  block px-3 py-2 rounded-md   text-base font-medium
                  font-montserrat leading-normal text-slate-gray">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
