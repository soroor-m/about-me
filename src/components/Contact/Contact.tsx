import React from 'react';
import {Section} from '../../utils/Section/Section';

export const Contact = () => {
    return (
        <Section heading="Contact Information">
            <p>Thank you for visiting my website! If you have any questions or would like to connect with me, please
                feel free to reach out using one of the following methods:</p>

            <ul>
                <li>📧 Email: soroor@gmail.com</li>
                <li>📞 Phone: (+31)0682222222</li>
                <li><a href="https://www.linkedin.com/in/soroor-mostowfi/">👩🏻‍💻 LinkedIn</a></li>
            </ul>

            <p>I'm always happy to hear from people who share my interests or have opportunities to collaborate on
                interesting projects. Whether you're looking to network, learn more about my background and experiences,
                or just say hello, I look forward to hearing from you!</p>
        </Section>
    );
};