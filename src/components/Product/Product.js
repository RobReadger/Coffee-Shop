import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Product.css";
import { CartContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";


const theme = createTheme({
    palette: {
        primary: {
            main: "#005A87",
            darker: "#053e85",
        },
    },
});

function Product({ image, name, description, price, variants}) {
    const [cart, setCart] = useContext(CartContext);

    function addToCart() {
        let copyCart = [...cart];

        for (const product of copyCart) {
            if (product.name === name) {
                product.quantity++;
                localStorage.setItem("cart", JSON.stringify(copyCart));
                setCart(copyCart);
                return;
            }
        }

        setCart([
            ...cart,
            {
                img: image,
                name: name,
                price: price.split("$")[1],
                quantity: 1,
                id: cart.length,
                key: cart.length,
            },
        ]);
        localStorage.setItem(
            "cart",
            JSON.stringify([
                ...cart,
                {
                    img: image,
                    name: name,
                    price: price.split("$")[1],
                    quantity: 1,
                    id: cart.length,
                    key: cart.length,
                },
            ])
        );
    }

    return (
        <motion.div
            className="product-back"
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <div
                className="product-image"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="product-body">
                <h1 className="product-name">{name}</h1>
                <p className="product-description">{description}</p>
                <Stack
                    spacing={0}
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <ThemeProvider theme={theme}>
                        <h1 className="product-price">{price}</h1>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addToCart}
                        >
                            Add to cart
                        </Button>
                    </ThemeProvider>
                </Stack>
            </div>
        </motion.div>
    );
}

export default Product;
