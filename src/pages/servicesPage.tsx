import ServiceCard from "../components/ServiceCard";
import scissors from "../assets/service-icons/scissors.svg";
import barber from "../assets/service-icons/barber.svg";
import trimmer from "../assets/service-icons/trimmer.svg";
import Button from "../components/Button";

const servicesPage = () => {
  return (
    <div className="flex flex-col gap-3 w-3/4 mx-auto py-5">
      <h2 className="text-[2rem] font-bold">All Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="col-span-2 md:col-span-4 lg:col-span-6">
          <ServiceCard
            title="Classic Cuts"
            text="Experience precision cuts, tailored to enhance your look and suit your lifestyle."
            image={scissors}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-3">
          <ServiceCard
            title="Beard & Mustache Trimming"
            text="Achieve a polished look with our expert beard and mustache trimming services."
            image={trimmer}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-3">
          <ServiceCard
            title="Deluxe Grooming Package"
            text="Indulge in our comprehensive grooming package for a complete style transformation."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2">
          <ServiceCard
            title="Hair Coloring"
            text="Revitalize your look with our professional hair coloring services."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <ServiceCard
            title="Hair Styling"
            text="Get the perfect style for any occasion with our expert hair styling services."
            image={trimmer}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <ServiceCard
            title="Shampoo & Conditioning"
            text="Keep your hair healthy and vibrant with our shampoo and conditioning services."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <ServiceCard
            title="Scalp Treatments"
            text="Soothe and rejuvenate your scalp with our therapeutic scalp treatments."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <ServiceCard
            title="Hair Extensions"
            text="Add length and volume to your hair with our high-quality hair extensions."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <ServiceCard
            title="Keratin Treatments"
            text="Smooth and straighten your hair with our professional keratin treatments."
            image={barber}
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <ServiceCard
            title="Nose Waxing"
            text="Remove unwanted nose hair safely and effectively with our nose waxing services."
            image={scissors}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-white">
          <Button text="Proceed to booking &#8680;" link="/booking" />
        </div>
      </div>
    </div>
  );
};

export default servicesPage;
