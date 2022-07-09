import CloseIcon from "@mui/icons-material/Close";
import "./Cart.css";
import { CartContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import CartItem from "./../CartItem/CartItem";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const theme = createTheme({
    palette: {
        primary: {
            main: "#005A87",
        },
    },
});

const MotionCloseIcon = motion(CloseIcon);

function Cart({ visible, setVisible }) {
    // eslint-disable-next-line
    const [cart, setCart] = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);
    const subtotalControl = useAnimation();
    const shippingControl = useAnimation();
    const totalControl = useAnimation();
    const isTablet = useMediaQuery("(max-width:900px)");

    const variants = {
        show: {
            transition: {
                staggerChildren: 0.5,
            },
        },
        initial: {
            opacity: 1,
        },
        shake: (i) => ({
            rotate: [0, 15, -15, 0],
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: i * 0.05,
            },
        }),
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.06,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 1,
            transition: {
                duration: 0.1,
            },
        },
    };

    useEffect(() => {
        let subbtotal = 0;
        for (const product of cart) {
            subbtotal += product.price * product.quantity;
        }

        subbtotal = Math.round(subbtotal * 100) / 100;

        function setPrices() {
            setTimeout(async () => {
                setSubtotal(subbtotal);
                await subtotalControl.start("shake");

                setShipping(subbtotal * 0.1);
                await shippingControl.start("shake");

                setTotal(subbtotal * 1.1);
                await totalControl.start("shake");
            }, 500);
        }
        setPrices();
        // eslint-disable-next-line
    }, [cart]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="cart"
                    initial={{
                        x: "100%",
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: "100%",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    style={
                        isTablet
                            ? { width: "100vw", height: "100vh" }
                            : { width: "min(500px, 50vw)", height: "100vh" }
                    }
                >
                    <header className="cart-title" style={{ color: "white" }}>
                        <Typography variant="h2">Cart</Typography>
                        <MotionCloseIcon
                            onClick={() => setVisible(!visible)}
                            className="cart-close"
                            variants={variants}
                            whileHover="hover"
                            whileTap="tap"
                        />
                    </header>
                    <div className="cart-body">
                        <motion.div
                            className="cart-items"
                            variants={variants}
                            animate="show"
                            initial="initial"
                        >
                            {cart.map((item) => (
                                <CartItem id={item.id} key={item.id} />
                            ))}
                        </motion.div>
                        <div
                            style={{
                                borderTop: "2px solid black",
                                paddingTop: 10,
                            }}
                        >
                            <div className="row">
                                <h3 className="light-roboto">Subtotal</h3>
                                <motion.h3
                                    className="light-roboto"
                                    variants={variants}
                                    custom={1}
                                    animate={subtotalControl}
                                >
                                    ${subtotal}
                                </motion.h3>
                            </div>
                            <div className="row">
                                <h3 className="light-roboto">Shipping</h3>
                                <motion.h3
                                    className="light-roboto"
                                    animate={shippingControl}
                                    variants={variants}
                                    custom={2}
                                >
                                    ${Math.round(shipping * 100) / 100}
                                </motion.h3>
                            </div>
                            <div className="row">
                                <h3 className="cartitem-price">Total</h3>
                                <motion.h3
                                    className="cartitem-price"
                                    animate={totalControl}
                                    variants={variants}
                                    custom={3}
                                >
                                    ${Math.round(total * 100) / 100}
                                </motion.h3>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="primary">
                                        Proceed to checkout
                                    </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Cart;
