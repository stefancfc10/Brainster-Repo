import { useRestaurants } from '../context/RestaurantContext';
import { useNavigate } from 'react-router-dom';


const SurpriseRestaurant = () => {
    const {restaurants} = useRestaurants()
    const navigate = useNavigate();

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSurpriseClick = () => {
        const restaurantIds = restaurants.map(r => r.id)
        const randomId = getRandomNumber(0, restaurantIds.length)
        navigate(`/restaurants/${restaurants[randomId].id}`)
    }
    return (<div className='container'>
        <h1>DON'T KNOW WHAT TO EAT?</h1>
        <button className='supriseme' onClick={handleSurpriseClick}>Surprise me!</button>
    </div>)
};

export default SurpriseRestaurant;