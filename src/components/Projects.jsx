import React from "react";
import "./Projects.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Projects = () => {
    useScrollAnimation();
    const projectList = [
        {
            title: "Social media",
            description:
                "A responsive social media web app built with HTML, CSS, and JavaScript that allows users to connect, share, and interact seamlessly.",
            image: "project1.jpg",
            github: "https://github.com/AnilKumar1471/social-media-application",
            demo: "https://your-ai-chatbot-demo.com",
        },
        {
            title: "React Quiz App",
            description:
                "A quiz platform built with React where users can test knowledge on various subjects.",
            image: "project2.jpg",
            github: "https://github.com/AnilKumar1471/quiz_app",
            demo: "https://react-quiz-demo.com",
        },
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website created using React and CSS to showcase my projects and skills.",
            image: "project3.jpg",
            github: "https://github.com/AnilKumar1471/custom-portfolio-project",
            demo: "https://your-portfolio-demo.com",
        },
    ];

    return (
        <section id="projects" className="projects fade-in">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        {/* <img src={project.image} alt={project.title} className="project-img" /> */}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                                    GitHub
                                </a>
                                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-outline">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
