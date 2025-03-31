

import { motion } from "framer-motion";

const projects = [
  { 
    title: "Project One", 
    description: "An innovative web app for project management.",
    image: "https://via.placeholder.com/300",
  },
  { 
    title: "Project Two", 
    description: "A mobile app for real-time collaboration.",
    image: "https://via.placeholder.com/300",
  },
  { 
    title: "Project Three", 
    description: "An e-commerce platform with advanced features.",
    image: "https://via.placeholder.com/300",
  },
];

export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <section className="hero-section">
        <h1>Our Projects</h1>
        <p>Check out some of the amazing work we've done for our clients.</p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <div className="card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
