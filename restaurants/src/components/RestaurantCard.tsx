import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";

import Restaurant from "../interfaces/Restaurants";
import { FC, useMemo } from "react";
import { useRestaurants } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { favoriteRestaurants, handleToggleFavoriteRestaurant } =
    useRestaurants();

  const isFavorite = useMemo(
    () =>
      favoriteRestaurants.some((r: Restaurant) => r.id === props.restaurant.id),
    [favoriteRestaurants, props.restaurant.id]
  );

  const avgRating = props.restaurant.reviewsList.reduce(
    (sum, review) => sum + Number(review.stars),
    0
  );

  const handleToggleFavorite = (e: any) => {
    e.stopPropagation();
    handleToggleFavoriteRestaurant(props.restaurant, isFavorite);
  };

  const handleRestaurantClick = () => {
    navigate(`/restaurants/${props.restaurant.id}`);
  };
  return (
    <div onClick={handleRestaurantClick}> 
      <div className="card position-relative mb-3 bg-light">
      <img className="picture" src={props.restaurant.image} alt={props.restaurant.businessname} />
  <div className="card-body">
    <h5 className="card-title">{props.restaurant.businessname}</h5>
    <p className="card-text">
    <p className="card-text custom-orange-text">{props.restaurant.restauranttype}</p>
    <br />
    Rating:{" "}
       {avgRating === 0
           ? 0
          : (avgRating / props.restaurant.reviews).toFixed(2)}
    </p>
    <p>based on {props.restaurant.reviews} reviews </p>

  </div>

  <FontAwesomeIcon 
  className="icon-container-inside "
           onClick={handleToggleFavorite}
         icon={isFavorite ? heartSolid : heartRegular}
           style={{ color: "#ff6247" }}
          size="2x"></FontAwesomeIcon>
</div>
    </div>
  );
};

export default RestaurantCard;
