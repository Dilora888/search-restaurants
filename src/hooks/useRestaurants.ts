import { useState, useEffect } from "react";

interface Restaurant {
  id: string;
  title: string;
  src: string;
  stars: string;
  rating: number;
}

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.rooms);
        setIsLoading(false); 
      })
      .catch(() => setIsLoading(false)); 
  }, []);

  const handleRateChange = (id: string, newRating: number) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, rating: newRating } : restaurant
      )
    );
  };

  return { restaurants, handleRateChange, isLoading };
};

export default useRestaurants;
