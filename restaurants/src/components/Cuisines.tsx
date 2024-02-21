import { useRestaurants } from '../context/RestaurantContext';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';


const Cuisines = () => {
    const {restaurants} = useRestaurants()
    const navigate = useNavigate(); 

    const uniqueCuisines = useMemo(() => Array.from(new Set(restaurants.map(r => r.restauranttype))), [restaurants]) 

    const handleCuisineClick = (cuisineName: string) => {
        navigate(`/cuisines/${cuisineName}`)
    }
    
    return (<div className='container cuisinebox'>
        <h1>Cuisines</h1>
        {uniqueCuisines.map(c => (
            <button className='cuisine' key={c} onClick={() => handleCuisineClick(c)}>{c}</button>
        ))}
    </div>)
};

export default Cuisines;