import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 bg-bgsecondary">
      <ReviewCard />
      <ReviewCard />
      <div className="hidden lg:block">
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
