import { useRestaurants } from "../context/RestaurantContext";
import { useMemo } from "react";
import RestaurantCard from "./RestaurantCard";

const PopularRestaurants = () => {
  const { restaurants } = useRestaurants();

  const sortedRestaurants = useMemo(() => restaurants.sort((a, b) => b.reviews - a.reviews).slice(0, 10), [restaurants]);

  return (
    <div className="container ">
      <h1 >Our most popular restaurants</h1>
      <div  className="container justify-content-between d-flex flex-row flex-wrap">

      {sortedRestaurants.map(r => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
