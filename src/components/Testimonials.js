import a from "../assets/12.jpg"

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <h2>TESTIMONIALS</h2>
            <h1>What Client's Say</h1>
            <div className="text">
                <p className="description">"Living at Tayta Residence has been an extraordinary experience. The attention to detail in the architectural design is truly commendable. Every day, I wake up to a space that feels like a work of art, and it fills me with joy and inspiration. The ambiance is perfect for my creative work as an interior designer, and I find myself constantly inspired by the surrounding beauty. The amenities and services provided are top-notch, and the staff is always attentive and friendly. It's not just a residence; it's a community of like-minded individuals who appreciate the finer things in life. I'm grateful to be a part of this wonderful haven."</p>
                <div className="client">
                    <img src={a} alt="" />
                    <div>
                        <p>William Jacob</p>
                        <p>INTERIOR DESIGNER</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials