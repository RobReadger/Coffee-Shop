import espresso from "./../../static/images/products/espresso.jpg";
import latte from "./../../static/images/products/latte.jpg";
import macchiato from "./../../static/images/products/macchiato.webp";
import americano from "./../../static/images/products/americano.jpg";
import kiwi from "./../../static/images/products/kiwi.jpg";
import raspberry from "./../../static/images/products/raspberry.jpg";
import banana from "./../../static/images/products/banana.jpg";
import blueberry from "./../../static/images/products/blueberry.jpg";
import donut from "./../../static/images/products/donut.jpg";
import coffeecake from "./../../static/images/products/coffeecake.avif";
import crepes from "./../../static/images/products/crepes.avif";
import tiramisu from "./../../static/images/products/tiramisu.avif";


let ProductData = [
    {
        id: 0,
        title: "Coffees",
        products: [
            {
                // image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", LOL github copilot sugestion
                id: 0,
                image: espresso,
                name: "Espresso",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$5.00",
            },
            {
                id: 1,
                image: latte,
                name: "Latte",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$10.00",
            },
            {
                id: 2,
                image: macchiato,
                name: "Macchiato",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$7.00",
            },
            {
                id: 3,
                image: americano,
                name: "Americano",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$6.00",
            },
        ],
    },
    {
        id: 1,
        title: "Smoothies",
        products: [
            {
                id: 0,
                image: kiwi,
                name: "Kiwi",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$12.00",
            },
            {
                id: 1,
                image: raspberry,
                name: "Raspberry",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$15.00",
            },
            {
                id: 2,
                image: banana,
                name: "Banana",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$10.00",
            },
            {
                id: 3,
                image: blueberry,
                name: "Blueberry",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$9.00",
            },
        ],
    },
    {
        id: 2,
        title: "Sides",
        products: [
            {
                id: 0,
                image: donut,
                name: "Donut",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$3.13",
            },
            {
                id: 1,
                image: coffeecake,
                name: "Coffee cake",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$5.00",
            },
            {
                id: 2,
                image: crepes,
                name: "Crepes",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$6.00",
            },
            {
                id: 3,
                image: tiramisu,
                name: "Tiramisu",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante nisi, et volutpat quam vulputate at. ",
                price: "$7.00",
            },
        ],
    },
];

export default ProductData;
