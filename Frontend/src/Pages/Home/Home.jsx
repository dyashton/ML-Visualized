import styles from "./Home.module.scss"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
function Home(){

    return(
        <div className={styles.HomeCont}>
            <Link to="/" className={styles.HomeLink}>
                <motion.h1 
                className={`${styles.HomeTitle} textGradient1`}
                style={{backgroundSize: "400% 400%"}}
                animate={{backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]}}
                transition={{duration: 5, ease: "easeInOut", repeat: Infinity}}
                >ML Visualized</motion.h1>
            
            </Link>
            <h1 className={`${styles.HomeSubtitle} textGradient2`}>See The Algorithms and Concepts You Are Learning</h1>
        </div>
    );

}

export default Home;