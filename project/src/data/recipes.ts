export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  category: string;
  description: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Tuscan Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Dishes",
    description: "Rich and creamy pasta with sun-dried tomatoes, spinach, and Italian herbs."
  },
  {
    id: "2",
    title: "Grilled Salmon Bowl",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800",
    time: "25 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Healthy",
    description: "Fresh grilled salmon served with quinoa, avocado, and Asian-inspired dressing."
  },
  {
    id: "3",
    title: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800",
    time: "15 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Healthy",
    description: "Fresh Greek salad with cucumber, tomatoes, olives, and feta cheese."
  },
  {
    id: "4",
    title: "Blueberry Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800",
    time: "20 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Breakfast",
    description: "Fluffy pancakes loaded with fresh blueberries and maple syrup."
  },
  {
    id: "5",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800",
    time: "25 mins",
    servings: 2,
    difficulty: "Medium",
    category: "Desserts",
    description: "Warm chocolate cake with a gooey molten center."
  }
];