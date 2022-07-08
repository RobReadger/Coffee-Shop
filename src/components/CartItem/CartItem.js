import React, { useContext } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { CartContext } from "../../App";
import "./CartItem.css";

const MotionRemoveIcon = motion(RemoveIcon);
const MotionAddIcon = motion(AddIcon);
const MotionCloseIcon = motion(CloseIcon);
const MotionGrid = motion(Grid);

function CartItem({ id }) {
    const [cart, setCart] = useContext(CartContext);
    const control = useAnimation();

    const shake = {
        rotate: [0, 10, -10, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    };

    const variants = {
        hover: {
            scale: 1.3,
            transition: {
                duration: 0.06,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 1,
            transition: {
                duration: 0.06,
            },
        },
        initial: {
            x: "-150%",
        },
        show: {
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    function decreaseItem() {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === id);
        if (item.quantity > 1) {
            item.quantity--;
            localStorage.setItem("cart", JSON.stringify(newCart));
            setCart(newCart);
            control.start(shake);
        } else {
            removeFromCart(newCart, item);
        }
    }

    function increaseItem() {
        const newCart = [...cart];
        const item = newCart.find((item) => item.id === id);
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        control.start(shake);
    }

    function removeFromCart(newCart, item) {
        newCart.splice(newCart.indexOf(item), 1);
        for (let i = 0; i < newCart.length; i++) {
            newCart[i].id = i;
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <MotionGrid
            container
            spacing={0}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            className="cartitem-body"
            variants={variants}
        >
            <Grid item xs={3.5}>
                <div
                    className="cartitem-img"
                    style={{ backgroundImage: `url(${cart[id].img})` }}
                ></div>
            </Grid>
            <Grid item xs={3.5}>
                {/* <Stack direction="column" justifyContent="center" alignItems="strech"> */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    pb=".5rem"
                >
                    <MotionCloseIcon
                        onClick={() => {
                            const newCart = [...cart];
                            const item = newCart.find((item) => item.id === id);
                            removeFromCart(newCart, item);
                        }}
                        variants={variants}
                        whileHover="hover"
                        whileTap="tap"
                        sx={{color: "#ff5050"}}
                    />
                </Box>
                <h3
                    className="light-roboto"
                    style={{
                        borderBottom: "1px solid black",
                        marginBottom: ".5rem",
                        textAlign: "center",
                    }}
                >
                    {cart[id].name}
                </h3>
                <div
                    className="cartitem-flex"
                    style={{ paddingBottom: "1rem" }}
                >
                    <MotionRemoveIcon
                        onClick={decreaseItem}
                        variants={variants}
                        whileHover="hover"
                        whileTap="tap"
                    />
                    <div
                        style={{
                            border: "1px solid black",
                            borderRadius: "10px",
                            width: "30px",
                            height: "30px",
                            textAlign: "center",
                        }}
                    >
                        <h4 className="light-roboto" style={{ margin: 0 }}>
                            {cart[id].quantity}
                        </h4>
                    </div>
                    <MotionAddIcon
                        onClick={increaseItem}
                        variants={variants}
                        whileHover="hover"
                        whileTap="tap"
                    />
                </div>
                {/* </Stack> */}
            </Grid>
            <Grid item xs={3.5} className="cartitem-flex">
                <motion.h2 className="cartitem-price" animate={control}>
                    $
                    {Math.round(cart[id].price * cart[id].quantity * 100) / 100}
                </motion.h2>
            </Grid>
        </MotionGrid>
    );
}

export default CartItem;
