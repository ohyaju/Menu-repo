import Image from "next/image";
import styles from "./page.module.css";
const menu = [
  {
    type: "SALADS",
    foods: [
      {
        name: "CHICKEN CAESER SALAD",
        price: "24,900₮",
        ingredient: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken",
      },
      {
        name: "GREEK SALAD",
        price: "21,900₮",
        ingredient: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",

      },
      {
        name: "QUINOA POWER SALAD",
        price: "22,500₮",
        ingredient: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.",
      }

    ],
  },

  {
    type: "BURGERS",
    foods: [
      {
        name: "CLASSIC BURGER",
        price: "18,900₮",
        ingredient: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries."
      },
      {
        name: "BBQ BACON BURGER",
        price: "21,900₮",
        ingredient: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.",
      },
      {
        name: "VEGAN BLACK BEAN BURGER",
        price: "17,900₮",
        ingredient: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun."
      },
    ],
  },
  {
    type: "PASTA",
    foods: [
      {
        name: "SPAGHETTI PASTA",
        price: "20,900₮",
        ingredient: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.",
      },
      {
        name: "SEAFOOD MARINARA",
        price: "23,500₮",
        ingredient: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
      },
      {
        name: "PESTO CHICKEN PASTA",
        price: "21,000₮",
        ingredient: "Fettuccine pasta with grilled chicken, basil pesto, and cherry tomatoes.",
      },
    ],
  },
  {
    type: "PIZZA",
    foods: [
      {
        name: "MARGHERITA PIZZA",
        price: "30,900₮",
        ingredient: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.",
      },
      {
        name: "PEPPERONI FEAST",
        price: "34,500₮",
        ingredient: "Loaded with pepperoni and melted mozzarella on a crispy crust.",
      },
      {
        name: "VEGETARIAN DELIGHT",
        price: "29,900₮",
        ingredient: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.",
      }
    ]
  }
]

function CardContainer(props) {
  console.log(props.menus.foods[0].name);


  return (
    <div>
      <div className="card-container">
        <div className="category">
          <h1>{props.menus.type}</h1>
        </div>
        <div className="food">
          <div className="food-header">
            <h6>{props.menus.foods[0].name}</h6>

            <p>{props.menus.foods[0].price}</p>
          </div>
          <p className="recipe">{props.menus.foods[0].ingredient}</p>
        </div>
        <div className="food">
          <div className="food-header">
            <h6>{props.menus.foods[1].name}</h6>

            <p>{props.menus.foods[1].price}</p>
          </div>
          <p className="recipe">{props.menus.foods[1].ingredient}</p>
        </div>
        <div className="food">
          <div className="food-header">
            <h6>{props.menus.foods[2].name}</h6>

            <p>{props.menus.foods[2].price}</p>
          </div>
          <p className="recipe">{props.menus.foods[2].ingredient}</p>
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  const Cards = [];
  for (let i = 0; i < menu.length; i++) {
    Cards.push(<CardContainer menus={menu[i]}></CardContainer>)
  }
  return (
    <div>
      <h1 className="head">pranzo</h1>
      <div className="container">
      {Cards}
      </div>
    </div>
  );
}
