import a from "../assets/13.jpg"
import b from "../assets/14.jpg"

function About() {
    return (
        <section className="about" id="about">
            <div className="img">
                <img src={a} alt="Residence Tayta" />
                <img src={b} alt="Residence Tayta" />
            </div>
            <div className="text">
                <h2>about us</h2>
                <h1>Since 1979 <br></br> We Are working <br></br> In Your Service</h1>
                <p>For over four decades, Tayta Residence has been a beacon of excellence in the world of real estate. Established in 1979, our journey began with a vision to redefine luxurious living and elevate the standards of residential developments.</p>
                <br></br><p>With unwavering dedication and a commitment to unparalleled quality, we have successfully crafted timeless masterpieces that have stood the test of time. Our expertise lies not only in creating exquisite architectural marvels but also in curating a lifestyle that reflects sophistication, comfort, and utmost satisfaction.</p>
                <br></br><p>Throughout our long and illustrious history, we have always put our clients at the forefront of our endeavors. Every project we undertake is driven by the aim to fulfill the dreams and aspirations of those who choose to make Tayta Residence their home.</p>
            </div>
            
        </section>
    )
}

export default About