import two from "../assets/2.jpg"

function Tayta() {
    return (
        <section className="tayta" id="residence">
            <div className="text">
                <h2>Project</h2>
                <h1>Tayta Residence</h1>
                <p>Welcome to Tayta Residence, a true haven of peace and comfort nestled in the heart of an enchanting setting. Perched amidst extraordinary natural landscapes, this residence offers an unparalleled living experience for discerning individuals seeking tranquility, refinement, and well-being. 
                    <br></br><br></br>Tayta Residence stands out with its modern and elegant architecture, perfectly integrated into its lush surroundings. Its sophisticated design highlights the harmony between the interior and exterior, creating a serene atmosphere ideal for relaxation and contemplation.
                    <br></br><br></br>Every detail has been meticulously crafted to offer unmatched living comfort. The spacious and bright apartments are designed with top-quality materials, boasting high-end finishes and state-of-the-art amenities. Expansive windows allow natural light to flood in, providing panoramic views of the surrounding landscapes.
                </p>
            </div>
            <div className="img">
                <div></div>
                <img src={two} alt="Residence Tayta" />
            </div>
            <aside>
                <div>
                    <p>26</p>
                    <p>SQUARE AREAS</p>
                </div>
                <div>
                    <p>12</p>
                    <p>CAR PARKING</p>
                </div>
                <div>
                    <p>8</p>
                    <p>FLOOR</p>
                </div>
                <div>
                    <p>265</p>
                    <p>ROOMS</p>
                </div>
            </aside>
        </section>
    )
}

export default Tayta