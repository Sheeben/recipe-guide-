import React from 'react';
import { CookingPot } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-emerald-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CookingPot size={32} />
          <h1 className="text-2xl font-bold">Culinary Inspirations</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#featured" className="hover:text-emerald-200 transition">Featured</a></li>
            <li><a href="#categories" className="hover:text-emerald-200 transition">Categories</a></li>
            <li><a href="#latest" className="hover:text-emerald-200 transition">Latest</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}