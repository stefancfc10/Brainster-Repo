import { useRestaurants } from '../context/RestaurantContext';
import RestaurantCard from './RestaurantCard';


const Favorites = () => {
    const {favoriteRestaurants} = useRestaurants()
    
    return <div>
        <h1 className='text-center mb-3'>Your Favorites Restaurants</h1>
        <div className='container restored'>

        {favoriteRestaurants.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
        ))}
        </div>


    </div>
};

export default Favorites;