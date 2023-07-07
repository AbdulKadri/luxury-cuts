import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-3 w-3/4 mx-auto py-5">
        <h2 className="text-[2rem] font-bold">Contact Us</h2>
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col gap-5 lg:place-self-center">
            <div>
              <h3 className="flex items-center gap-1 font-bold">
                <FontAwesomeIcon icon={faClock} />
                <p className="text-primary">Hours of Operation:</p>
              </h3>
              <p>Monday: 9am - 5pm</p>
              <p>Tues: 8am - 5pm</p>
              <p>Wed: 8am - 6pm</p>
              <p>Thurs: 8am - 5pm</p>
              <p>Fri: 9am - 9pm</p>
              <p>Sat: 9am - 7pm</p>
              <p>Sun: Closed</p>
            </div>
            <div>
              <div>
                <h3 className="flex items-center gap-1 font-bold">
                  <FontAwesomeIcon icon={faPhone} />
                  <p className="text-primary">Phone:</p>
                </h3>
                <p>123-456-7890</p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 font-bold">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="text-primary">Email:</p>
                </h3>
                <p>
                  <a href="mailto:test@gmail.com">test@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-1 font-bold">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-primary">Find Us At:</p>
            </h3>
            <p>1234 Main Street, Toronto, Ontario, Canada, M1M 1M1</p>
            <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[400[px] xl:w-[600px] xl:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11565.811421819313!2d-87.96716806411652!3d43.5554460383012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804917176988205%3A0xdc8e17e4a492e156!2sKrier%20Foods!5e0!3m2!1sen!2sca!4v1688703402644!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
