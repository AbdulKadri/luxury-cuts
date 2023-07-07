import { Link } from "react-router-dom";

const Button = ({
  text = "Book Now",
  link = "/",
}: {
  text?: string;
  link?: string;
}) => {
  return (
    <button
      className={`py-1 px-2 border border-white bg-primary hover:bg-green-700  font-semibold`}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default Button;
