/* Edit menuItems to change dishes. This plain data layer can later be replaced by a Supabase fetch. */
const menuItems = [
  {
    id: 1,
    name: "Lamb Sizzling",
    category: "Chef Specialities",
    price: 12.90,
    desc: "Lamb cooked with onions, green peppers garlic and ginger, fresh tomatoes. Patato chopped with indian gerbs & spices in a olive oil & soy sauce slightly spicy",
    image: "Images/Lamb Sizzling.png",
    badge: "Best Seller",
    spicy: true,
    veg: false,
    glutenFree: true,
    featured: true,
  },
  {
    id: 2,
    name: "Garlic Chilli Chicken",
    category: "Chef Specialities",
    price: 9.95,
    desc: "Barbequed Chicken cooked with chopped garlic capsicums onions and fresh green chilli in medium/hot curry sauce.",
    image:
      "Images/Garlic-Chili-Chicken.jpeg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 3,
    name: "Tamil Black Papper Curry - Chicken",
    category: "Chef Specialities",
    price: 9.95,
    desc: "Charcoal-kissed chicken, mint yogurt and salad.",
    image:
      "Images/Tamil-Curry.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 4,
    name: "Naga-Chicken",
    category: "Chef Specialities",
    price: 9.95,
    desc: "The Flavour of Bengal's Naga Chillies (Hot & Spicy).",
    image:
      "Images/Naga-Chicken.jpg",
    badge: "Best Seller",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 5,
    name: "Mango Lassi",
    category: "Drinks",
    price: 5.5,
    desc: "Creamy chilled yogurt with ripe mango.",
    image:
      "Images/Mango-Lassi.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: true,
    featured: false,
  },
  {
    id: 6,
    name: "Masala Omelette",
    category: "Breakfast",
    price: 7.2,
    desc: "Fluffy eggs with onion, chilli and fresh coriander.",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=700&q=80",
    badge: "Popular",
    spicy: true,
    veg: false,
  },
  {
    id: 7,
    name: "Meat Samosa",
    category: "Starters",
    price: 4.5,
    desc: "Minced and Peas with herbs and spices in a deep fried.",
    image:"Images/Meat-Samosa.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 8,
    name: "Veg Samosa",
    category: "Starters",
    price: 4.50,
    desc: "Minced and Peas with herbs and spices in a deep fried.",
    image:"Images/Veg-Samosa.jpg",
    badge: "Popular",
    spicy: true,
    veg: true,
  },
  {
    id: 9,
    name: "Mustard Hilsa",
    category: "Seafood",
    price: 19.5,
    desc: "Iconic hilsa in silky mustard and green chilli.",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=700&q=80",
    badge: "Best Seller",
    spicy: true,
    veg: false,
  },
  {
    id: 10,
    name: "Dhaka Beef Bhuna",
    category: "Beef",
    price: 14.9,
    desc: "Slow braised beef with bold roasted spices.",
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=80",
    badge: "Popular",
    spicy: true,
    veg: false,
  },
  {
    id: 11,
    name: "Tikka Lamb",
    category: "Tandoori Specialities",
    price: 12.95,
    desc: "Spcied fillet of meat marinated in a Tikka Yogurt paste and served on a bed onions.",
    image:
      "Images/Tikka-Lamb.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 12,
    name: "Butter Chicken",
    category: "Chicken",
    price: 14.2,
    desc: "Tender chicken in a velvety tomato cashew sauce.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
    badge: "Best Seller",
    spicy: false,
    veg: false,
  },
  {
    id: 13,
    name: "Tikka Chicken",
    category: "Tandoori Specialities",
    price: 9.95,
    desc: "Spcied fillet of meat marinated in a Tikka Yogurt paste and served on a bed onions.",
    image:
      "Images/Tikka-Chicken.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 14,
    name: "Bengal Iced Tea",
    category: "Drinks",
    price: 4.5,
    desc: "Black tea, citrus, basil and cane sugar.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    spicy: false,
    veg: true,
  },
  {
    id: 15,
    name: "Mishti Doi",
    category: "Desserts",
    price: 5.9,
    desc: "Traditional caramelized sweet yogurt.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    badge: "Popular",
    spicy: false,
    veg: true,
  },
  {
    id: 16,
    name: "Coconut Pudding",
    category: "Desserts",
    price: 6.5,
    desc: "Silky coconut cream with toasted pistachio.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80",
    badge: "New",
    spicy: false,
    veg: true,
  },
  {
    id: 17,
    name: "Plain Papadum",
    category: "Appetisers",
    price: 1.00,
    desc: "",
    image:"Images/Plain Papadum.png",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: true,
  },
  {
  id: 18,
    name: "Spicy Papadum",
    category: "Appetisers",
    price: 1.00,
    desc: "",
    image:"Images/Spicy-Papadum.png",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: true,
  },
  { 
    id: 19,
    name: "Onion Chutney",
    category: "Appetisers",
    price: 1.50,
    desc: "",
    image:"Images/Onion-Chutney.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 20,
    name: "Mango Chutney",
    category: "Appetisers",
    price: 1.50,
    desc: "",
    image:"Images/Mango-Chutney.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 21,
    name: "Mint Sauce",
    category: "Appetisers",
    price: 1.50,
    desc: "",
    image:"Images/Mint-Sauce.jpg",
    badge: "",
    spicy: false,
    veg: true,
    glutenFree: false,
  },
  { 
    id: 22,
    name: "Red Sauce",
    category: "Appetisers",
    price: 1.50,
    desc: "",
    image:"Images/Red-Sauce.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
 { 
    id: 23,
    name: "Onion Bhaji",
    category: "Starters",
    price: 4.50,
    desc: "Sliced Onion Mix with herbs, Spices and gram flour deep fried.",
    image:"Images/Onion-Bhaji.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 24,
    name: "Chicken Samosa",
    category: "Starters",
    price: 4.50,
    desc: "Minced and Peas with herbs and spices in a deep fried.",
    image:"Images/Chicken-Samosa.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 25,
    name: "Chicken Pakora",
    category: "Starters",
    price: 4.95,
    desc: "Tender chicken pieces in butter deep fried.",
    image:"Images/Chicken-Pakora.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 26,
    name: "Alo Chana Chat",
    category: "Starters",
    price: 5.95,
    desc: "With onions peppers tamarind sauce and ginger.",
    image:"Images/Alo-Chana-Chat.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 27,
    name: "Delhi Chicken Chat",
    category: "Starters",
    price: 6.50,
    desc: "Chooped Chicken with onions, peppers, tamarinds sauce on fried bread.",
    image:"Images/Alo-Chana-Chat.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
{ 
    id: 28,
    name: "Fish Amritsari - Hot & Spicy",
    category: "Starters",
    price: 7.95,
    desc: "Fish filet marinated and deep fried Filete.",
    image:"Images/Fish-Amritsari.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
{ 
    id: 29,
    name: "Prawn Pakora",
    category: "Starters",
    price: 7.50,
    desc: "Prawn dipped in spices chickpeas flour and deep fried.",
    image:"Images/Prawn-Pakora.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
{ 
    id: 30,
    name: "Fish Pakora",
    category: "Starters",
    price: 7.50,
    desc: "Fish dipped in spices chickpeas flour and deep fried.",
    image:"Images/Fish-Pakora.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 31,
    name: "Assorted Platter- 2 Persons",
    category: "Starters",
    price: 11.95,
    desc: "A Slecton of Meet Samosa, Onion, Bhaji, Chicken Pakora and Chicken Tikka.",
    image:"Images/Assorted-Platter.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
  {
    id: 32,
    name: "Assorted Platter- 2 Persons",
    category: "Starters",
    price: 11.95,
    desc: "A Slecton of Meet Samosa, Onion, Bhaji, Chicken Pakora and Chicken Tikka.",
    image:"Images/Assorted-Platter.jpg",
    badge: "",
    spicy: true,
    veg: false,
    glutenFree: false,
  },
   {
    id: 33,
    name: "Tandoori Chicken",
    category: "Tandoori Specialities",
    price: 9.95,
    desc: "Spcied fillet of meat marinated in a Tikka Yogurt paste and served on a bed onions.",
    image:
      "Images/Tandoori-Chicken.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
   {
    id: 34,
    name: "Chicken Tikka Shahslik",
    category: "Tandoori Specialities",
    price: 10.95,
    desc: "Chicken marinated with selected herbs and spices barbecued in tandoor.",
    image:
      "Images/Chicken-Tikka-Shahslik.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
   {
    id: 35,
    name: "Chicken and Cheese Tikka",
    category: "Tandoori Specialities",
    price: 8.95,
    desc: "Chicken marinated in a tikka paste and served with cheese on a bed of onions.",
    image:
      "Images/Chicken-Cheese-Tikka.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
   {
    id: 36,
    name: "Chicken Mind Kebab",
    category: "Tandoori Specialities",
    price: 9.95,
    desc: "Chicken marinated in garlic, ginger, yougurt and mint and cooked in clay oven.",
    image:
      "Images/Chicken-Mint-Kebab.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 37,
    name: "Chicken Tikka Salad",
    category: "Tandoori Specialities",
    price: 7.95,
    desc: "",
    image:
      "Images/Chicken-Tikka-Salad.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 38,
    name: "Tandoori Salamon",
    category: "Tandoori Specialities",
    price: 17.95,
    desc: "Tandoori Salmon marinated in a Tandoori Masala Paste & Special Chef Spicy, serveed on bed of papers & onions.",
    image:
      "Images/Chicken-Mint-Kebab.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
 {
    id: 39,
    name: "Bay of Bengal Mixed Tandoori",
    category: "Tandoori Specialities",
    price: 19.95,
    desc: "Tandoori chicken , chicken tikka, lamb tikka, seekh kebab and king prawns.",
    image:
      "Images/Mixed-Tandoori.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 40,
    name: "King Prawn Tandoori",
    category: "Tandoori Specialities",
    price: 19.95,
    desc: "Peeled king prawns mariinated in a Tandoori Masala Paste served on a bed  of onions.",
    image:
      "Images/Prawn-Tandoori.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 41,
    name: "Seekh Kebab",
    category: "Tandoori Specialities",
    price: 8.95,
    desc: "Freshly minced leg of lamb mixed with onions fine herbs annd spices & grilled in Tandoori served on a bed of onions.",
    image:
      "Images/Seeekh-Kebab.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 42,
    name: "Sami Kebab",
    category: "Tandoori Specialities",
    price: 8.95,
    desc: "",
    image:
      "Images/Sami-Kebab.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 43,
    name: "Mixed Kebab",
    category: "Tandoori Specialities",
    price: 11.95,
    desc: "Lamb Tikka , Sheekh Kebab, Chicken Tikka, Onion Bhaji.",
    image:
      "Images/Mixed-Kebab.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 44,
    name: "Sag Paneer",
    category: "Vegetables Dishes",
    price: 7.95,
    desc: "Fresh spinach with cottage cheese in a creany sauce.",
    image:
      "Images/Sag-Paneer.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 45,
    name: "Sag Bhaji",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Lightly spiced fresh spanich with garlic.",
    image:
      "Images/Sag-Bhaji.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 46,
    name: "Sag Alo",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Fresh spinach with spiced potatoes.",
    image:
      "Images/Sag-Alo.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 47,
    name: "Bombay Aloo",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Medium spiced potatoes.",
    image:
      "Images/Bombay-Alo.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 48,
    name: "Chana Masala",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Chickpea cooked with spices.",
    image:
      "Images/Bombay-Alo.jpg",
    badge: "",
    spicy: true,
    veg: true,
  },
{
    id: 49,
    name: "Gobi/Cauliflower Bhaji",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Sliced potatoes cooked with cauliflower/Alo Gobi",
    image:
      "Images/Cauliflower-Bhaji.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 50,
    name: "Paneer Karai",
    category: "Vegetables Dishes",
    price: 7.95,
    desc: "Cottage cheese cooked with spinach , herbs & spice in a dey sauca",
    image:
      "Images/Paneer-Karai.jpg",
    badge: "",
    spicy: true,
    veg: true,
  },
{
    id: 51,
    name: "Tarka Daal",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Lentils Wit fried garlic.",
    image:
      "Images/Tarka-Daal.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 52,
    name: "Mushroom Bhaji",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "Mushroom in a dry curry sauce.",
    image:
      "Images/Tarka-Daal.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 53,
    name: "Dry Vegetables",
    category: "Vegetables Dishes",
    price: 6.95,
    desc: "",
    image:
      "Images/Dry-Vegetables.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 54,
    name: "Bhindi Bhaji",
    category: "Vegetables Dishes",
    price: 8.95,
    desc: "",
    image:
      "Images/Bhindi-Bhaji.jpg",
    badge: "",
    spicy: true,
    veg: true,
  },
{
    id: 55,
    name: "Brinjal Bhaji",
    category: "Vegetables Dishes",
    price: 7.95,
    desc: "",
    image:
      "Images/Brinjal-Bhaji.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 56,
    name: "Mattar Paneer",
    category: "Vegetables Dishes",
    price: 7.50,
    desc: "Green Peas and Cottage Cheese in acurry veg sauce.",
    image:
      "Images/Mattar-Paneer.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 57,
    name: "Dry Vegetables Paneer",
    category: "Vegetables Dishes",
    price: 7.50,
    desc: "Spicy veg cooked with cottage cheese",
    image:
      "Images/Dry-Vegetables-Paneer.jpg",
    badge: "",
    spicy: true,
    veg: true,
  },
{
    id: 58,
    name: "Paneer Tikka Masala",
    category: "Vegetables Dishes",
    price: 7.50,
    desc: "",
    image:
      "Images/Dry-Vegetables.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 59,
    name: "Shahi Paneer",
    category: "Vegetables Dishes",
    price: 7.50,
    desc: "",
    image:
      "Images/Dry-Vegetables.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 60,
    name: "Dry Vegetables Paneer",
    category: "Vegetables Dishes",
    price: 7.50,
    desc: "Spicy veg cooked with cottage cheese",
    image:
      "Images/Dry-Vegetables-Paneer.jpg",
    badge: "",
    spicy: true,
    veg: true,
  },
{
    id: 61,
    name: "Chicken Biryani",
    category: "Hyderabadi Biryani",
    price: 11.95,
    desc: " ",
    image:
      "Images/Chicken-Biryani.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 62,
    name: "Lamb Biryani",
    category: "Hyderabadi Biryani",
    price: 13.95,
    desc: " ",
    image:
      "Images/Lamb-Biryani.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  {
    id: 63,
    name: "Beef Biryani",
    category: "Hyderabadi Biryani",
    price: 12.90,
    desc: " ",
    image:
      "Images/Beef-Biryani.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 64,
    name: "Bay of Bengal Special Mixed Biryani",
    category: "Hyderabadi Biryani",
    price: 15.95,
    desc: " ",
    image:
      "Images/BOFB-Biryani.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{
    id: 65,
    name: "Boiled Rice",
    category: "Rice",
    price: 2.50,
    desc: " ",
    image:
      "Images/Boiled-Rice.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 66,
    name: "Polao Rice",
    category: "Rice",
    price: 3.00,
    desc: " ",
    image:
      "Images/Polao-Rice.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 67,
    name: "Mushroom Rice",
    category: "Rice",
    price: 3.90,
    desc: " ",
    image:
      "Images/Mushroom-Rice.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 68,
    name: "Vegetables Rice",
    category: "Rice",
    price: 3.90,
    desc: " ",
    image:
      "Images/Vegetables-Rice.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 69,
    name: "Coconut Rice",
    category: "Rice",
    price: 4.50,
    desc: " ",
    image:
      "Images/Coconut-Rice.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 70,
    name: "Keema Rice",
    category: "Rice",
    price: 4.50,
    desc: " ",
    image:
      "Images/Keema-Rice.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 71,
    name: "Special Rice",
    category: "Rice",
    price: 4.50,
    desc: "Rice With Egg & Vegetables",
    image:
      "Images/Special-Rice.jpg",
    badge: "",
    spicy: false,
    veg: true,
  },
{
    id: 72,
    name: "Egg Rice",
    category: "Rice",
    price: 4.50,
    desc: "Rice with Egg",
    image:
      "Images/Egg-Rice.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 73,
    name: "Plain Naan",
    category: "Clay Oven Breads",
    price: 2.50,
    desc: "",
    image:
      "Images/Plain-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 74,
    name: "Garlic Naan",
    category: "Clay Oven Breads",
    price: 2.95,
    desc: "",
    image:
      "Images/Garlic-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 75,
    name: "Butter Naan",
    category: "Clay Oven Breads",
    price: 3.25,
    desc: "",
    image:
      "Images/Butter-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 76,
    name: "Keema Naan",
    category: "Clay Oven Breads",
    price: 3.90,
    desc: "",
    image:
      "Images/Keema-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 77,
    name: "Peshwari Naan",
    category: "Clay Oven Breads",
    price: 3.90,
    desc: "",
    image:"Images/Peshwari-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 78,
    name: "Cheese  Naan",
    category: "Clay Oven Breads",
    price: 3.50,
    desc: "",
    image:"Images/Cheese-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 79,
    name: "Cheese & Garlic Naan",
    category: "Clay Oven Breads",
    price: 3.95,
    desc: "",
    image:"Images/Cheese & Garlic-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 80,
    name: "Paratha Bread",
    category: "Clay Oven Breads",
    price: 2.95,
    desc: "",
    image:"Images/Paratha-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
{
    id: 81,
    name: "Podina Bread",
    category: "Clay Oven Breads",
    price: 3.50,
    desc: "",
    image:"Images/Paratha-Bread.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 82,
    name: "Alo Paratha",
    category: "Clay Oven Breads",
    price: 3.50,
    desc: "",
    image:"Images/Alo-Paratha.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
   {
    id: 83,
    name: "Chapati",
    category: "Clay Oven Breads",
    price: 1.95,
    desc: "",
    image:"Images/Chapati.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 84,
    name: "Tandoori Roti",
    category: "Clay Oven Breads",
    price: 2.25,
    desc: "",
    image:"Images/Tandoori-Roti.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 85,
    name: "Onion Kulcha",
    category: "Clay Oven Breads",
    price: 3.95,
    desc: "",
    image:"Images/Onion-Kulcha.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
   {
    id: 86,
    name: "Mixed Raitas",
    category: "Clay Oven Breads",
    price: 2.95,
    desc: "",
    image:"Images/Mixed-Raitas.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
  {
    id: 87,
    name: "Chips",
    category: "Children's Item",
    price: 2.75,
    desc: "",
    image:"Images/Chips.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  { 
    id: 88,
    name: "Fish Finger & Chips",
    category: "Children's Item",
    price: 5.90,
    desc: "",
    image:"Images/Fish-Finger & Chips.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{ 
    id: 89,
    name: "Chicken Tikka & Chips",
    category: "Children's Item",
    price: 5.90,
    desc: "",
    image:"Images/Chicken-Tikka & Chips.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{ 
    id: 90,
    name: "Chicken Nuggets & Chips",
    category: "Children's Item",
    price: 5.90,
    desc: "",
    image:"Images/Chicken-Nuggets & Chips.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{ 
    id: 91,
    name: "Chicken Omelete & Chips",
    category: "Children's Item",
    price: 6.50,
    desc: "",
    image:"Images/Chicken-Omelete & Chips.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
{ 
    id: 92,
    name: "Nan Wrap With Chicken Tikka",
    category: "Children's Item",
    price: 6.50,
    desc: "",
    image:"Images/Nan-Wrap.jpg",
    badge: "",
    spicy: true,
    veg: false,
  },
  { 
    id: 93,
    name: "Water/Agua",
    category: "Drinks",
    price: 1.95,
    desc: "",
    image:"Images/Water-Agua.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
   { 
    id: 94,
    name: "Water/Agua",
    category: "Drinks",
    price: 1.95,
    desc: "",
    image:"Images/Water-Agua.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
     { 
    id: 95,
    name: "Sparkling Water/Con Gas",
    category: "Drinks",
    price: 1.95,
    desc: "Soft Drinks",
    image:"Images/Sparkling-Water.jpg",
    badge: "",
    spicy: false,
    veg: false,
  },
     { 
    id: 96,
    name: "Coca-Cola/Zero",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Coca-Cola.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
     { 
    id: 97,
    name: "Fanta Orange/Lemon",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Fanta.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
     { 
    id: 98,
    name: "Sprite",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Sprite.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
   { 
    id: 99,
    name: "Aquarius Can",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Aquarius-Can.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
   { 
    id: 100,
    name: "Nestea Can",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Nestea-Can.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
     { 
    id: 101,
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 3.95,
    desc: "",
    image:"Images/Orange-Juice.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
    { 
    id: 102,
    name: "Apple Juice ",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Apple-Juice.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
    { 
    id: 103,
    name: "Pineapple Juice ",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Pineapple-Juice.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
    { 
    id: 104,
    name: "Mango Lassi ",
    category: "Drinks",
    price: 4.50,
    desc: "",
    image:"Images/Mango Lassi.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
    { 
    id: 105,
    name: "Avacado Lassi",
    category: "Drinks",
    price: 5.50,
    desc: "",
    image:"Images/Avacado-Lassi.jpg",
    badge: "Soft Drinks",
    spicy: false,
    veg: false,
  },
    { 
    id: 106,
    name: "Kopperbarg",
    category: "Drinks",
    price: 4.50,
    desc: "",
    image:"Images/Kopperbarg.jpg",
    badge: "CIDER",
    spicy: false,
    veg: false,
  },
   { 
    id: 107,
    name: "Stronghow",
    category: "Drinks",
    price: 4.50,
    desc: "",
    image:"Images/Kopperbarg.jpg",
    badge: "CIDER",
    spicy: false,
    veg: false,
  },
   { 
    id: 108,
    name: "Magners",
    category: "Drinks",
    price: 5.95,
    desc: "",
    image:"Images/Magners.jpg",
    badge: "CIDER",
    spicy: false,
    veg: false,
  },
   { 
    id: 109,
    name: "Sangria (Jug)",
    category: "Drinks",
    price: 9.95,
    desc: "",
    image:"Images/Sangria.jpg",
    badge: "CIDER",
    spicy: false,
    veg: false,
  },
  { 
    id: 110,
    name: "Tinto Verano Glass",
    category: "Drinks",
    price: 4.50,
    desc: "",
    image:"Images/Tinto-Verano.jpg",
    badge: "CIDER",
    spicy: false,
    veg: false,
  },
  { 
    id: 111,
    name: "Margues De Caceres",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Margues.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 112,
    name: "Margues De Riscal",
    category: "Drinks",
    price: 29.90,
    desc: "",
    image:"Images/Margues.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 113,
    name: "Albali Reserva",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Albali-Reserva.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 114,
    name: "Emilo Mora",
    category: "Drinks",
    price: 39.90,
    desc: "",
    image:"Images/Emilo Mora.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 115,
    name: "Protos Reserva",
    category: "Drinks",
    price: 34.90,
    desc: "",
    image:"Images/Protos-Reserva.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 116,
    name: "Protos Roble",
    category: "Drinks",
    price: 24.95,
    desc: "",
    image:"Images/Protos-Reserva.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 117,
    name: "Ramon Bilbao Crianza",
    category: "Drinks",
    price: 19.95,
    desc: "",
    image:"Images/Protos-Reserva.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
  { 
    id: 118,
    name: "Celeste",
    category: "Drinks",
    price: 25.95,
    desc: "",
    image:"Images/Celeste.jpg",
    badge: "RED WINE",
    spicy: false,
    veg: false,
  },
    { 
    id: 119,
    name: "Draught 1/2",
    category: "Drinks",
    price: 2.95,
    desc: "",
    image:"Images/Draught.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
  { 
    id: 120,
    name: "Draught Pint",
    category: "Drinks",
    price: 3.95,
    desc: "",
    image:"Images/Draught-Pint.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
   { 
    id: 121,
    name: "Cobra-Indian Beer(350ml)",
    category: "Drinks",
    price: 3.95,
    desc: "",
    image:"Images/Draught-Pint.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
  { 
    id: 122,
    name: "Cobra-Indian Beer(500ml)",
    category: "Drinks",
    price: 3.95,
    desc: "",
    image:"Images/Draught-Pint.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
  { 
    id: 123,
    name: "Heineken",
    category: "Drinks",
    price: 3.50,
    desc: "",
    image:"Images/Draught-Pint.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
  { 
    id: 124,
    name: "Corona",
    category: "Drinks",
    price: 3.95,
    desc: "",
    image:"Images/Corona.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
  { 
    id: 125,
    name: "No Alcohol Beer",
    category: "Drinks",
    price: 3.00,
    desc: "",
    image:"Images/No-Alcohol.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
  },
   { 
    id: 126,
    name: "Gluten free Beer",
    category: "Drinks",
    price: 3.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "BEERS",
    spicy: false,
    veg: false,
    glutenFree: true,
  },
  { 
    id: 127,
    name: "House Wine",
    category: "Drinks",
    price: 12.95,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 128,
    name: "Marques De Carceres",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 129,
    name: "Marques De Riscal",
    category: "Drinks",
    price: 25.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
{ 
    id: 130,
    name: "Vina Sol",
    category: "Drinks",
    price: 16.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 131,
    name: "Most Wanted",
    category: "Drinks",
    price: 19.95,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
 { 
    id: 132,
    name: "Ogio Pinot Grigo",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 133,
    name: "Protos(Sauvigno Blanco)",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 134,
    name: "La Vieille Ferme",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 135,
    name: "Martin Codax",
    category: "Drinks",
    price: 29.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "White Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 136,
    name: "House Rose",
    category: "Drinks",
    price: 11.50,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 137,
    name: "Marques De Caceres",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 138,
    name: "Marques De Riscal",
    category: "Drinks",
    price: 29.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 139,
    name: "Mateus",
    category: "Drinks",
    price: 16.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 140,
    name: "La Vieille Ferme",
    category: "Drinks",
    price: 19.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 141,
    name: "Ohla Torres",
    category: "Drinks",
    price: 16.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 142,
    name: "Ogio Rose Blush",
    category: "Drinks",
    price: 16.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "Rose Wine",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 143,
    name: "Freixenet",
    category: "Drinks",
    price: 17.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "CAVA",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 144,
    name: "Freixenet(Small)",
    category: "Drinks",
    price: 5.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "CAVA",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 145,
    name: "Brut",
    category: "Drinks",
    price: 24.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "CAVA",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 146,
    name: "Anna",
    category: "Drinks",
    price: 24.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "CAVA",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 147,
    name: "Moet Chaandon",
    category: "Drinks",
    price: 69.90,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "CAVA",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 148,
    name: "GIN",
    category: "Drinks",
    price: 4.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 149,
    name: "GIN Special",
    category: "Drinks",
    price: 5.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 150,
    name: "VODKA",
    category: "Drinks",
    price: 4.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 151,
    name: "VODKA Special",
    category: "Drinks",
    price: 5.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  { 
    id: 152,
    name: "WHISKY",
    category: "Drinks",
    price: 4.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 153,
    name: "WHISKY Special",
    category: "Drinks",
    price: 5.50,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 154,
    name: "LICOR",
    category: "Drinks",
    price: 4.00,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
   { 
    id: 155,
    name: "LICOR Special",
    category: "Drinks",
    price: 4.50,
    desc: "",
    image:"Images/Gluten-Free.jpg",
    badge: "",
    spicy: false,
    veg: false,
    glutenFree: false,
  },
  {
    id: 156,
    name: "Garlic Chilli Beef",
    category: "Chef Specialities",
    price: 10.95,
    desc: "Barbequed Beef cooked with chopped garlic capsicums onions and fresh green chilli in medium/hot curry sauce.",
    image:
      "Images/Garlic-Chilli-Beef.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 157,
    name: "Chicken Sizzling",
    category: "Chef Specialities",
    price: 9.95,
    desc: "Chicken cooked with onions, green peppers garlic and ginger, fresh tomatoes. Patato chopped with indian gerbs & spices in a olive oil & soy sauce slightly spicy",
    image: "Images/Chicken Sizzling.png",
    badge: "Best Seller",
    spicy: true,
    veg: false,
    glutenFree: true,
    featured: true,
  },
{
    id: 158,
    name: "Beef Sizzling",
    category: "Chef Specialities",
    price: 10.95,
    desc: "Beef cooked with onions, green peppers garlic and ginger, fresh tomatoes. Patato chopped with indian gerbs & spices in a olive oil & soy sauce slightly spicy",
    image: "Images/Beef-Sizzling.png",
    badge: "Best Seller",
    spicy: true,
    veg: false,
    glutenFree: true,
    featured: true,
  },
  {
    id: 159,
    name: "Garlic Chilli Lamb",
    category: "Chef Specialities",
    price: 12.90,
    desc: "Barbequed Lamb cooked with chopped garlic capsicums onions and fresh green chilli in medium/hot curry sauce.",
    image:
      "Images/Garlic-Chilli-Lamb.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 160,
    name: "Garlic Chilli Prawns",
    category: "Chef Specialities",
    price: 11.90,
    desc: "Barbequed Prawns cooked with chopped garlic capsicums onions and fresh green chilli in medium/hot curry sauce.",
    image:
      "Images/Garlic-Chilli-Prawns.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 161,
    name: "Tamil Black Papper Curry - Beef",
    category: "Chef Specialities",
    price: 10.95,
    desc: "Beef Cooked with black papper,cloves chilli & fennel.",
    image:
      "Images/Black-Papper-Beef.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 162,
    name: "Tamil Black Papper Curry - Lamb",
    category: "Chef Specialities",
    price: 12.90,
    desc: "Lamb Cooked with black papper,cloves chilli & fennel.",
    image:
      "Images/Black-Papper-Lamb.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 163,
    name: "Tamil Black Papper Curry - Prawns",
    category: "Chef Specialities",
    price: 11.90,
    desc: "Prawns Cooked with black papper,cloves chilli & fennel.",
    image:
      "Images/Black-Papper-Prawns.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 164,
    name: "Mango Chicken",
    category: "Chef Specialities",
    price: 9.95,
    desc: "Marinated chicken tikka cooked in almond,coconut & Cooked with mango sauce.",
    image:
      "Images/Mango-Chicken.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 165,
    name: "Mango Beef",
    category: "Chef Specialities",
    price: 10.95,
    desc: "Marinated Beef tikka cooked in almond,coconut & Cooked with mango sauce.",
    image:
      "Images/Mango-Beef.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
  {
    id: 166,
    name: "Mango Lamb",
    category: "Chef Specialities",
    price: 12.95,
    desc: "Marinated Lamb tikka cooked in almond,coconut & Cooked with mango sauce.",
    image:
      "Images/Mango-Lamb.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
    {
    id: 167,
    name: "Mango Prawns",
    category: "Chef Specialities",
    price: 11.90,
    desc: "Marinated Prawns tikka cooked in almond,coconut & Cooked with mango sauce.",
    image:
      "Images/Mango-Lamb.jpg",
    badge: "Popular",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
   {
    id: 168,
    name: "Chicken Samba",
    category: "Chef Specialities",
    price: 9.95,
    desc: "Meat cooked with herbs and spices, onion, tomato in semi dry gravy.",
    image:
      "Images/Samba-Chicken.jpg",
    badge: "Hot & Spicy",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
   {
    id: 169,
    name: "Beef Samba",
    category: "Chef Specialities",
    price: 10.95,
    desc: "Meat cooked with herbs and spices, onion, tomato in semi dry gravy.",
    image:
      "Images/Samba-Chicken.jpg",
    badge: "Hot & Spicy",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
   {
    id: 170,
    name: "Lamb Samba",
    category: "Chef Specialities",
    price: 12.90,
    desc: "Meat cooked with herbs and spices, onion, tomato in semi dry gravy.",
    image:
      "Images/Samba-Chicken.jpg",
    badge: "Hot & Spicy",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
   {
    id: 171,
    name: "Prawns Samba",
    category: "Chef Specialities",
    price: 11.90,
    desc: "Meat cooked with herbs and spices, onion, tomato in semi dry gravy.",
    image:
      "Images/Samba-Chicken.jpg",
    badge: "Hot & Spicy",
    spicy: true,
    veg: false,
    featured: true,
    glutenFree: true,
  },
];
const categories = [
  "All",
  "Appetisers",
  "Starters",
  "Chef Specialities",
  "Tandoori Specialities",
  "Vegetables Dishes",
  "Hyderabadi Biryani",
  "Rice",
  "Clay Oven Breads",
  "Children's Item",
  "Drinks"
];
let activeCategory = "All",
  query = "",
  cart = JSON.parse(localStorage.getItem("bob-cart") || "[]"),
  lastFocus;
const $ = (s) => document.querySelector(s),
  format = (n) => `€${n.toFixed(2)}`;
const grid = $("#foodGrid"),
  categoriesEl = $("#categories"),
  toast = $("#toast");
function imageTag(item, cls = "") {
  return `<img class="${cls}" src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">`;
}
function renderCategories() {
  categoriesEl.innerHTML = categories
    .map(
      (c) =>
        `<button class="category" role="tab" aria-selected="${c === activeCategory}" data-category="${c}">${c}</button>`,
    )
    .join("");
}
function card(item) {
  const badgeClass = item.badge === "New" ? "new" : "";
  return `<article class="food-card"><div class="food-image" data-detail="${item.id}">${imageTag(item)}<span class="badge ${badgeClass}">${item.badge}</span></div><div class="card-body"><h3 class="card-title" data-detail="${item.id}">${item.name}</h3><p class="description">${item.desc}</p>
  <div class="indicators">
${item.spicy?'<span class="spicy" title="Spicy">♨ Spicy</span>':''}
${item.veg?'<span class="veg" title="Vegetarian">● Veg</span>':''}
${item.glutenFree?'<span class="gluten-free" title="Gluten Free"><img src="Images/Gluten-Free-Icon.png" alt="Gluten Free"></span>':''}
</div>
  <div class="card-foot"><span class="price">${format(item.price)}</span><button class="add-btn" type="button" aria-label="Add ${item.name} to cart" data-add="${item.id}">+</button></div></div></article>`;
}
function renderMenu() {
  const filtered = menuItems.filter(
    (x) =>
      (activeCategory === "All" || x.category === activeCategory) &&
      `${x.name} ${x.desc} ${x.category}`.toLowerCase().includes(query),
  );
  grid.innerHTML = filtered.map(card).join("");
  $("#noResults").hidden = !!filtered.length;
  $("#resultCount").textContent =
    `${filtered.length} dish${filtered.length === 1 ? "" : "es"}`;
}
function renderFeatured() {
  const picks = menuItems.filter((x) => x.featured);
  $("#recommendationTrack").innerHTML = picks
    .map(
      (x) =>
        `<article class="recommendation-card" tabindex="0" role="button" data-detail="${x.id}" aria-label="View ${x.name}">${imageTag(x)}<div><small>${x.badge.toUpperCase()}</small><h3>${x.name}</h3><span>${format(x.price)}</span></div></article>`,
    )
    .join("");
}
function saveCart() {
  localStorage.setItem("bob-cart", JSON.stringify(cart));
}
function add(id) {
  const line = cart.find((x) => x.id === id);
  line ? line.qty++ : cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  showToast(`${menuItems.find((x) => x.id === id).name} added to your order`);
}
function update(id, delta) {
  const line = cart.find((x) => x.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((x) => x.id !== id);
  saveCart();
  renderCart();
}
function renderCart() {
  const entries = cart.map((line) => ({
    item: menuItems.find((x) => x.id === line.id),
    qty: line.qty,
  }));
  const count = cart.reduce((n, x) => n + x.qty, 0),
    sub = entries.reduce((n, { item, qty }) => n + item.price * qty, 0),
    service = sub ? sub * 0.05 : 0;
  $("#cartCount").textContent = count;
  $("#cartItems").innerHTML = entries
    .map(
      ({ item, qty }) =>
        `<div class="cart-row">${imageTag(item)}<div><h3>${item.name}</h3><p>${format(item.price)}</p><div class="quantity"><button type="button" data-change="${item.id}" data-delta="-1" aria-label="Decrease ${item.name}">−</button><span>${qty}</span><button type="button" data-change="${item.id}" data-delta="1" aria-label="Increase ${item.name}">+</button></div></div><button class="remove-btn" type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button></div>`,
    )
    .join("");
  $("#cartEmpty").hidden = !!entries.length;
  $("#cartSummary").hidden = !entries.length;
  $("#subtotal").textContent = format(sub);
  $("#serviceCharge").textContent = format(service);
  $("#total").textContent = format(sub + service);
}
function openCart() {
  lastFocus = document.activeElement;
  $("#drawerBackdrop").hidden = false;
  requestAnimationFrame(() => {
    $("#drawerBackdrop").classList.add("open");
    $("#cartDrawer").classList.add("open");
    $("#cartDrawer").setAttribute("aria-hidden", "false");
    $("#cartDrawer").focus();
  });
}
function closeCart() {
  const d = $("#cartDrawer");
  d.classList.remove("open");
  $("#drawerBackdrop").classList.remove("open");
  d.setAttribute("aria-hidden", "true");
  setTimeout(() => ($("#drawerBackdrop").hidden = true), 260);
  lastFocus?.focus();
}
function showDetail(id) {
  const x = menuItems.find((x) => x.id === id);
  lastFocus = document.activeElement;
  $("#modalContent").innerHTML =
    `${imageTag(x, "modal-photo")}<div class="modal-body"><p class="eyebrow">${x.category.toUpperCase()} · ${x.badge.toUpperCase()}</p><h2 id="modalTitle">${x.name}</h2><p>${x.desc}</p>
    <div class="indicators">
${x.spicy?'<span class="spicy">♨ Spicy</span>':''}
${x.veg?'<span class="veg">● Vegetarian</span>':''}
${x.glutenFree?'<span class="gluten-free" title="Gluten Free"><img src="Images/Gluten-Free-Icon.png" alt="Gluten Free"></span>':''}
</div>
    <div class="modal-bottom"><strong class="price">${format(x.price)}</strong><button class="add-wide" type="button" data-add="${x.id}">Add to order +</button></div></div>`;
  $("#modalBackdrop").hidden = false;
  requestAnimationFrame(() => {
    $("#modalBackdrop").classList.add("open");
    $("#foodModal").classList.add("open");
    $("#foodModal").setAttribute("aria-hidden", "false");
    $("#foodModal").focus();
  });
}
function closeModal() {
  const m = $("#foodModal");
  m.classList.remove("open");
  $("#modalBackdrop").classList.remove("open");
  m.setAttribute("aria-hidden", "true");
  setTimeout(() => ($("#modalBackdrop").hidden = true), 260);
  lastFocus?.focus();
}
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
categoriesEl.addEventListener("click", (e) => {
  if (!e.target.matches("[data-category]")) return;
  activeCategory = e.target.dataset.category;
  renderCategories();
  renderMenu();
});
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    add(+addBtn.dataset.add);
    return;
  }
  const detail = e.target.closest("[data-detail]");
  if (detail) showDetail(+detail.dataset.detail);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeModal();
  }
  if (e.key === "Enter" && e.target.matches("[data-detail]"))
    showDetail(+e.target.dataset.detail);
});
$("#searchInput").addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  $("#clearSearch").hidden = !query;
  renderMenu();
});
$("#clearSearch").onclick = () => {
  $("#searchInput").value = "";
  query = "";
  $("#clearSearch").hidden = true;
  renderMenu();
  $("#searchInput").focus();
};
$("#resetFilters").onclick = () => {
  activeCategory = "All";
  query = "";
  $("#searchInput").value = "";
  renderCategories();
  renderMenu();
};
$("#cartButton").onclick = openCart;
$("#closeCart").onclick = closeCart;
$("#drawerBackdrop").onclick = closeCart;
$("#closeModal").onclick = closeModal;
$("#modalBackdrop").onclick = closeModal;
$(".close-cart-button").onclick = closeCart;
$("#cartItems").onclick = (e) => {
  const change = e.target.closest("[data-change]");
  const remove = e.target.closest("[data-remove]");
  if (change) update(+change.dataset.change, +change.dataset.delta);
  if (remove) {
    cart = cart.filter((x) => x.id !== +remove.dataset.remove);
    saveCart();
    renderCart();
  }
};
$("#clearCart").onclick = () => {
  cart = [];
  saveCart();
  renderCart();
  showToast("Cart cleared");
};
$("#orderButton").onclick = () => {
  showToast("Order request received — we’ll be right with you!");
  cart = [];
  saveCart();
  renderCart();
  closeCart();
};
const theme = $(".theme-toggle");
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  theme.innerHTML = `<span aria-hidden="true">${dark ? "☀" : "☾"}</span>`;
  theme.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  localStorage.setItem("bob-theme", dark ? "dark" : "light");
}
setTheme(localStorage.getItem("bob-theme") === "dark");
theme.onclick = () => setTheme(!document.body.classList.contains("dark"));
$("#backTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.addEventListener(
  "scroll",
  () => $("#backTop").classList.toggle("visible", scrollY > 550),
  { passive: true },
);
$("#year").textContent = new Date().getFullYear();
renderCategories();
renderFeatured();
renderMenu();
renderCart();
