import { useNavigate } from "react-router-dom";
import { useState } from "react";
import barbers, { Barber } from "../data/barbers";
import services, { Service } from "../data/services";
import times, { Time } from "../data/times";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<Time | null>(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleDetailsSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStep(2);
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(4);
  };

  const handleDateSelect = () => {
    if (selectedDate) setStep(5);
  };

  const handleTimeSelect = (time: Time) => {
    setSelectedTime(time);
    setStep(6);
  };

  const handleConfirm = () => {
    navigate("/thankyou");
  };

  const goBack = () => {
    if (step > 1) {
      if (step === 2) setCustomerDetails({ name: "", phone: "", email: "" });
      if (step === 3) setSelectedBarber(null);
      if (step === 4) setSelectedService(null);
      if (step === 5) setSelectedDate(null);
      if (step === 6) setSelectedTime(null);
      setStep(step - 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center pt-3 w-full">
      {step > 1 && (
        <button
          onClick={goBack}
          className="absolute top-0 m-3 bg-primary text-white self-start p-3 rounded hover:bg-green-700"
        >
          Go Back
        </button>
      )}

      <div
        className={`flex flex-col md:flex-row items-start justify-around md:justify-around w-full p-4 ${
          step === 6 ? "md:items-center" : ""
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center w-full md:w-2/3 ${
            step === 6 ? "hidden" : ""
          }`}
        >
          {step === 1 && (
            <form
              onSubmit={handleDetailsSubmit}
              className="flex flex-col gap-3"
            >
              <h2 className="text-2xl font-bold">Enter your details</h2>
              <input
                type="text"
                placeholder="Name"
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    name: e.target.value,
                  })
                }
                required
                className="border-2 border-primary rounded-md p-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={customerDetails.phone}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    phone: e.target.value,
                  })
                }
                required
                className="border-2 border-primary rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={customerDetails.email}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    email: e.target.value,
                  })
                }
                required
                className="border-2 border-primary rounded-md p-2"
              />
              <button
                type="submit"
                className="bg-primary w-1/2 self-center rounded hover:bg-green-700 text-white p-2"
              >
                Next
              </button>
            </form>
          )}
          {step === 2 && (
            <div className="text-center pt-[3rem] md:pt-0">
              <h2 className="text-2xl font-bold mb-4">Choose a professional</h2>
              <div className="flex gap-3 flex-col md:flex-row">
                {barbers.map((barber) => (
                  <div className="hover:bg-black hover:text-white rounded">
                    <div
                      key={barber.id}
                      onClick={() => handleBarberSelect(barber)}
                      className="flex flex-col items-center justify-center p-4 border border-primary rounded-md cursor-pointer"
                    >
                      <img
                        src={barber.image}
                        alt={barber.name}
                        className="w-24 h-24 rounded-full border-primary border-2"
                        loading="lazy"
                      />
                      <p className="mt-2 text-sm">{barber.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="text-center pt-[3rem] md:pt-0">
              <h2 className="text-2xl font-bold mb-4">Choose a service</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <div className="hover:bg-primary hover:text-white rounded">
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="p-4 border border-primary rounded-md cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-1 font-medium">
                        <p className="text-sm">${service.price} -</p>
                        <p className="text-[0.7rem] md:text-xs">
                          {service.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col items-center gap-3 z-20 text-center pt-[3rem] md:pt-0">
              <h2 className="text-2xl font-bold mb-4">Choose a date</h2>
              <DatePicker
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={(date: Date) =>
                  setSelectedDate(date.toISOString().split("T")[0])
                }
                className="hover:cursor-pointer border-primary border-2 rounded-md py-2 text-center"
                placeholderText="Select a date"
              />
              <button
                onClick={handleDateSelect}
                className="mt-2 p-2 bg-primary text-white hover:bg-green-700"
              >
                Confirm Date
              </button>
            </div>
          )}
          {step === 5 && (
            <div className="text-center pt-[3rem] md:pt-0">
              <h2 className="text-2xl font-bold mb-4">Choose a time</h2>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3">
                {times.map((time) => (
                  <div className="hover:bg-primary hover:text-white rounded">
                    <div
                      key={time.id}
                      onClick={() => handleTimeSelect(time)}
                      className="p-4 border border-primary rounded-md cursor-pointer"
                    >
                      <p>{time.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex flex-col items-start justify-start mt-4 md:mt-0 md:ml-4 p-4 border-2 border-primary rounded-md w-full md:w-1/3 lg:w-1/4 gap-2 min-h-full ${
            step === 6 ? "md:self-center mt-[3rem]" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">
            <u>Your Booking:</u>
          </h2>
          {customerDetails.name && (
            <p>
              <b>Name:</b> {customerDetails.name}
            </p>
          )}
          {selectedBarber && (
            <p>
              <b>Barber:</b> {selectedBarber.name}
            </p>
          )}
          {selectedService && (
            <p>
              <b>Service:</b> {selectedService.name}
            </p>
          )}
          {selectedDate && (
            <p>
              <b>Date:</b> {selectedDate}
            </p>
          )}
          {selectedTime && (
            <p>
              <b>Time:</b> {selectedTime.time}
            </p>
          )}
          <p className="font-bold mt-auto flex gap-1">
            Total - {selectedService && <p>${selectedService.price}</p>}
          </p>
          {step === 6 && (
            <button
              onClick={handleConfirm}
              className="mt-4 p-2 bg-primary text-white hover:bg-green-700"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
