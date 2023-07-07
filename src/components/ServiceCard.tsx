const ServiceCard = ({
  title,
  text,
  image,
  classes,
}: {
  title: string;
  text: string;
  image?: string;
  classes?: string;
}) => {
  return (
    <div
      className={`flex flex-col h-full justify-around items-center gap-4 p-4 text-center bg-primary text-white ${classes}`}
    >
      <h4 className="text-md font-bold text-xl">{title}</h4>
      <div>
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <p className="text-xs w-5/6 font-semibold">{text}</p>
    </div>
  );
};

export default ServiceCard;
