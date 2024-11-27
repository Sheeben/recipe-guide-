import React from 'react';
import { Recipe } from '../data/recipes';
import { RecipeCard } from './RecipeCard';

interface SearchResultsProps {
  recipes: Recipe[];
  searchQuery: string;
}

export function SearchResults({ recipes, searchQuery }: SearchResultsProps) {
  if (!searchQuery) return null;

  if (recipes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 text-lg">No recipes found for "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Search Results for "{searchQuery}"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}