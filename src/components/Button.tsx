const Button = ({ text = "Book Now" }: { text?: string }) => {
  return (
    <button
      className={`py-1 px-2 border border-white bg-secondary hover:bg-primary hover:text-yellow-200 hover:border-yellow-200`}
    >
      {text}
    </button>
  );
};

export default Button;
