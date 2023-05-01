import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
    heading?: string;
    children: React.ReactNode;
}

export const Section = ({heading, children}: SectionProps) => {
    return (
        <section className={styles.section}>
            <h3>{heading}</h3>
            {children}
        </section>
    )
};