import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">      
      <div className="footer-info">
        <h1>Leandro Espinoza</h1>
        <p>Full Stack Developer</p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>Y pongámonos manos a la obra.</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">
            Diseñado por Leandro Espinoza
        </div>
        <div className="sns-links">
            <a href="https://api.whatsapp.com/send?phone=+584246527575&text=Hola, Leandro, necesito una página web...." target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp whatsapp"></i>
            </a>            
            <a href="https://www.instagram.com/lebusistemas/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram instagram"></i>
            </a>
            <a href="https://twitter.com/lebusistemas/" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCh_bSciop1dW8GbIZBAZEKQ" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/lebusistemas" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin linkedin"></i>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
