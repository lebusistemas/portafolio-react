import "./Navbar.css";
import Logo from "../../images/logo192.png"

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>            
            <div className="navbar-logo" onClick={toTheTop}>
                <div class="card__binario">
                    <p>01001100 01100101 01100001 01101110 01100100 01110010 01101111 00100000 01000101 01110011 01110000 01101001 01101110 01101111 01111010 01100001</p>
                </div>
                <img src={Logo} alt="Leandro Espinoza" />                
            </div>
        </nav>
    )
}

export default Navbar
