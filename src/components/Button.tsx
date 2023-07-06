const Button = ({ text = "Book Now" }: { text?: string }) => {
  return (
    <button
      className={`py-1 px-2 border border-white bg-primary hover:bg-primary hover:text-white hover:border-white`}
    >
      {text}
    </button>
  );
};

export default Button;
