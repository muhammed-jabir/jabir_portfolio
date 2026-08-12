import { motion } from "framer-motion";

const revealVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function ScrollReveal({
    children,
    className = "",
    delay = 0,
    amount = 0.1,
}) {
    return (
        <motion.div
            className={className}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount,
                margin: "0px 0px -50px 0px",
            }}
            transition={{
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;