import ServiceCard from "./ServiceCard";
import scissors from "../assets/service-icons/scissors.svg";
import barber from "../assets/service-icons/barber.svg";
import trimmer from "../assets/service-icons/trimmer.svg";
import Button from "./Button";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 bg-white text-black">
      <h3 className="text-[2rem]">Services</h3>
      <p className="md:hidden text-[0.7rem] text-center mx-[3rem] lg:mx-[6rem]">
        Welcome to our Barbershop, where we merge classic styling with modern
        trends to redefine your look. Experience exceptional haircuts, detailed
        beard trimming, and premium grooming treatments from our highly skilled
        barbers. We promise a superior and comfortable grooming experience every
        time you visit.
      </p>
      <p className="hidden md:block text-[0.7rem] text-center mx-[3rem] lg:mx-[6rem]">
        Step into our Barbershop and immerse yourself in a unique blend of
        tradition and contemporary style. We're not just a barbershop; we're a
        destination for those seeking an unparalleled grooming experience. Our
        professional team of barbers, with their rich expertise and an in-depth
        understanding of styles and trends, are committed to providing you with
        a unique and personalized service. From classic haircuts to the latest
        styles, meticulous beard shaping to full grooming treatments, we cater
        to all your grooming needs. We use top-tier products and modern tools to
        ensure the highest quality service.
        <br />
        <br />
        Our attention to detail and dedication to individual client needs set us
        apart in our field. Here, every appointment is more than just a haircut;
        it's an experience, an art, and above all, a representation of your
        personal style. Discover the range of our services and let us craft the
        perfect look that reflects your personality and lifestyle. Your journey
        towards a great style begins here at our Barbershop!
      </p>
      <hr className="w-5/6 my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 md:place-items-center gap-[1rem] w-full px-4">
        <ServiceCard
          title="Classic Cuts"
          text="Experience precision cuts, tailored to enhance your look and suit your lifestyle."
          image={scissors}
        />
        <ServiceCard
          title="Beard & Mustache Trimming"
          text="Achieve a polished look with our expert beard and mustache trimming services."
          image={trimmer}
        />
        <ServiceCard
          title="Deluxe Grooming Package"
          text="Indulge in our comprehensive grooming package for a complete style transformation."
          image={barber}
        />
        <div className="md:col-span-3 place-self-center text-center w-3/4">
          <p className="text-md mb-4">
            View all our services and what we offer below
          </p>
          <div className="text-white">
            <Button text="See All Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
