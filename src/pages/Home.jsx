

export const Home = () => {
  return (
    <div className="common-wrapper">
      <div className="section-container">
        <div className="content">
          {/* Left Column (Text) */}
          <div className="text-section">
            <h1><span className="highlight">Hello,</span> <br /> I Am <span className="white">Akash.</span></h1>
            <h2 className="sub-title">Full-Stack Developer</h2>
            <p>
              Passionate about building scalable web applications and user-friendly designs.
            </p>
            <button className="btn">Hire Me →</button>
          </div>

          {/* Right Column (Image) */}
          <div className="image-section">
            <img src="/images/akash.jpg" alt="Akash" className="profile-img" />
          </div>
        </div>
      </div>
      
    </div>



  )
}
