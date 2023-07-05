import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-2 px-8 font-bold text-white bg-black border-b-2 border-b-primary shadow-xl">
      <div>
        <a href="/" className="flex gap-2 items-center">
          <img
            src="=../../Luxury-Cuts-Logo.svg"
            alt="Logo"
            className="h-[2rem] md:h-[1.5rem]"
          />
          <p className="text-lg md:text-md">Luxury Cuts</p>
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
        {isOpen && (
          <div className="absolute top-1 right-0 mt-12 bg-black w-full shadow-lg z-10">
            <ul className="flex flex-col items-center gap-6 p-4 text-xl">
              <li>Home</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact</li>
              <li>
                <Button />
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-6 items-center text-[.6rem]">
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact</li>
        <li>
          <Button />
        </li>
      </ul>
    </header>
  );
};

export default Header;
