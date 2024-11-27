import React from 'react';
import { RecipeCard } from './RecipeCard';
import { recipes } from '../data/recipes';

export function FeaturedSection() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <section id="featured" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}