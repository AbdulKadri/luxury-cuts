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
    <header className="flex items-center justify-between py-5 px-8 font-bold text-white bg-black border-b-2 border-b-primary h-[5rem] shadow-xl">
      <div>
        <a href="/" className="flex gap-2 items-center">
          <img
            src="=../../Luxury-Cuts-Logo.svg"
            alt="Logo"
            //   className="h-[2rem]"
          />
          <p className="text-2xl">Luxury Cuts</p>
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2xl" />
        </button>
        {isOpen && (
          <div className="absolute top-8 right-0 mt-12 bg-black w-full shadow-lg z-10">
            <ul className="flex flex-col items-center gap-6 p-4 text-xl">
              <li>Home</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact</li>
              <li>
                <button className="bg-primary p-2 border border-white">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-6 items-center">
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact</li>
        <li>
          <Button colorClass="bg-primary" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
