import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1920")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Discover Delicious Recipe Ideas
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Explore our collection of mouth-watering recipes from around the world
        </p>
        <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600"
          >
            <Search size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}