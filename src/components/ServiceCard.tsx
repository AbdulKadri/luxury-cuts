const ServiceCard = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col md:w-3/4 h-full justify-around items-center gap-4 p-4 text-center bg-secondary text-white">
      <h4 className="text-md font-medium">{title}</h4>
      <div>
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <p className="text-xs w-5/6 font-semibold">{text}</p>
    </div>
  );
};

export default ServiceCard;
