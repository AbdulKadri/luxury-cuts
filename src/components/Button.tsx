const Button = ({
  text = "Book Now",
  colorClass,
}: {
  text?: string;
  colorClass?: string;
}) => {
  return (
    <button className={`p-2 border border-white ${colorClass}`}>{text}</button>
  );
};

export default Button;
