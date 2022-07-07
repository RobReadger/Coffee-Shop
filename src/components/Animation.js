const TextboxVariants = {
    initialLeft: {
        x: -150,
        opacity: 0,
    },
    initialRight: {
        x: 150,
        opacity: 0,
    },
    initialTop: {
        y: "-100%",
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
    fall: {
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            duration: 0.5,
            damping: 15,
        },
    }
};

export default TextboxVariants;