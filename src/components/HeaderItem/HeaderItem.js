import { motion } from "framer-motion";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const MotionTypography = motion(Typography);

function HeaderItem({ children }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <MotionTypography variant="h4"
            style={{
                position: "relative",
                overflow: "hidden",
            }}
            whileHover={{
                scale: 1.1,
                transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                },
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            m={"0 0.8rem"}
        >
            {isHover && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: "85%",
                        left: 0,
                        height: "3px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                    }}
                    initial={{
                        width: 0,
                    }}
                    animate={{
                        width: "100%",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                />
            )}

            {children}
        </MotionTypography>
    );
}

export default HeaderItem;
