const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 font-bold text-white bg-black border-b-2 border-b-primary h-[5rem] shadow-xl">
      <div className="flex gap-2 items-center">
        <img
          src="src\assets\Luxury-Cuts-Logo.svg"
          alt="Logo"
          //   className="h-[2rem]"
        />
        <p className="text-2xl">Luxury Cuts</p>
      </div>
      <ul className="flex gap-6 items-center">
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
  );
};

export default Header;
