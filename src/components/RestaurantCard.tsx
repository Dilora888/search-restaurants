interface RestaurantCardProps {
  id: string;
  title: string;
  src: string;
  stars: string;
  rating: number;
  isLoading: boolean; // Будет ли отображаться загрузка
  onRateChange: (id: string, newRating: number) => void;
}

const RestaurantCard = ({
  id,
  title,
  src,
  rating,
  stars,
  isLoading,
  onRateChange,
}: RestaurantCardProps) => {
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  const renderStars = () => {
    const filledStars = Array(rating).fill("★");
    const emptyStars = Array(5 - rating).fill("☆");
    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="pb-4 rounded-lg flex flex-col items-start">
      <img src={src} alt={title} className="w-full h-32 rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm text-red-900">{stars}</p>
      <div className="flex items-center gap-2 mt-2">
        {/* Отображаем звезды */}
        <span className="text-red-500">
          {renderStars().map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </span>
        <button
          className="text-sm text-blue-500 underline"
          onClick={() => onRateChange(id, Math.min(rating + 1, 5))}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
