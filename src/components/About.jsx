import React from 'react';
import './styles/About.css';

function About() {
    return (
        <section id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p className="intro">
                    I am Ankita Pandit Sawant, a 3rd-year Computer Engineering student with a passion for crafting impactful web applications and solving complex problems.
                </p>
                <p className="details">
                    As an aspiring full-stack developer with expertise in the MERN stack, I thrive on creating responsive, user-friendly solutions that address real-world challenges. My journey is fueled by dedication, hard work, and a constant desire to learn and grow. Whether it’s building innovative projects, competing in hackathons, or enhancing my technical skills, I strive for excellence in everything I do.
                </p>
                <p className="details">
                    I am proud to have been a <b>Runner-up</b> in the <b>Smart India Hackathon (SIH) 2024</b>, where my team developed a solution to improve transparency in organ transplantation, showcasing my commitment to creating impactful and meaningful solutions.
                </p>
                <p className="quote">
                    <em>“Hard work, learning, and innovation drive my journey in tech.”</em>
                </p>
            </div>
        </section>
    );
}

export default About;
