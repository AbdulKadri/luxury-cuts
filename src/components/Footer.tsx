import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelope,
  faLocationDot,
  faBellConcierge,
  faAddressBook,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faProductHunt,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="relative bg-bgheader text-tsecondary px-6 py-8 lg:px-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <img
                src="./Luxury-Cuts-Logo.svg"
                alt="Luxury Cuts Logo"
                className="w-1/4 lg:w-1/6"
              />
              <h2 className="font-bold text-2xl md:text-[2rem] text-primary">
                Luxury
                <br />
                Cuts
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-primary">Menu</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <FontAwesomeIcon icon={faHome} className="mr-1 text-primary" />
                Home
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBellConcierge}
                  className="mr-1 text-primary"
                />
                Services
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faProductHunt}
                  className="mr-1 text-primary"
                />
                Products
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-1 text-primary"
                />
                Contact
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-1 text-primary"
                />
                Book Now
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-primary">Connect</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-1 text-primary" />
                780-111-1111
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-1 text-primary"
                />
                11111 111st SW,
                <br />
                Edmonton Alberta, T11-1G1
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-1 text-primary"
                />
                Test@gmail.com
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg text-primary">Social's</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mr-1 text-primary"
                />{" "}
                Facebook
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mr-1 text-primary"
                />{" "}
                Instagram
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="mr-1 text-primary"
                />{" "}
                Twitter
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="mr-1 text-primary"
                />{" "}
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
