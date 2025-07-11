
const API_URL = 'http://localhost:3000';

export const fetchRestaurants = async () => {
  const response = await fetch(`${API_URL}/restaurants`); 
  return response.json();
};


export const updateRestaurantRating = async (id: number, newRating: number) => {
  await fetch(`${API_URL}/restaurants/${id}`, { 
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rating: newRating }),
  });
};
