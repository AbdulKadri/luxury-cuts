import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = () => {
  return (
    <div className="relative bg-gray-500 my-5 p-5 rounded w-3/4 md:w-[23rem]">
      <h4 className="font-bold">Jack Crown</h4>
      <p className="text-gray-100 text-xs">2022-04-11</p>
      <div className="absolute top-5 right-5 w-[2.5rem] md:w-[3rem]">
        <img src="/Google-Original.svg" alt="Google Icon" />
      </div>
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <p className="mt-4 text-sm w-full md:w-[15rem] lg:w-[20rem]">
        Satisfaction guaranteed! Honestly the best work I have had in the YEG
        area. It’s hard to find someone who can do beards in the first place.
        Let alone someone who can shape it so it looks good tell my next stop
        in!
      </p>
    </div>
  );
};

export default ReviewCard;
