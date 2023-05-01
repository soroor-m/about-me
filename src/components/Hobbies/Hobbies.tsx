import React from "react";
import {Section} from "../../utils/Section/Section";
import styles from "./Hobbies.module.scss";

export const Hobbies = () => {
    return (
        <div className={styles.hobbies}>
            <h2>My Hobbies</h2>
            <Section>
                <p>When I'm not working, I enjoy spending my time pursuing various
                    interests
                    and hobbies. Some of my favorite pastimes include reading, watching movies, playing squash, visiting
                    museums, strolling in the city, and occasionally hanging out with friends.
                </p>

                <ul>
                    <li>📚 Reading is one of my favorite ways to relax and escape into different worlds. I try to read
                        a variety of genres, but so far my favorite is fantasy.
                    </li>
                    <li>🎞 I also love watching movies, whether it's a classic film or the latest blockbuster release.
                        There's something about immersing myself in a good story that I find incredibly satisfying.
                    </li>
                    <li>🥍 Playing squash is another hobby I enjoy, as it allows me to stay active and competitive
                        while having fun. It's a great way to relieve stress and get some exercise, and I always feel
                        energized after a good game.
                    </li>
                    <li>🖼 Visiting museums is another interest of mine, as I find it fascinating to learn about art,
                        history, and culture through exhibits and displays. I enjoy exploring new museums and galleries,
                        and am always impressed by the creativity and talent on display.
                    </li>
                    <li>🚶🏻‍♀️ Strolling in the city is another way I like to spend my free time. Whether it's exploring a
                        new neighborhood or just taking a leisurely walk through a familiar area, I love the sense of
                        discovery that comes with exploring a city on foot.
                    </li>
                    <li>🍻 Lastly, I sometimes like to hang out with friends, whether it's grabbing a cup of coffee or
                        trying out a new restaurant. Spending time with people I care about is important to me, and I enjoy
                        catching up and making memories with those closest to me.
                    </li>
                </ul>

                <p>I hope you enjoyed learning a little bit about my hobbies, and feel free to reach out if you
                    share any of these interests or have any recommendations for new activities to try!
                </p>
            </Section>
        </div>
    )
};