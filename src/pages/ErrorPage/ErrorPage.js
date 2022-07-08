import { Container, Typography, Grid, Button } from "@mui/material";
import pageNotFound from "../../static/images/pageNotFound.svg";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#005A87",
            darker: "#053e85",
        },
    },
});

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <section className="section-2">
            <Container>
                <Grid
                    container
                    className="textbox-back"
                    justifyContent="center"
                    alignItems="center"
                    p="5rem 1rem"
                    m="5rem 0"
                    rowGap={4}
                >
                    <Grid item xs={12}>
                        <div
                            style={{
                                backgroundImage: `url(${pageNotFound})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                height: "300px",
                                borderRadius: "20px"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "Roboto Condensed",
                                fontWeight: "bold",
                                fontStyle: "normal",
                                textAlign: "center",
                            }}
                        >
                            Looks like the page you’re looking for does not
                            exist.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ThemeProvider theme={theme}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate("/home")}
                                    sx={{
                                        fontFamily: "Roboto",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                    }}
                                >
                                    Go to homepage
                                </Button>
                            </div>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default ErrorPage;
