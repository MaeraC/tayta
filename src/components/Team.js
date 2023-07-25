import a from "../assets/8.jpg"
import b from "../assets/9(1).jpg"
import c from "../assets/10.jpg"

function Team() {
    return (
        <section className="team" id="team">
            <h2>SPECIALS</h2>
            <h1>Meet The Team</h1>
            <div className="items">
                <div className="item">
                    <img src={a} alt="" />
                    <div className="description">
                        <p>Emily Taylor</p>
                        <p>INTERIOR DESIGNER</p>
                    </div>
                </div>
                <div className="item">
                    <img src={b} alt="" />
                    <div className="description">
                        <p>Froster Collings</p>
                        <p>ARCHITECT</p>
                    </div>
                </div>
                <div className="item">
                    <img src={c} alt="" />
                    <div className="description">
                        <p>Scott Aaronson</p>
                        <p>PROJECT OwNER</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team