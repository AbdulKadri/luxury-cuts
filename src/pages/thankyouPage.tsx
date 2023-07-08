import { useEffect } from "react";
import confetti from "canvas-confetti";
import Button from "../components/Button";

const ThankYouPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-[50vh] font-bold text-center">
      <h3 className="text-[2rem]">Thank you for your booking!</h3>
      <p>You will get an email with the details shortly...</p>
      <div className="text-white">
        <Button text="Home" link="/" />
      </div>
    </div>
  );
};

export default ThankYouPage;
