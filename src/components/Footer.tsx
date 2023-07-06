const Footer = () => {
  return (
    <div className="flex justify-around bg-bgheader text-tsecondary py-3 px-6">
      <div className="flex items-center gap-2">
        <img src="./Luxury-Cuts-Logo.svg" alt="Luxury Cuts Logo" />
        <h2 className="font-bold text-2xl">
          Luxury
          <br />
          Cuts
        </h2>
      </div>

      <div>
        <h4 className="font-semibold text-lg">Menu</h4>
        <ul className="text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Contact</li>
          <li>Book Now</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg">Connect</h4>
        <ul className="text-sm">
          <li>780-111-1111</li>
          <li>
            10291 111st SW,
            <br />
            Edmonton Alberta, T11-1G1
          </li>
          <li>Test@gmail.com</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg">Social's</h4>
        <ul className="text-sm">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
