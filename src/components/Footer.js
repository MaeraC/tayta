import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import location from "../assets/location.png"
import time from "../assets/time(1).png"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import tw from "../assets/tw.png"
import yb from "../assets/yb.png"

function Footer() {
    return (
        <footer>
            <div>
                <h2>logo</h2>
                <ul className="details">
                    <li><img src={phone} alt="" /> (+01)979.828.17</li>
                    <li><img src={mail} alt="" /> contact.tayta@gmail.com</li>
                    <li><img src={location} alt="" /> 2159 Ralph, Brooklyn, NY, United States</li>
                    <li><img src={time} alt="" /> 8am - 6pm EST, Monday - Sunday</li>
                </ul>
            </div>
            <div>
                <h2>Explore</h2>
                <div className="anchors">
                    <a href="#residence">Project</a>
                    <a href="#about">About us</a>
                    <a href="#values">Values</a>
                    <a href="#team">Our team</a>
                    <a href="#contact">Contact us</a>
                    <a href="#testimonials">Testimonials</a>
                </div>
            </div>
            <div>
                <h2>Contact</h2>
                <ul className="social">
                    <li><img src={fb} alt="" /></li>
                    <li><img src={ig} alt="" /></li>
                    <li><img src={tw} alt="" /></li>
                    <li><img src={yb} alt="" /></li>
                </ul>
                <p>we bring the years, global experience, and stamina to guide our clients through new.</p>
            </div>
        </footer>
    )
}

export default Footer