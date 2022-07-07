import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.css";
import React, { useState } from "react";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
    typography: {
        fontFamily: "'Indie Flower', cursive",

        h6: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
        }
    }
});
theme = responsiveFontSizes(theme);

export const CartContext = React.createContext();

function App() {
    const [cart, setCart] = useState(
        localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
    );

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <CartContext.Provider value={[cart, setCart]}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </CartContext.Provider>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
