import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar(){

    return(
        <div className={styles.SidebarCont}>
            <div className={styles.SectionCont}>
                <p className={styles.SidebarHeader}>Supervised Learning</p>
                <Link to="/linearregression" className={styles.SidebarItem}>Linear Regression</Link>
            </div>
        </div>
    );

}

export default Sidebar;
