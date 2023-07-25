import logo from "../assets/logo.png"

function Nav() {
    return (
        <nav>
            <a href="/" className="logo">
                <img src={logo} alt="logo tayta" />
                <span>TAYTA</span>
            </a>
            <div className="anchors">
                <a href="#residence">Project</a>
                <a href="#about">About us</a>
                <a href="#values">Values</a>
                <a href="#team">Our team</a>
                <a href="#contact">Contact us</a>
                <a href="#testimonials">Testimonials</a>
            </div>
        </nav>
    )
}

export default Nav 