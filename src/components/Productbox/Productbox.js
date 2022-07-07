import "./Productbox.css";
import { Container, Typography, Grid, useMediaQuery } from "@mui/material";
import Product from "./../Product/Product";
import { motion } from "framer-motion";

const MotionGrid = motion(Grid);

function Productbox({ title, products }) {
    const isTablet = useMediaQuery("(max-width: 900px)");

    return (
        <Container className="productbox-back">
            <Typography
                variant={isTablet ? "h1" : "h2"}
                sx={{ fontFamily: "Roboto Condensed" }}
                className="productbox-title"
                mb="2rem"
            >
                {title}
            </Typography>
            <MotionGrid
                alignItems="center"
                justifyContent="space-evenly"
                spacing={2}
                rowGap={3}
                container
            >
                {products.map((product) => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                        <Product
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            key={product.id}
                        />
                    </Grid>
                ))}
            </MotionGrid>
        </Container>
    );
}

export default Productbox;
