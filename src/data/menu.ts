export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  "Popular",
  "Fajitas Bowl (Rice)",
  "Burritos + Fries",
  "Quesadillas + Fries",
  "Tacos + Fries",
  "Chicken Nuggets",
  "Bowls (Rice or Potatoes)",
  "Steak & Chicken Dinners",
  "Sandwiches + Fries",
  "Pizza 12\"",
  "Seafood Combos",
  "Appetizers",
  "Whole Chicken Wings + Fries",
  "Boneless Wings + Fries",
  "Party Wings + Fries",
  "Combination Plate",
  "Loaded Fries / Nachos",
  "Salads",
  "Chicken Tenders + Fries"
];

export const MENU_ITEMS: MenuItem[] = [
  // Featured / Popular Items
  {
    id: "p1",
    name: "12\" Cheese Pizza",
    price: 12.99,
    description: "Classic 12\" cheese pizza with our signature sauce and premium mozzarella.",
    category: "Pizza 12\"",
    popular: true,
    image: "/assets/menu/12-cheese-pizza.avif"
  },
  {
    id: "p2",
    name: "10 Pc Whole Wings + Fries",
    price: 16.99,
    description: "10 pieces of our famous whole chicken wings, served with fresh-cut fries.",
    category: "Whole Chicken Wings + Fries",
    popular: true,
    image: "/assets/menu/10-pc-whole-wings-fries.avif"
  },
  {
    id: "p3",
    name: "Philly Cheesesteak + Fries",
    price: 10.99,
    description: "Thinly sliced steak with melted cheese and sautéed onions on a hoagie roll, served with fries.",
    category: "Sandwiches + Fries",
    popular: true,
    image: "/assets/menu/philly-cheesesteak-fries.avif"
  },
  {
    id: "p4",
    name: "Gyro + Fries",
    price: 11.99,
    description: "Classic gyro with lamb/beef, lettuce, tomato, and onion on pita bread, served with fries.",
    category: "Sandwiches + Fries",
    popular: true,
    image: "/assets/menu/gyro-fries.avif"
  },
  {
    id: "p5",
    name: "Tripe Sandwich + Fries",
    price: 10.99,
    description: "Traditional tripe sandwich served on fresh bread with fries.",
    category: "Sandwiches + Fries",
    popular: true,
    image: "/assets/menu/tripe-sandwich-fries.avif"
  },
  {
    id: "p6",
    name: "10 Pc Chicken Nuggets + Fries",
    price: 6.99,
    description: "Golden brown chicken nuggets served with a side of crispy fries.",
    category: "Chicken Nuggets",
    popular: true,
    image: "/assets/menu/10-pc-chicken-nuggets-fries.jpeg"
  },

  // Fajitas Bowl (Rice)
  {
    id: "f1",
    name: "Shrimp Fajita Bowl (Rice)",
    price: 12.99,
    category: "Fajitas Bowl (Rice)",
    image: "/assets/menu/shrimp-fajita-bowl-rice.avif"
  },

  // Burritos + Fries
  {
    id: "b1",
    name: "Chicken Burrito + Fries",
    price: 10.99,
    category: "Burritos + Fries",
    image: "/assets/menu/chicken-burrito-fries.avif"
  },

  // Quesadillas + Fries
  {
    id: "q1",
    name: "Chicken Quesadilla + Fries",
    price: 10.99,
    category: "Quesadillas + Fries",
    image: "/assets/menu/chicken-quesadilla-fries.avif"
  },

  // Steak & Chicken Dinners
  {
    id: "d1",
    name: "T-Bone Steak Dinner",
    price: 18.99,
    description: "Served with salad & fries.",
    category: "Steak & Chicken Dinners",
    image: "/assets/menu/t-bone-steak-dinner.avif"
  },
  {
    id: "d2",
    name: "Ribeye Steak Dinner",
    price: 19.99,
    description: "Served with salad & fries.",
    category: "Steak & Chicken Dinners",
    image: "/assets/menu/ribeye-steak-dinner.avif"
  },
  {
    id: "d3",
    name: "Grilled Chicken Breast Dinner",
    price: 14.99,
    description: "Served with salad & fries.",
    category: "Steak & Chicken Dinners",
    image: "/assets/menu/grilled-chicken-breast-dinner.avif"
  },

  // Seafood Combos
  {
    id: "s1",
    name: "2 Pc Catfish Fillet + Fries",
    price: 12.99,
    category: "Seafood Combos",
    image: "/assets/menu/2-pc-catfish-fillet-fries.avif"
  },
  {
    id: "s2",
    name: "Catfish Nuggets (Large) + Fries",
    price: 13.99,
    category: "Seafood Combos",
    image: "/assets/menu/catfish-nuggets-large-fries.avif"
  },

  // Tacos + Fries
  {
    id: "t1",
    name: "2 Chicken Tacos + Fries",
    price: 9.99,
    category: "Tacos + Fries",
    image: "/assets/menu/2-chicken-tacos-fries.avif"
  },

  // Wings
  {
    id: "w1",
    name: "12 Pc Boneless Wings + Fries",
    price: 14.99,
    category: "Boneless Wings + Fries",
    image: "/assets/menu/12-pc-boneless-wings-fries.avif"
  },
  {
    id: "w2",
    name: "12 Pc Party Wings + Fries",
    price: 15.99,
    category: "Party Wings + Fries",
    image: "/assets/menu/12-pc-party-wings-fries.avif"
  },

  // Pizza
  {
    id: "p9",
    name: "12\" Veggie Pizza",
    price: 14.99,
    category: "Pizza 12\"",
    image: "/assets/menu/12veggie-pizza.avif"
  },
  {
    id: "p10",
    name: "12\" 2-Topping Pizza",
    price: 15.99,
    category: "Pizza 12\"",
    image: "/assets/menu/12-2-topping-pizza.avif"
  },

  // Bowls
  {
    id: "bowl1",
    name: "Chicken Bowl (Rice or Potatoes)",
    price: 11.99,
    category: "Bowls (Rice or Potatoes)",
    image: "/assets/menu/chicken-bowl-rice-or-potatoes.avif"
  },

  // Appetizers
  {
    id: "app1",
    name: "Mozzarella Sticks",
    price: 6.99,
    category: "Appetizers",
    image: "/assets/menu/mozzarella-sticks.avif"
  },
  {
    id: "app2",
    name: "Onion Rings",
    price: 4.99,
    category: "Appetizers",
    image: "/assets/menu/onion-rings.avif"
  },
  {
    id: "app3",
    name: "Texas Toast",
    price: 2.99,
    category: "Appetizers",
    image: "/assets/menu/texas-toast.avif"
  },
  {
    id: "app4",
    name: "French Fries",
    price: 3.99,
    category: "Appetizers",
    image: "/assets/menu/french-fries.avif"
  },

  // Salads
  {
    id: "salad1",
    name: "Gyro Salad",
    price: 11.99,
    category: "Salads",
    image: "/assets/menu/gyro-salad.avif"
  },

  // Tenders
  {
    id: "tender1",
    name: "4 Pc Chicken Tenders + Fries",
    price: 9.99,
    category: "Chicken Tenders + Fries",
    image: "/assets/menu/4-pc-chicken-tenders-fries.avif"
  },

  // Loaded
  {
    id: "loaded1",
    name: "Loaded Mix Fries or Nachos",
    price: 12.99,
    category: "Loaded Fries / Nachos",
    image: "/assets/menu/loaded-mix-fries-or-nachos.avif"
  }
];
