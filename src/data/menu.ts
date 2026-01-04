import type { MenuCategory, MenuItem } from "./types";

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "breakfast_eggs", title: "Breakfast — Eggs", subtitle: "Fresh starts, done right." },
  { id: "bagels_croissants", title: "Bagels & Croissants", subtitle: "Buttery layers, toasted edges." },
  { id: "breakfast_bowls", title: "Breakfast Bowls", subtitle: "Protein-forward, clean comfort." },
  { id: "soups", title: "Soups", subtitle: "Warm, creamy, and quietly bold." },
  { id: "salads", title: "Salads", subtitle: "Crisp, bright, and balanced." },
  { id: "sandwiches_burgers", title: "Sandwiches & Burgers", subtitle: "Sourdough, melts, and signatures." },
  { id: "small_plates", title: "Small Plates", subtitle: "To share (or not)." },
  { id: "bowls", title: "Bowls", subtitle: "Rice bowls with a modern edge." },
  { id: "main_entrees", title: "Main Entrées", subtitle: "Comfort dishes with precision." },
  { id: "pizza", title: "Hand‑Tossed Pizza", subtitle: "Thin, crisp, and generously topped." },
  { id: "pasta", title: "Pasta", subtitle: "Creamy classics and bright lemon notes." },
  { id: "sweet", title: "Sweet Indulgence", subtitle: "French toast, waffles, and warm pudding." },
  { id: "chef_special", title: "Chef’s Special Menu", subtitle: "Limited creations, signature finishes." },
  { id: "coffee_hot", title: "Hot Coffee", subtitle: "Espresso classics and house specials." },
  { id: "coffee_cold", title: "Iced Coffee", subtitle: "Cold brews and iced lattes." },
  { id: "smoothies", title: "Smoothies & Shakes", subtitle: "Fruit, yogurt, and protein blends." },
  { id: "juices", title: "Juices & Others" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast — Eggs
  {
    id: "florentine-omelette",
    categoryId: "breakfast_eggs",
    name: "Florentine Omelette",
    description: "Three eggs stuffed with mushrooms, spinach, caramelized onions & cheddar cheese.",
    price: { currency: "PKR", amount: 1395 },
    tags: ["Popular"],
  },
  {
    id: "spanish-omelette",
    categoryId: "breakfast_eggs",
    name: "Spanish Omelette",
    description: "Three eggs with sundried tomatoes, onions, jalapeños and cheddar cheese.",
    price: { currency: "PKR", amount: 1255 },
  },
  {
    id: "steak-eggs",
    categoryId: "breakfast_eggs",
    name: "Premium Under‑Cut Steak & Eggs",
    description: "Undercut steaks with two eggs, patatas bravas and house mushroom sauce.",
    price: { currency: "PKR", amount: 2355 },
    tags: ["Signature"],
  },
  {
    id: "country-fried-breakfast",
    categoryId: "breakfast_eggs",
    name: "Country Fried Breakfast",
    description: "Lightly breaded pan‑seared chicken, secret sauce, two eggs, and baked beans.",
    price: { currency: "PKR", amount: 1755 },
  },
  {
    id: "classic-eggs-benedict",
    categoryId: "breakfast_eggs",
    name: "Classic Egg Benedict (Regular / Turkey)",
    description: "Two English muffins, poached eggs, in‑house hollandaise. Add turkey bacon if you please.",
    price: { currency: "PKR", amount: 1095 },
    note: "Turkey option priced higher on the printed menu.",
  },
  {
    id: "sesame-breakfast-platter",
    categoryId: "breakfast_eggs",
    name: "Sesame Special Breakfast Platter",
    description:
      "Protein‑packed English breakfast: red bean salsa on fluffy scrambled eggs, sausages, turkey bacon and hash browns.",
    price: { currency: "PKR", amount: 2495 },
    tags: ["Signature"],
  },

  // Bagels & Croissants
  {
    id: "cream-cheese-schmear-bagel",
    categoryId: "bagels_croissants",
    name: "Cream Cheese Schmear Bagel (Regular / Turkey)",
    description:
      "Wholewheat bagel with seeds, layered with in‑house herbed cream cheese. Add turkey if you please.",
    price: { currency: "PKR", amount: 1015 },
  },
  {
    id: "chicken-bagel-sandwich",
    categoryId: "bagels_croissants",
    name: "Chicken Bagel Sandwich",
    description: "Juicy chicken patty & fried egg in a wholewheat bagel with garlic mayo.",
    price: { currency: "PKR", amount: 1755 },
    tags: ["Popular"],
  },
  {
    id: "hollandaise-sunrise-bagel",
    categoryId: "bagels_croissants",
    name: "Hollandaise Sunrise Bagel",
    description:
      "Toasted bagel topped with fluffy egg, cheddar & mozzarella, creamy hollandaise, chili flakes & parsley.",
    price: { currency: "PKR", amount: 1295 },
  },
  {
    id: "burrata-pesto-chicken",
    categoryId: "bagels_croissants",
    name: "Burrata Crispy Pesto Chicken",
    description:
      "Flaky croissant stuffed with tender chicken, burrata and cherry tomatoes, topped with a golden parmesan crust.",
    price: { currency: "PKR", amount: 1995 },
    tags: ["Signature"],
  },
  {
    id: "croissant-benedict-delight",
    categoryId: "bagels_croissants",
    name: "Croissant Benedict Delight",
    description: "Buttery croissant layered with poached eggs, chicken slices, and creamy hollandaise.",
    price: { currency: "PKR", amount: 1495 },
  },

  // Breakfast Bowls
  {
    id: "protein-smoothie-bowl",
    categoryId: "breakfast_bowls",
    name: "Protein Smoothie Bowl",
    description: "Greek yogurt base topped with fresh fruits, nuts, seeds, granola and whey protein.",
    price: { currency: "PKR", amount: 1595 },
    tags: ["Popular"],
  },
  {
    id: "cranberry-honey-splash-bowl",
    categoryId: "breakfast_bowls",
    name: "Cranberry Honey Splash Smoothie Bowl",
    description: "Creamy yogurt, honey, oats, mixed fruits, basil seeds, topped with dry cranberries.",
    price: { currency: "PKR", amount: 1195 },
  },
  {
    id: "lean-green-bowl",
    categoryId: "breakfast_bowls",
    name: "The Lean Green Bowl",
    description:
      "Silk‑soft eggs with roasted garlic, house cherry tomatoes, cream cheese and chicken sausage.",
    price: { currency: "PKR", amount: 1155 },
    tags: ["New"],
  },

  // Soups
  {
    id: "chicken-chilli-bean-soup",
    categoryId: "soups",
    name: "Chicken Chilli Bean Soup",
    description: "Spicy creamy bean soup with corn, tomatoes, red beans and chicken. Served with crackers.",
    price: { currency: "PKR", amount: 855 },
  },
  {
    id: "roasted-garlic-mushroom-soup",
    categoryId: "soups",
    name: "Roasted Garlic & Mushroom Soup",
    description: "Sesame’s favourite: mushrooms, cream and indulgent roasted garlic.",
    price: { currency: "PKR", amount: 795 },
    tags: ["Popular"],
  },
  {
    id: "egg-noodle-soup",
    categoryId: "soups",
    name: "Egg & Noodle Soup",
    description: "Soft noodles and silky eggs in a light, flavorful broth.",
    price: { currency: "PKR", amount: 895 },
  },

  // Salads
  {
    id: "corn-romaine-salad",
    categoryId: "salads",
    name: "Creamy Corn & Romaine Salad",
    description: "Crisp romaine with sweet corn and cherry tomatoes in a creamy Greek yogurt dressing.",
    price: { currency: "PKR", amount: 995 },
    tags: ["Veg"],
  },
  {
    id: "sesame-caesar-salad",
    categoryId: "salads",
    name: "Sesame Caesar Salad",
    description: "A Greek‑meets‑Caesar amalgamation in a special creamy dressing.",
    price: { currency: "PKR", amount: 1295 },
    tags: ["Popular"],
  },
  {
    id: "crispy-rice-chicken-salad",
    categoryId: "salads",
    name: "Crispy Rice Chicken Salad",
    description: "Cucumber, cherry tomatoes, crispy rice, chicken and tahini Greek yogurt dressing.",
    price: { currency: "PKR", amount: 1155 },
  },

  // Sandwiches & Burgers
  {
    id: "mozzarella-beef-sandwich",
    categoryId: "sandwiches_burgers",
    name: "Fresh Mozzarella & Beef Sandwich",
    description: "Fresh mozzarella meets succulent beef on toasted sourdough.",
    price: { currency: "PKR", amount: 2155 },
  },
  {
    id: "sesame-club-sandwich",
    categoryId: "sandwiches_burgers",
    name: "Sesame Club Sandwich",
    description: "Smoked turkey, swiss cheese, grilled chicken and lettuce.",
    price: { currency: "PKR", amount: 1695 },
    tags: ["Popular"],
  },
  {
    id: "korean-fried-chicken-burger",
    categoryId: "sandwiches_burgers",
    name: "Korean Fried Chicken Burger",
    description: "Crispy chicken with garlic & chili paste, tangy vinegar cucumbers, buttery bun.",
    price: { currency: "PKR", amount: 1655 },
    tags: ["New"],
  },
  {
    id: "sesame-special-smash",
    categoryId: "sandwiches_burgers",
    name: "Sesame Special Smash",
    description: "Juicy smashed beef, melted cheese, signature sweet chili sauce on brioche.",
    price: { currency: "PKR", amount: 1715 },
    tags: ["Signature"],
  },
  {
    id: "signature-fish-fillet-burger",
    categoryId: "sandwiches_burgers",
    name: "Signature Fish Fillet Burger",
    description: "Crispy fish fillet paired with Sesame’s special tartar sauce.",
    price: { currency: "PKR", amount: 1695 },
  },

  // Small Plates
  {
    id: "sesame-honey-wings",
    categoryId: "small_plates",
    name: "Sesame Honey Wings",
    description: "Crispy wings dipped in chilli honey sauce for sweet & spicy balance.",
    price: { currency: "PKR", amount: 1755 },
    tags: ["Popular"],
  },
  {
    id: "parmesan-fries",
    categoryId: "small_plates",
    name: "Parmesan Fries",
    description: "House fries drizzled with parmesan & herbs.",
    price: { currency: "PKR", amount: 895 },
    tags: ["Veg"],
  },
  {
    id: "prawn-avocado-cheese-dip",
    categoryId: "small_plates",
    name: "Prawn & Avocado Cheese Dip",
    description: "Succulent prawns in a rich bechamel cheese sauce, served with crostini bread.",
    price: { currency: "PKR", amount: 2495 },
    tags: ["Signature"],
  },

  // Bowls
  {
    id: "lebanese-chicken-rice-bowl",
    categoryId: "bowls",
    name: "Lebanese Style Chicken & Rice Bowl",
    description: "Middle‑eastern seasoned chicken & rice bowl with salad & tahini‑gurt sauce.",
    price: { currency: "PKR", amount: 1715 },
    tags: ["Popular"],
  },
  {
    id: "teriyaki-chicken-bowl",
    categoryId: "bowls",
    name: "Teriyaki Chicken Bowl",
    description: "Japanese‑style teriyaki chicken with broccoli, carrots, beans & sticky rice.",
    price: { currency: "PKR", amount: 1495 },
  },
  {
    id: "snapper-citrus-bowl",
    categoryId: "bowls",
    name: "Snapper Citrus Bowl",
    description: "Tender red snapper, fragrant rice, fresh veggies, and a zesty lemon twist.",
    price: { currency: "PKR", amount: 1655 },
  },

  // Main Entrées
  {
    id: "chicken-paillard",
    categoryId: "main_entrees",
    name: "Chicken Paillard",
    description: "Succulent chicken with caesar dressing, mashed potatoes & cherry tomato goodness.",
    price: { currency: "PKR", amount: 1895 },
  },
  {
    id: "mozzarella-stuffed-chicken",
    categoryId: "main_entrees",
    name: "Mozzarella Stuffed Chicken",
    description: "Juicy chicken breast with lemon caper sauce and gooey mozzarella.",
    price: { currency: "PKR", amount: 2395 },
    tags: ["Popular"],
  },
  {
    id: "sesame-signature-beef-steak",
    categoryId: "main_entrees",
    name: "Sesame Signature Beef Steak",
    description: "Undercut beef in garlic butter and white pepper, with mash & grilled vegetables.",
    price: { currency: "PKR", amount: 3095 },
    tags: ["Signature"],
  },

  // Pizza
  {
    id: "pepperoni-pizza",
    categoryId: "pizza",
    name: "Pepperoni",
    description: "Zesty tomato sauce, mozzarella and generous pepperoni slices on a crisp thin crust.",
    price: { currency: "PKR", amount: 1995 },
    tags: ["Popular"],
  },
  {
    id: "neapolitan-pizza",
    categoryId: "pizza",
    name: "Neapolitan",
    description: "Marinara sauce, creamy mozzarella and aromatic basil baked on a thin chewy crust.",
    price: { currency: "PKR", amount: 1955 },
    tags: ["Veg"],
  },
  {
    id: "carne-amante-pizza",
    categoryId: "pizza",
    name: "Carne‑Amante",
    description: "Turkey bacon, italian sausages, meatballs and fresh mushrooms.",
    price: { currency: "PKR", amount: 2195 },
  },

  // Pasta
  {
    id: "prawn-linguine",
    categoryId: "pasta",
    name: "Prawn Linguine",
    description: "Linguine with zesty lemon cream sauce, fresh basil and parmesan.",
    price: { currency: "PKR", amount: 2115 },
  },
  {
    id: "fettuccine-alfredo",
    categoryId: "pasta",
    name: "Fettuccine Alfredo",
    description: "Fettuccine tossed in a rich, creamy garlic parmesan cheese sauce.",
    price: { currency: "PKR", amount: 1995 },
    tags: ["Popular"],
  },
  {
    id: "pesto-aglio-olio",
    categoryId: "pasta",
    name: "Pesto Aglio Olio Spaghetti",
    description: "Garlicky aglio olio style with pesto and tender chicken.",
    price: { currency: "PKR", amount: 1355 },
  },

  // Sweet
  {
    id: "classic-waffles",
    categoryId: "sweet",
    name: "Classic Waffles",
    description: "Served with ice cream, Nutella, maple syrup and fresh seasonal fruits.",
    price: { currency: "PKR", amount: 1815 },
    tags: ["Popular"],
  },
  {
    id: "sesame-crunchy-french-toast",
    categoryId: "sweet",
    name: "Sesame Classic Crunchy French Toast",
    description: "French toast stuffed with oozy Nutella. Served with seasonal fruits.",
    price: { currency: "PKR", amount: 1095 },
  },
  {
    id: "classic-bread-butter-pudding",
    categoryId: "sweet",
    name: "Classic Bread & Butter Pudding",
    description: "Served warm with vanilla ice cream.",
    price: { currency: "PKR", amount: 1155 },
  },

  // Chef special
  {
    id: "bacon-balsamic-burger",
    categoryId: "chef_special",
    name: "Bacon Balsamic Crunch Beef Burger",
    description: "Turkey bacon, spicy jalapeños, caramelized onions, melted cheese, double beef patty.",
    price: { currency: "PKR", amount: 1955 },
    tags: ["New"],
  },
  {
    id: "house-special-shakshuka",
    categoryId: "chef_special",
    name: "House Special Shakshuka",
    description:
      "Eggs poached in house tomato sauce with olive oil, peppers, onions, beans and garlic. Topped with feta.",
    price: { currency: "PKR", amount: 1555 },
    tags: ["Signature"],
  },
  {
    id: "salmon-sunrise-plate",
    categoryId: "chef_special",
    name: "Salmon Sunrise Plate",
    description: "Salmon with creamy avocado and classic egg benedict on crispy sourdough.",
    price: { currency: "PKR", amount: 2495 },
  },

  // Hot coffee
  { id: "americano", categoryId: "coffee_hot", name: "Americano", price: { currency: "PKR", amount: 455 } },
  { id: "cappuccino", categoryId: "coffee_hot", name: "Cappuccino", price: { currency: "PKR", amount: 555 } },
  { id: "cafe-latte", categoryId: "coffee_hot", name: "Caffè Latte", price: { currency: "PKR", amount: 725 } },
  { id: "spanish-latte-hot", categoryId: "coffee_hot", name: "Spanish Latte", price: { currency: "PKR", amount: 755 } },
  { id: "honey-latte-hot", categoryId: "coffee_hot", name: "Honey Latte", price: { currency: "PKR", amount: 795 } },
  {
    id: "tiramisu-latte-hot",
    categoryId: "coffee_hot",
    name: "Sesame Special Tiramisu Latte",
    price: { currency: "PKR", amount: 1095 },
    tags: ["Signature"],
  },

  // Iced coffee
  { id: "iced-latte", categoryId: "coffee_cold", name: "Iced Latte", price: { currency: "PKR", amount: 795 } },
  { id: "iced-spanish-latte", categoryId: "coffee_cold", name: "Spanish Latte (Iced)", price: { currency: "PKR", amount: 795 } },
  { id: "coconut-iced-latte", categoryId: "coffee_cold", name: "Coconut Iced Latte", price: { currency: "PKR", amount: 1055 } },
  { id: "pistachio-latte", categoryId: "coffee_cold", name: "Pistachio Latte", price: { currency: "PKR", amount: 1295 } },

  // Smoothies & shakes
  { id: "keep-it-simple", categoryId: "smoothies", name: "Keep It Simple", description: "Banana, dates, milk, whey protein.", price: { currency: "PKR", amount: 1295 } },
  { id: "going-nuts", categoryId: "smoothies", name: "Going Nuts", description: "Banana, dates, almonds, peanut butter, milk & whey protein.", price: { currency: "PKR", amount: 1555 } },
  { id: "flirty-fruity", categoryId: "smoothies", name: "Flirty Fruity", description: "Peach, banana, strawberry, pineapple, yogurt.", price: { currency: "PKR", amount: 1255 } },

  // Juices & others
  { id: "iced-tea", categoryId: "juices", name: "Iced Tea (Peach / Lemon)", price: { currency: "PKR", amount: 595 } },
  { id: "mint-margarita", categoryId: "juices", name: "Mint Margarita", price: { currency: "PKR", amount: 595 } },
  { id: "lemonade", categoryId: "juices", name: "Lemonade", price: { currency: "PKR", amount: 495 } },
];
