const ProductCard = ({ price, image }: { price: string; image: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
      <p className="text-center w-5/6 font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
        {price}
      </p>
      <img
        src={image}
        alt="Product Image"
        className="w-[20rem] h-[20rem] object-cover"
      />
    </div>
  );
};

export default ProductCard;
