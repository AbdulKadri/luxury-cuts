import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative bg-[url('./assets/LC-Hero.jpg')] bg-cover bg-center bg-no-repeat h-[50vh]">
      <div className="flex flex-col justify-center items-center gap-6 h-full text-white md:bg-black/30">
        <div className="flex flex-col">
          <h2 className="text-[4em]">
            <u>Luxury Cuts</u>
          </h2>
          <p className="text-xl text-center">
            Your Premium Edmonton Barber
            <br />
            Shop Since 1993
          </p>
        </div>

        <Button colorClass="bg-primary" />
      </div>
    </div>
  );
};

export default Hero;
