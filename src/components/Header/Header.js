import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Stack, Typography, Badge, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useAnimation } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../../App";
import Cart from "./../Cart/Cart";
import HeaderItem from "../HeaderItem/HeaderItem";
import OutsideClickHandler from "react-outside-click-handler";
import "./header.css";

function Header() {
    const isTablet = useMediaQuery("(max-width:900px)");
    const isMobile = useMediaQuery("(max-width:600px)");
    const [cartVisibility, setCartVisibility] = useState(false);
    const [headerVisibility, setHeaderVisibility] = useState(true);
    // eslint-disable-next-line
    const [cart, setCart] = useContext(CartContext);
    const [cartCount, setCartCount] = useState(0);
    const control = useAnimation();

    const shoppingCartAnim = {
        rotate: [0, 20, -20, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    };




    const HeaderOptions = () => (
        <>
            <HeaderItem>
                <Link to="/home">Home</Link>
            </HeaderItem>
            <HeaderItem>
                <HashLink to="/home#AboutUs">About us</HashLink>
            </HeaderItem>
            <HeaderItem>
                <HashLink to="/home#Contact">Contact</HashLink>
            </HeaderItem>
            <HeaderItem>
                <Link to="/products">Products</Link>
            </HeaderItem>

            <Badge
                badgeContent={cartCount}
                color="primary"
                sx={{
                    "& .MuiBadge-badge": {
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                    },
                }}
            >
                <motion.div
                    style={{
                        cursor: "pointer",
                    }}
                    animate={control}
                    whileHover={shoppingCartAnim}
                >
                    <ShoppingCartOutlinedIcon
                        style={{
                            fontSize: 40,
                            margin: "0 0.8rem",
                            color: "white",
                        }}
                        onClick={() => setCartVisibility(!cartVisibility)}
                    />
                </motion.div>
            </Badge>
        </>
    );

    useEffect(() => {
        control.start(shoppingCartAnim);
        let items = 0;
        for (const product of cart) {
            items += product.quantity;
        }
        setCartCount(items);
        // eslint-disable-next-line
    }, [cart, control]);

    useEffect(() => {
        setHeaderVisibility(!isTablet);
    }, [isTablet]);

    function toggleHeader() {
        setHeaderVisibility(!headerVisibility);
        console.log("Toggled");
    }

    return (
        <header className="header">
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p="0.3rem 1rem"
            >
                <Grid item xs="auto">
                    <Typography variant="h2" style={{ color: "white" }}>
                        Coffee shop
                    </Typography>
                </Grid>

                {!isTablet ? (
                    <Grid item>
                        <Stack direction="row">
                            <HeaderOptions />
                        </Stack>
                    </Grid>
                ) : (
                    <MenuIcon
                        onClick={toggleHeader}
                        style={{ fontSize: 40, color: "white" }}
                    />
                )}
            </Grid>

            {isTablet && headerVisibility && (
                <motion.div
                    initial={{
                        x: "-100%",
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    <Stack p="0.3rem" direction={isMobile ? "column" : "row"}>
                        <HeaderOptions />
                    </Stack>
                </motion.div>
            )}

            <OutsideClickHandler
                onOutsideClick={() => setCartVisibility(false)}
            >
                <Cart visible={cartVisibility} setVisible={setCartVisibility} />
            </OutsideClickHandler>
        </header>
    );
}

export default Header;
