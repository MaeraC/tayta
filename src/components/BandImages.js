import a from "../assets/3.jpg"
import b from "../assets/4.jpg"
import c from "../assets/5.jpg"
import d from "../assets/6.jpg"

function BandImages() {
    return (
        <section className="band-images">
            <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={c} alt="" />
            <img src={d} alt="" />
        </section>
    )
}

export default BandImages