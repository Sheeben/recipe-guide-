import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { CategorySection } from './components/CategorySection';
import { SearchResults } from './components/SearchResults';
import { recipes } from './data/recipes';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(recipes);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults(recipes);
      return;
    }

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase()) ||
      recipe.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        {searchQuery ? (
          <SearchResults recipes={searchResults} searchQuery={searchQuery} />
        ) : (
          <>
            <FeaturedSection />
            <CategorySection />
          </>
        )}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Culinary Inspirations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;