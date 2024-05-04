export const backendAPI =
  "https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/";
export const itemsIngrediants =
  "https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/item?categoryId=";

export const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
// category Id
export const newPizzaId = 180002;
export const createOwnPizzaId = 180003;
export const BurgerId = 180004;
export const HouseWingsId = 180005;
export const pastaId = 180006;
export const NanzaId = 180007;
export const CheesyFunId = 180008;
export const SidesId = 180009;
export const SaladId = 180010;
export const SweetTreatId = 180011;
export const DippingSaucesId = 180012;
export const ThickShakesId = 180013;
export const DriksCanPopId = 180014;
export const HomeMadeDriskId = 180015;

// ingredients Id
export const CrustId = 220001;
export const FlavorId = 220002;
export const ToppingsId = 220003;
export const ExtraMeatToppingId = 220004;
export const ExtraCheeseId = 220005;
export const DrizzleitupId = 220006;
export const SeasoningsId = 220007;
export const AddDippingsId = 220008;
export const PannerChickenId = 220009;
export const BurgerFlavorId = 220010;
export const ExtraPattyId = 220011;
export const TypeOfServingId = 220012;
export const SizeOfWingBoxId = 220013;
export const WingsSaucesId = 220014;
// items by Id
// {
//     "success": true,
//     "message": "items List Get SuccessFully.",
//     "data": {
//       "type": {
//         "240001": "Indian Style",
//         "240002": "Italain Siza",
//         "240003": "Jain Pizza"
//       },
//       "items": {
//         "Drizzle It Up!": {
//           "140065": "Creamy Garlic",
//           "140066": "BBQ",
//           "140067": "Chilli Corander",
//           "140068": "Spicy Tandoori",
//           "140069": "Butter masala",
//           "140070": "Sweet Chili",
//           "140071": "Honey Gralic",
//           "140072": "Hot",
//           "140073": "Spicy Garlic",
//           "140074": "Chipotle"
//         },
//         "Curst(Required)": {
//           "140093": "Regular",
//           "140094": "Thick",
//           "140095": "Crispy Ulrta thin",
//           "140096": "thin"
//         },
//         "Topping": {
//           "140015": "Green Paper",
//           "140016": "Onion",
//           "140017": "Fresh MushRoom",
//           "140018": "Jalapeno pepeprs",
//           "140019": "Hot Banana Pepper",
//           "140020": "Corn",
//           "140021": "Roasted Red Pepper",
//           "140022": "Tomatoes",
//           "140023": "Fresh Gralic",
//           "140024": "Green chill",
//           "140025": "Crushed Ginger",
//           "140026": "Brushhetla",
//           "140027": "cauliflour",
//           "140028": "Broccoli",
//           "140029": "Pineapple",
//           "140030": "Grren Olives",
//           "140031": "Kalamata Olive",
//           "140032": "Sun-drived Tomotoes",
//           "140033": "Panneer",
//           "140034": "Falafal",
//           "140035": "Pepperoni",
//           "140036": "Ny Pepperoni",
//           "140037": "Grilled Chicken",
//           "140038": "Sicy Chicken",
//           "140039": "Tindoori Chicken",
//           "140040": "BBQ Chicken",
//           "140041": "Jerk Chicken",
//           "140042": "Ground Beef",
//           "140043": "Steak",
//           "140044": "Ham",
//           "140045": "Bacon crumble",
//           "140046": "Spicy Itailain Sauasge",
//           "140047": "amochive",
//           "140048": "shrmple",
//           "140049": "Green Papaer"
//         },
//         "Flavour (Base sauce & Top Seasonings)": {
//           "140001": "Italian Masala",
//           "140002": "Butter Masala",
//           "140003": "Tandoori",
//           "140004": "Achari",
//           "140005": "Creamy Garlic",
//           "140006": "Spicy Garlic",
//           "140007": "Hariyali Garlic",
//           "140008": "Tandori Garlic",
//           "140009": "Curry Gatlic",
//           "140010": "Jain (No Onion)",
//           "140011": "BBQ",
//           "140012": "Hot Honey Base",
//           "140013": "Sweet chill",
//           "140014": "Salsa"
//         },
//         "Extra Cheese": {
//           "140063": "Double Cheese",
//           "140064": "Triple Cheese"
//         },
//         "Panner/Chicken": {
//           "140107": "Panner",
//           "140108": "Chicken"
//         }
//       }
//     }
//   }

// category
// {
//     "success": true,
//     "message": "Category List Get SuccessFully.",
//     "data": [
//       {
//         "categoryId": 180001,
//         "name": "Offers",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180002,
//         "name": "Pizza",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180003,
//         "name": "Create Own Pizza",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180004,
//         "name": "Burger",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180005,
//         "name": "House Of Wings",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180006,
//         "name": "Pastas",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180007,
//         "name": "Nanza",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180008,
//         "name": "Cheesy Fun",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180009,
//         "name": "Sides",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180010,
//         "name": "Salads",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180011,
//         "name": "Sweet Treat!",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180012,
//         "name": "Dipping Sauces",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180013,
//         "name": "Culture Curst Special Thick Shakes!!!",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180014,
//         "name": "Drinks Pop",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       },
//       {
//         "categoryId": 180015,
//         "name": "Home Made Drinks",
//         "imageURL": "https://pizzaimage.s3.amazonaws.com/category.png"
//       }
//     ]
//   }
