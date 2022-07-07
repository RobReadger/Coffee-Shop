import "./Products.css";
import Productbox from "./../../components/Productbox/Productbox";
import ProductboxData from "./ProductData.js";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

function Products() {
    const ProductboxVariants = {
        initialLeft: {
            x: "-100%",
            opacity: 0,
        },
        initialRight: {
            x: "100%",
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    };

    return (
        <div className="products-back">
            <Container>
                {ProductboxData.map((productbox) => {
                    return (
                        <motion.div
                            variants={ProductboxVariants}
                            initial={
                                productbox.id % 2 === 0
                                    ? "initialRight"
                                    : "initialLeft"
                            }
                            whileInView="show"
                            key={productbox.id}
                        >
                            <Productbox
                                title={productbox.title}
                                products={productbox.products}
                                key={productbox.id}
                            />
                        </motion.div>
                    );
                })}
            </Container>
        </div>
    );
}

export default Products;
