import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate(); 
    const handleFavoriteClick = () => {
        navigate('/favorites')
    }

    return <div className='navbar container'>
        <h3>RESTAURANT</h3>
        <FontAwesomeIcon onClick={handleFavoriteClick} icon={faHeart} style={{ color: '#ff6247' }} size="2x" />
    </div>
};

export default Navbar;