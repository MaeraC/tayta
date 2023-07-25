import a from "../assets/icon1.png"
import b from "../assets/icon2.png"
import c from "../assets/icon3.png"
import d from "../assets/icon4.png"

function ListNum() {
    return (
        <section className="list-num">
            <div>
                <img src={a} alt="" />
                <p>24</p>
                <p>TOTAL PROJECTS</p>
                <p>With a strong dedication to excellence and innovation, we have successfully completed 24 remarkable projects that have left a lasting impact on their respective communities.</p>
            </div>
            <div>
                <img src={b} alt="" />
                <p>32</p>
                <p>HOUSE BUILD</p>
                <p>Our expertise in house construction has led us to create 32 beautiful and functional homes, tailored to meet the unique needs and preferences of our valued clients.</p>
            </div>
            <div>
                <img src={c} alt="" />
                <p>150</p>
                <p>EXPERT WORKERS</p>
                <p>At the heart of our success lies our dedicated team of 150 expert workers, whose unwavering commitment and skills have consistently delivered outstanding results.</p>
            </div>
            <div>
                <img src={d} alt="" />
                <p>38</p>
                <p>AWARDS</p>
                <p>Our passion for excellence has been recognized with 38 prestigious awards, celebrating our commitment to quality, creativity, and excellence in every project we undertake.</p>
            </div>
        </section>
    )
}

export default ListNum