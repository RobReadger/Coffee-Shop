import { Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Textbox from "./../../components/Textbox/Textbox";
import groundCoffee from "./../../static/images/groundCoffee.jpg";
import coffeeShop from "./../../static/images/coffeeShop.webp";
import Grid from "@mui/material/Grid";
import "./Home.css";
import { motion } from "framer-motion";
import TextboxVariants from "../../components/Animation";

const MotionGrid = motion(Grid);
const MotionTypography = motion(Typography);

function Home() {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <section className="section-1" id="AboutUs">
                <Container>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent={ isTablet ? "center" : "start"}
                        alignItems="center"
                        p="2rem 0"
                    >
                        <MotionGrid
                            item
                            xs={12}
                            sm={10}
                            md={5}
                            variants={TextboxVariants}
                            initial="initialLeft"
                            whileInView="show"
                        >
                            <Textbox title="About us">
                                <Typography variant="h6">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque lobortis ante
                                    nisi, et volutpat quam vulputate at.
                                    Praesent sit amet purus nibh. Proin commodo
                                    eros turpis, ut egestas lectus convallis
                                    non. Cras finibus est eget massa hendrerit
                                    ultricies.
                                </Typography>
                                <br/>
                                <Typography variant="h6">
                                    Nam dignissim tellus fringilla elementum
                                    dapibus. Maecenas sollicitudin, leo non
                                    sagittis tincidunt, purus purus consectetur
                                    massa, et eleifend urna neque vel urna.
                                    Pellentesque eu arcu sit amet ante molestie
                                    gravida sed eget orci. In euismod hendrerit
                                    lorem et tempor.
                                </Typography>
                                <br/>
                                <Typography variant="h6">
                                    Sed er fermentum mauris, sed dignissim nibh
                                    efficitur vel. Donec consequat metus in
                                    ullamcorper dictum. Vestibulum ornare
                                    dignissim tempus. Duis maximus ante a elit
                                    tempus eleifend. Vivamus consequat
                                    consectetur accumsan.
                                </Typography>
                            </Textbox>
                        </MotionGrid>
                    </Grid>
                </Container>
            </section>

            <div className="divider">
                <MotionTypography variants={TextboxVariants} initial="initialTop" whileInView="fall" variant="h2">Only the finest of beans</MotionTypography>
            </div>

            <section className="section-2">
                <Container>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent={ isTablet ? "center" : "space-between"}
                        alignItems="center"
                        p="2rem 0"
                        rowGap={5}
                    >
                        <MotionGrid
                            item
                            sm={7}
                            md={6.5}
                            variants={TextboxVariants}
                            initial="initialLeft"
                            whileInView="show"
                        >
                            <img
                                src={groundCoffee}
                                alt="Ground coffee beans"
                                className="image"
                            />
                        </MotionGrid>

                        <MotionGrid
                            item
                            sm={10}
                            md={5}
                            variants={TextboxVariants}
                            initial="initialRight"
                            whileInView="show"
                        >
                            <Textbox title="Where do our beans come from?">
                                <Typography variant="h6">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque lobortis ante
                                    nisi, et volutpat quam vulputate at.
                                    Praesent sit amet purus nibh. Proin commodo
                                    eros turpis, ut egestas lectus convallis
                                    non. Cras finibus est eget massa hendrerit
                                    ultricies.
                                </Typography>
                                <Typography variant="h6">
                                    Nam dignissim tellus fringilla elementum
                                    dapibus. Maecenas sollicitudin, leo non
                                    sagittis tincidunt, purus purus consectetur
                                    massa, et eleifend urna neque vel urna.
                                    Pellentesque eu arcu sit amet ante molestie
                                    gravida sed eget orci. In euismod hendrerit
                                    lorem et tempor.
                                </Typography>
                                <Typography variant="h6">
                                    Sed er fermentum mauris, sed dignissim nibh
                                    efficitur vel. Donec consequat metus in
                                    ullamcorper dictum. Vestibulum ornare
                                    dignissim tempus. Duis maximus ante a elit
                                    tempus eleifend. Vivamus consequat
                                    consectetur accumsan.
                                </Typography>
                            </Textbox>
                        </MotionGrid>
                    </Grid>
                </Container>
            </section>

            <div className="divider" id="Contact">
                <MotionTypography variants={TextboxVariants} initial="initialTop" whileInView="fall" variant="h2">Where you can find us</MotionTypography>
            </div>

            <section className="section-3">
                <Container>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent={ isTablet ? "center" : "space-between"}
                        alignItems="center"
                        rowGap={5}
                        p="2rem 0"
                    >
                        <MotionGrid
                            item
                            sm={10}
                            md={5}
                            variants={TextboxVariants}
                            initial="initialLeft"
                            whileInView="show"
                        >
                            <Textbox title="Our shop">
                                <Typography variant="h6">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque lobortis ante
                                    nisi, et volutpat quam vulputate at.
                                    Praesent sit amet purus nibh. Proin commodo
                                    eros turpis, ut egestas lectus convallis
                                    non. Cras finibus est eget massa hendrerit
                                    ultricies.
                                </Typography>
                                <Typography variant="h6">
                                    Nam dignissim tellus fringilla elementum
                                    dapibus. Maecenas sollicitudin, leo non
                                    sagittis tincidunt, purus purus consectetur
                                    massa, et eleifend urna neque vel urna.
                                    Pellentesque eu arcu sit amet ante molestie
                                    gravida sed eget orci. In euismod hendrerit
                                    lorem et tempor.
                                </Typography>
                                <Typography variant="h6">
                                    Sed er fermentum mauris, sed dignissim nibh
                                    efficitur vel. Donec consequat metus in
                                    ullamcorper dictum. Vestibulum ornare
                                    dignissim tempus. Duis maximus ante a elit
                                    tempus eleifend. Vivamus consequat
                                    consectetur accumsan.
                                </Typography>
                            </Textbox>
                        </MotionGrid>

                        <MotionGrid
                            item
                            sm={7}
                            md={6.5}
                            variants={TextboxVariants}
                            initial="initialRight"
                            whileInView="show"
                        >
                            <img
                                src={coffeeShop}
                                alt="Coffee shop"
                                className="image"
                            />
                        </MotionGrid>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default Home;
