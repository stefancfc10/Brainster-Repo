import { useParams } from "react-router-dom";
import { useRestaurants } from "../context/RestaurantContext";
import { ChangeEvent, useState } from "react";
import Restaurant from "../interfaces/Restaurants";

const RestaurantDetail = () => {
  const initialFormValues = { author: "", comment: "", stars: 1 };
  const [form, setForm] = useState<{
    author: string;
    comment: string;
    stars: number;
  }>(initialFormValues);
  const { restaurants, handleAddReview } = useRestaurants();
  const { id } = useParams<{ id: string }>();

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) return null;

  const handleInputChange = (e: ChangeEvent<any>) => {
    setForm((oldForm) => ({
      ...oldForm,
      [e.target.name]: e.target.value,
    }));
  };

  const disableSubmitButton = !form.author || !form.comment;

  const handleSubmitReview = async () => {
    try {
      const requestBody: Restaurant = {
        ...restaurant,
        reviews: restaurant.reviews + 1,
        reviewsList: [
          ...restaurant.reviewsList,
          {
            ...form,
            id: restaurant.reviewsList.length,
          },
        ],
      };
      const response = await fetch("http://localhost:5001/restaurants/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      setForm(initialFormValues);
      handleAddReview(requestBody);
      console.log("Data updated successfully");
    } catch (error: any) {
      console.error("Error updating data:", error.message);
    }
  };
  const avgRating = restaurant.reviewsList.reduce(
    (sum, review) => sum + Number(review.stars),
    0
  );
  return (
    <div className="container cuisinebox">
      <h1>{restaurant.businessname}</h1>

      <img src={restaurant.image} alt={restaurant.businessname} />

      <div className="card">
        <div className="card-body text-start bg-light">
          <h6>
            rating -
            {avgRating === 0 ? 0 : (avgRating / restaurant.reviews).toFixed(2)}
          </h6>
          <p>based on {restaurant.reviews} reviews </p>
          <h6> {restaurant.phone} </h6>
          <h6>{restaurant.email} </h6>
          <h6> {restaurant.address} </h6>
          <h6> {restaurant.parkinglot} </h6>
        </div>
      </div>
      <br />

      <h2>REVIEWS</h2>

      <div className="card">
        <div className="card-body text-start bg-light">
          {restaurant.reviewsList.map((r) => (
            <div key={r.id}>
              <p>{r.author}</p>
              <p>{r.comment}</p>
              <p>{r.stars}</p>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />

      <div className="mb-3 text-start">
        <label htmlFor="author" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={form.author}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 text-start">
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <input
          type="text"
          className="form-control"
          id="comment"
          name="comment"
          value={form.comment}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3 text-start ">
        <label htmlFor="stars">Stars</label>
        <br />
        <input 
        className="range"
          type="range"
          id="stars"
          name="stars"
          min="1"
          max="5"
          step="1"
          value={form.stars}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <button
        className="supriseme"
        disabled={disableSubmitButton}
        onClick={handleSubmitReview}
      >
        Leave a review
      </button>
    </div>
  );
};

export default RestaurantDetail;
