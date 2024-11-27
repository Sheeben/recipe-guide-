import React from 'react';
import { Salad, Coffee, Pizza, Cake } from 'lucide-react';

export function CategorySection() {
  const categories = [
    { name: "Healthy", icon: Salad, color: "bg-green-100 text-green-600" },
    { name: "Breakfast", icon: Coffee, color: "bg-yellow-100 text-yellow-600" },
    { name: "Main Dishes", icon: Pizza, color: "bg-red-100 text-red-600" },
    { name: "Desserts", icon: Cake, color: "bg-pink-100 text-pink-600" }
  ];

  return (
    <section id="categories" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(({ name, icon: Icon, color }) => (
            <div key={name} className="text-center">
              <div className={`mx-auto w-16 h-16 rounded-full ${color} flex items-center justify-center mb-3`}>
                <Icon size={32} />
              </div>
              <h3 className="font-semibold text-gray-700">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}