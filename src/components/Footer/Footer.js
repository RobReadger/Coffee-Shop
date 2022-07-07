import {Grid, Divider, Stack, useMediaQuery, Typography} from "@mui/material";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import HeaderItem from "../HeaderItem/HeaderItem";

const MotionFacebookIcon = motion(FacebookIcon);
const MotionInstagramIcon = motion(InstagramIcon);
const MotionTwitterIcon = motion(TwitterIcon);

function Footer() {
    const isTablet = useMediaQuery("(max-width:900px)");
    
    const variants = {
        shake: {
            rotate: [0, 20, -20, 0],
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <footer>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                p="1.2rem"
                columnGap={2}
            >
                <Grid item md={2} xs={12} sx={{textAlign: "center"}}>
                    <Typography variant={isTablet ? "h2" : "h4"} style={{color:"white"}}>Follow us</Typography>
                </Grid>
                <Divider
                    sx={{
                        borderColor: "white",
                        borderWidth: 1.5,
                        borderRadius: 10,
                        width: isTablet ? "80%" : "",
                    }}
                    variant={"middle"}
                    orientation={"vertical"}
                    flexItem={true}
                />
                <Grid item md={2} xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        columnGap={2}
                        p={isTablet ? "0" : "0 8rem"}
                    >
                        <Stack spacing={0} direction="column">
                            <HeaderItem>
                                <a href="facebook.com">Facebook</a>
                            </HeaderItem>
                            <HeaderItem>
                                <a href="instagram.com">Instagram</a>
                            </HeaderItem>
                            <HeaderItem>
                                <a href="twitter.com">Twitter</a>
                            </HeaderItem>
                        </Stack>
                        <Stack spacing={1.3} direction="column" style={{color:"white"}}>
                            <MotionFacebookIcon
                                fontSize="large"
                                variants={variants}
                                whileHover="shake"
                            />
                            <MotionInstagramIcon
                                fontSize="large"
                                variants={variants}
                                whileHover="shake"
                            />
                            <MotionTwitterIcon
                                fontSize="large"
                                variants={variants}
                                whileHover="shake"
                            />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
