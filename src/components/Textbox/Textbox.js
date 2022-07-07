import "./textbox.css";
import { Typography } from "@mui/material";

function Textbox({ title, children }) {
    return (
        <div className="textbox-back">
            <Typography variant="h2" sx={{fontFamily: "Roboto Condensed", textDecoration: "underline"}} mb={"1rem"}>{title}</Typography>
            <div>{children}</div>
        </div>
    );
}

export default Textbox;
