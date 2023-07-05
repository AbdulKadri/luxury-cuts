import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative bg-[url('./assets/LC-Hero.jpg')] bg-cover bg-center bg-no-repeat h-[70vh]">
      <div className="flex flex-col justify-center items-center gap-6 h-full text-white md:bg-black/10">
        <div className="flex flex-col gap-4 md:gap-2 bg-black/20">
          <h2 className="text-[3em] text-center">
            <u>Luxury Cuts</u>
          </h2>
          <p className="text-md text-center">
            Your Premium Edmonton Barber
            <br />
            Shop Since 1993
          </p>
        </div>

        <Button />
      </div>
    </div>
  );
};

export default Hero;
