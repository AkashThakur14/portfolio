
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/AkashThakur14" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ak9988385532">Email</a>
        </div>
      </div>
    </footer>
  );
};
