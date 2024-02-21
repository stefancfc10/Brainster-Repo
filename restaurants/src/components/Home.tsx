import AllRestaurants from "./AllRestaurants";
import Cuisines from "./Cuisines";
import PopularRestaurants from "./PopularRestaurants";
import SurpriseRestaurant from "./SurpriseRestaurant";

const Home = () => {
  return (
    <>
    <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </>
  );
};

export default Home;
