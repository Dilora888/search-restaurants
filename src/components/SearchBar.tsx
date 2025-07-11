import { SearchIcon } from '@heroicons/react/outline'; // Импортируем иконку

interface SearchBarProps {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <input
        className="w-full min-w-md p-3 mt-2 rounded-lg bg-red-100 text-gray-600 placeholder-red-900 focus:outline-none focus:ring-2 focus:ring-red-900 pl-10"  // Добавляем отступ слева
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}  // обновляем запрос
        placeholder={placeholder}
      />
      <SearchIcon className="absolute left-3 top-8 transform -translate-y-1/2 text-кув-900 w-5 h-5" />
    </div>
  );
};
