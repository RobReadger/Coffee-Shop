import { Stack, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Product.css";
import { CartContext } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";

const theme = createTheme({
    palette: {
        primary: {
            main: "#005A87",
            darker: "#053e85",
        },
    },
});

function Product({ image, name, description, price, variants }) {
    const [cart, setCart] = useContext(CartContext);
    // eslint-disable-next-line
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function addToCart() {
        // enqueueSnackbar(`${name} was added to cart!`, { variant: "success" });
        enqueueSnackbar(
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    display: "flex"
                }}
                component="div"
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    {name}
                </Typography>
                &nbsp;was added to cart!
            </Typography>,
            { variant: "success" }
        );

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
                <Typography variant="h3" sx={{fontFamily: "Roboto Condensed", textDecoration: "underline"}}>{name}</Typography>
                <Typography variant="h6" className="product-description" sx={{lineHeight: "1.2"}} m="1rem 0">{description}</Typography>
                <Stack
                    spacing={0}
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <ThemeProvider theme={theme}>
                        <Typography variant="h4" sx={{fontFamily: "Roboto Condensed"}} m="0 0.2rem 0 0">{price}</Typography>
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
