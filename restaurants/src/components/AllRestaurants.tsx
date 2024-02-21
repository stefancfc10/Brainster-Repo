import { useRestaurants } from "../context/RestaurantContext";
import RestaurantCard from "./RestaurantCard";

const AllRestaurants = () => {
    const {restaurants} = useRestaurants();

    return (
        <div className="container">
        <h1>All Restaurants</h1>
        <div className="container justify-content-between d-flex flex-row flex-wrap">
        {restaurants.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
        ))}
        </div>
        
        </div>
       
    );
};

export default AllRestaurants;