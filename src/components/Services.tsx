import ServiceCard from "./ServiceCard";
import scissors from "../assets/service-icons/scissors.svg";
import barber from "../assets/service-icons/barber.svg";
import trimmer from "../assets/service-icons/trimmer.svg";
import Button from "./Button";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 bg-black text-white">
      <h3 className="text-[2rem]">Services</h3>
      <p className="text-[0.7rem] text-center mx-[3rem] lg:mx-[6rem]">
        Welcome to our Barbershop, where we merge classic styling with modern
        trends to redefine your look. Experience exceptional haircuts, detailed
        beard trimming, and premium grooming treatments from our highly skilled
        barbers. We promise a superior and comfortable grooming experience every
        time you visit.
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
        <div className="md:col-span-3 place-self-center text-center">
          <p className="text-md mb-4">
            See all our services and what we offer below
          </p>
          <Button text="See All" />
        </div>
      </div>
    </div>
  );
};

export default Services;
