import "./About.css"
import Foto from "../../images/lebu_2.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>¡Hola!</h3> 
        <p>Un gusto saludarte.
          <span>Me llamo Leandro Espinoza, vivo en Venezuela y me encanta la programación.</span>
          <br/>
          <span>Tengo más de 17 años de experiencia como programador de sistemas.</span>
          <br/>
          <span>He trabajado con:</span>
        </p>
        <br/>
        <div className="wrapper">
          <ul><i className="fa-solid fa-laptop-code"></i>Visual Basic</ul>
          <ul><i className="fa-solid fa-laptop-code"></i>C#</ul>
          <ul><i className="fa-brands fa-java"></i>Java</ul>
          <ul><i className="fa-solid fa-laptop-code"></i>.NET</ul>
          <ul><i className="fa-solid fa-laptop-code"></i>ASP.NET</ul>
          <ul><i className="fa-solid fa-database"></i>SQL Server</ul>
          <ul><i className="fa-solid fa-database"></i>MySQL</ul>
          <ul><i className="fa-solid fa-laptop-code"></i>Crystal Reports</ul>
          <ul><i className="fa-brands fa-android"></i>Andorid Studio</ul>
          <ul><i className="fa-solid fa-code"></i>API Rest</ul>
          <ul><i className="fa-brands fa-react"></i>React</ul>
          <ul><i className="fa-brands fa-html5"></i>Html</ul>
          <ul><i className="fa-brands fa-css3-alt"></i>Css</ul>
          <ul><i className="fa-brands fa-js"></i>JavaScript</ul>
          <ul><i className="fa-brands fa-bootstrap"></i>Bootstrap</ul>
        </div>
      </div>
      <div className="about-img">
        <img
          src={Foto}
          alt="about"
        />
      </div>
    </div>
  )
}

export default About
