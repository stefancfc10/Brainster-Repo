import { useRestaurants } from '../context/RestaurantContext';
import { useParams } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';


const CuisineDetail = () => {
    const {name} = useParams<{name: string}>()
    const {restaurants} = useRestaurants()


    const restaurantsByCuisine = restaurants.filter(r => r.restauranttype === name)

    return <div className='container'>
        <h1 className='text-center'>{name} Restaurants</h1>
        <div className="container justify-content-between d-flex flex-row flex-wrap" >
            
        {restaurantsByCuisine.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
        ))}
        </div>
    </div>
};

export default CuisineDetail;