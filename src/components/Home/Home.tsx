import React from 'react';
import {Section} from '../../utils/Section/Section';
import emoji from '../../images/emoji.jpg';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.home}>
            <Section heading="Hey there!">
                <img src={emoji} alt="Soroor's emoji picture"/>
                <p>
                    Welcome to my personal website, About Me.<br/>
                    My name is Soroor, I'm 29 years old. I'm Kurdish from Iran and currently living in the Netherlands.
                    Here you will find information about me, my experiences, and my interests. Whether you're here to
                    learn more about my professional background, explore my hobbies, or just connect with me, I'm
                    thrilled to share a glimpse of who I am and what I'm passionate
                    about.<br/><br/>

                    On this site, you'll find sections dedicated to my CV, where you can learn more about my education,
                    work experience, and professional achievements. You'll also find a section about my hobbies, where I
                    share some of my favorite pastimes and activities. If you're interested in what I'm reading, you can
                    check out my bookshelf, where I share some of my favorite books and authors. Lastly, if you'd like
                    to get in touch, you can find my contact information on the Contact page.<br/><br/>

                    Thank you for visiting my website, and I hope you enjoy it!
                </p>
            </Section>
        </div>
    );
};