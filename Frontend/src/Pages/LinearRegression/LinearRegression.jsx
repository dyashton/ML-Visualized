import styles from "./LinearRegression.module.scss"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5";
import  Sketch  from "react-p5";
import { stepLinReg } from "../../Utils/API/SupervisedLearning";
import { useState, useEffect } from "react";
import { use } from "react";

function LinearRegression(){
    
    const [weights, setWeights] = useState([0.5, 1]);
    const [bias, setBias] = useState([0.5]);
    const [x, setX] = useState([1, 2],[ 3, 4],[ 5, 6]);
    const [y, setY] = useState([2, 5, 11]);
    async function fetchData() {
        console.log("Older weights:", weights);
        const response = await stepLinReg(weights, bias, x, y);
        console.log("Response from API:", response);
        const new_weights = response.new_weights;
        const new_bias = response.new_bias;
        setWeights(new_weights[0]);
        setBias(new_bias);

    } 

    useEffect(() => {
        console.log("Weights updated:", weights);
        console.log("Bias updated:", bias);
        console.log("Weight[0] updated:", weights[0]);
    },[weights]);

    function setup(p5, parentRef){
        p5.createCanvas(600, 600).parent(parentRef);
    };

    function draw(p5){
            p5.clear();
            p5.stroke(0);
            p5.background(200);
            p5.fill(0);
            p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);

            p5.line(10, 0, 10, 600);
            p5.line(0, 590, 600, 590);
            const slope = weights[0];
            const intercept = bias[0];
            const x1 = 0;
            const y1 = p5.height -(slope * x1 + intercept);
            const x2 = 600;
            const y2 = p5.height - (slope * x2 + intercept);
            p5.stroke(255, 0, 0);
            p5.line(x1, y1, x2, y2);
            for(let i = 0; i < 400; i+=20){
            }
    }



    return(
        <div className={styles.LinearRegressionCont}>
            <Link to="/">
                <motion.h1 
                className={`${styles.LinearRegressionTitle} textGradient1`}
                style={{backgroundSize: "400% 400%"}}
                animate={{backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]}}
                transition={{duration: 5, ease: "easeInOut", repeat: Infinity}}
                >ML Visualized</motion.h1>
            </Link>

            <h1 className={`${styles.LinearRegressionSubtitleCont}`}>
                <p className={styles.LinearRegressionSubtitle}>Supervised Learning</p>
                <IoChevronForward className={styles.Chevron}/>
                <p className={styles.LinearRegressionSub2}>Linear Regression</p>
            </h1>
            <div className={styles.MainCont}>
                <Sketch
                    setup={setup}
                    draw={(p5) => {draw(p5)}}
                />
            </div>
            <button onClick={() => fetchData(weights, bias, x, y)}>button</button>
        </div>
    );
}

export default LinearRegression;