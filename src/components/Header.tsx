import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-2 px-8 font-bold text-tsecondary bg-bgheader border-b-2 border-b-primary shadow-xl">
      <div>
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="=../../Luxury-Cuts-Logo.svg"
            alt="Logo"
            className="h-[2rem] lg:h-[3rem]"
          />
          <p className="text-lg lg:text-2xl">Luxury Cuts</p>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
        {isOpen && (
          <div className="absolute top-1 right-0 mt-12 bg-black w-full shadow-lg z-10">
            <ul className="flex flex-col items-center gap-4 p-4 text-xl">
              <li className="hover:text-primary">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Button link="/booking" />
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-6 items-center text-[1rem]">
        <li className="hover:text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:text-primary">
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Button link="/booking" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
