import { motion } from "framer-motion";

const revealVariants = {
    hidden: {
        opacity: 0,
        y: 45,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function ScrollReveal({
    children,
    className = "",
    delay = 0,
    amount = 0.15,
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