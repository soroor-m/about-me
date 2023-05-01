import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cv">CV</Link>
                </li>
                <li>
                    <Link to="/bookshelf">Bookshelf</Link>
                </li>
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
};