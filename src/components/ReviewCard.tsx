import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = () => {
  return (
    <div className="relative bg-gray-500 m-3 p-3 rounded w-auto">
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
      <p className="mt-4 text-sm w-full">
        Satisfaction guaranteed! Honestly the best work I have had in the YEG
        area. It’s hard to find someone who can do beards in the first place.
        Let alone someone who can shape it so it looks good tell my next stop
        in!
      </p>
    </div>
  );
};

export default ReviewCard;
