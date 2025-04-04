

export const About = () => {
  return (
    <div className="common-wrapper">
      <div className="about-container">
      <div className="advantage-header">
        <h2>My Advantage</h2>
        <p>
          Must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was born and I will give you a complete account the
          system and expound the actual and praising pain was born.
        </p>
      </div>
        <div className="advantage-section">
          {/* Experience Box */}
          <div className="experience-container">
            <h3 className="experience-years">02</h3>
            <p>Years of Experience</p>
            <div className="client-satisfaction">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-container">
            <div className="skill-box">
              <h4>95%</h4>
              <p>HTML</p>
            </div>
            <div className="skill-box">
              <h4>90%</h4>
              <p>CSS</p>
            </div>
            <div className="skill-box">
              <h4>85%</h4>
              <p>JavaScript</p>
            </div>
            <div className="skill-box">
              <h4>80%</h4>
              <p>React</p>
            </div>
            <div className="skill-box">
              <h4>95%</h4>
              <p>WordPress</p>
            </div>
            <div className="skill-box">
              <h4>70%</h4>
              <p>Shopify</p>
            </div>
            <div className="skill-box">
              <h4>85%</h4>
              <p>PHP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
