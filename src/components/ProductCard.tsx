const ProductCard = ({
  price,
  image,
  classes,
}: {
  price: string;
  image: string;
  classes?: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
      <p className={`text-center font-semibold ${classes}`}>{price}</p>
      <img
        src={image}
        alt="Product Image"
        className="w-[20rem] h-[20rem] object-cover"
      />
    </div>
  );
};

export default ProductCard;
