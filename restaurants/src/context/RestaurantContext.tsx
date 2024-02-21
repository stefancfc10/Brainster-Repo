import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Restaurant from "../interfaces/Restaurants";

export const RestaurantContext = createContext<{
  restaurants: Restaurant[];
  favoriteRestaurants: Restaurant[];
  handleToggleFavoriteRestaurant: (
    restaurant: Restaurant,
    isFavorite: boolean
  ) => void;
  handleAddReview: (restaurant: Restaurant) => void;
}>({
  restaurants: [],
  favoriteRestaurants: [],
  handleToggleFavoriteRestaurant: () => {},
  handleAddReview: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const RestaurantProvider: FC<Props> = ({ children }) => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<Restaurant[]>(
    JSON.parse(localStorage.getItem("favoriteRestaurants") ?? "[]")
  );
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((data) => data.json())
      .then((response) => {
        setRestaurants(response);
      });
  }, []);

  const handleToggleFavoriteRestaurant = (
    restaurant: Restaurant,
    isFavorite: boolean
  ) => {
    if (isFavorite) {
      setFavoriteRestaurants((oldFavRest) => {
        const newFavRestState = oldFavRest.filter(
          (r: Restaurant) => r.id !== restaurant.id
        );
        localStorage.setItem(
          "favoriteRestaurants",
          JSON.stringify(newFavRestState)
        );
        return newFavRestState;
      });
      return;
    }
    const newFavRestState = [...favoriteRestaurants, restaurant];
    setFavoriteRestaurants(newFavRestState);
    localStorage.setItem(
      "favoriteRestaurants",
      JSON.stringify(newFavRestState)
    );
  };

  const handleAddReview = (restaurant: Restaurant) => {
    // Update restaurants
    const updatedRestaurants = [...restaurants];
    const index = updatedRestaurants.findIndex((r) => r.id === restaurant.id);
    if (index !== -1) {
      updatedRestaurants[index] = {
        ...updatedRestaurants[index],
        ...restaurant,
      };
      setRestaurants(updatedRestaurants);
    }
    // Update favorites
    const updatedFavorites = [...favoriteRestaurants];
    const favIndex = updatedFavorites.findIndex((r) => r.id === restaurant.id);
    if (favIndex !== -1) {
      updatedFavorites[favIndex] = { ...updatedFavorites[favIndex], ...restaurant };
      localStorage.setItem(
        "favoriteRestaurants",
        JSON.stringify(updatedFavorites)
      );
      setFavoriteRestaurants(updatedFavorites);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        favoriteRestaurants,
        handleToggleFavoriteRestaurant,
        handleAddReview
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurants = () => {
  const { restaurants, favoriteRestaurants, handleToggleFavoriteRestaurant, handleAddReview } =
    useContext(RestaurantContext);
  return { restaurants, favoriteRestaurants, handleToggleFavoriteRestaurant, handleAddReview };
};
