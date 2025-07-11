// src/pages/RestaurantsPage.tsx
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import {SearchBar} from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const RestaurantsPage = () => {
  const { restaurants, handleRateChange, isLoading } = useRestaurants(); // Используем хук
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Фильтруем рестораны по названию
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-4">
      {/* Поле поиска */}
      <SearchBar placeholder="Search for restaurants" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <p>Loading...</p> // Отображаем "Loading..." при загрузке
      ) : (
        <div className="grid grid-cols-4 gap-8 mt-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              src={restaurant.src}
              rating={restaurant.rating || 0}
              stars={restaurant.stars} // Рейтинг звезд
              isLoading={isLoading} // Будет ли отображаться загрузка
              onRateChange={handleRateChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantsPage;
