import React from "react";
import {Section} from "../../utils/Section/Section";
import styles from "./CV.module.scss";

export const CV = () => {
    return (
        <div className={styles.cv}>
            <h2>Curriculum Vitae</h2>

            <Section heading="Personal Information">
                <p>Name: Soroor</p>
                <p>Location: Amsterdam, The Netherlands</p>
            </Section>

            <Section heading="Profile">
                <p>Currently living in Amsterdam. After obtaining a master degree in Private Law, I took the decision to
                    change my path towards tech as I was always interested in this field. I undertook a web development
                    course which covered all the fundamental full-stack JavaScript skills, put in practice with a
                    6-months internship as a full-stack developer. My educations and work experiences in various fields
                    have strengthened my career backbone.</p>
            </Section>

            <Section heading="Skills">
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Express and Node.js</li>
                    <li>SQL databases</li>
                    <li>Jest/ Mocha / Test Driven Development</li>
                    <li>HTML5 / CSS / SCSS / Sass</li>
                    <li>Linux / Terminal</li>
                    <li>Git / Github</li>
                    <li>REST API</li>
                </ul>
            </Section>

            <Section heading="Experiences">
                <ul>
                    <li>Full-Stack Web Developer Internship, Naduvi, Amsterdam, Netherlands</li>
                    <li>English Teacher, Aram Language Learning Academy, Sanandaj, Iran</li>
                    <li>Volunteer Administrative Assistant, TELLSI Kurdistan, Sanandaj, Iran</li>
                    <li>Volunteer Administrative Assistant, TELLSI Kurdistan, Sanandaj, Iran</li>
                </ul>
            </Section>

            <Section heading="Education">
                <ul>
                    <li>Web development Online Certification, Codecademy</li>
                    <li>Master of Private Law, Azad University, Sanandaj, Iran</li>
                    <li>Bachelor of Law, Azad University, Sanandaj, Iran</li>
                    <li>Diploma Certification in English Language, Aram Language Learning Academy, Sanandaj, Iran</li>
                </ul>
            </Section>

            <Section heading="Languages">
                <ul>
                    <li>English</li>
                    <li>Kurdish</li>
                    <li>Persian</li>
                </ul>
            </Section>
        </div>
    )
};
