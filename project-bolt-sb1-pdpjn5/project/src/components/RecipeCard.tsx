import React from 'react';
import { Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  description: string;
}

export function RecipeCard({ title, image, time, servings, difficulty, description }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{servings} servings</span>
          </div>
        </div>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}