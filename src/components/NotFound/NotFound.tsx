import React from "react";
import {Section} from "../../utils/Section/Section";
import notFoundImage from "../../images/notFoundImage.webp";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <Section heading="404 Not Found">
                <p>The page you are looking for does not exist!</p>
                <img src={notFoundImage} alt="404 Not Found"/>
            </Section>
        </div>
    )
};