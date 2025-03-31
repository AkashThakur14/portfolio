import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: "Building scalable and secure websites." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences." },
  { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "Developing cross-platform mobile applications." },
];

export const Services = () => {
  return (
    <div className="services-wrapper">
      <section className="hero-section">
        <h1>Our Services</h1>
        <p>We provide top-notch services tailored to your business needs.</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="cta-section">
        <h2>Ready to work with us?</h2>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};
