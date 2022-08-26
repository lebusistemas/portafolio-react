import "./Slider.css"

const slidesInfo = [
    {
        src: "https://github.com/lebusistemas/img/blob/main/vr_arena_2.jpg?raw=true",
        alt: "ARENA",
        desc: "ARENA - Generador de contratos de responsabilidad civil (RCV)."
    },
    {
        src: "https://github.com/lebusistemas/img/blob/main/arena_web.jpg?raw=true",
        alt: "ARENA WEB",
        desc: "ARENA WEB - Generador de contratos de responsabilidad civil (RCV)."
    },
    {
        src: "https://github.com/lebusistemas/img/blob/main/sarfeb.jpg?raw=true",
        alt: "SARFEB",
        desc: "SARFEB - Sistema Automatizado para el Registro de Funciones y Empleados Bomberiles."
    }
]

const slides = slidesInfo.map(({ src, alt, desc}) => (
    <div className="slide-container">
        <img src={src} alt={alt} />
        <div className="slide-desc">
            <span>{desc}</span>
        </div>
    </div>
))

export default slides