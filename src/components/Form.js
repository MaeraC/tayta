function Form() {
    return (
        <form>
            <div className="formulaire" id="contact">
                <h1>Request a Visit</h1>
                <div>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your e-mail" />
                    <input type="date" name="date" placeholder="JJ/MM/AAAA"/>
                    <button type="submit">CONTACT</button>
                </div>
            </div>
        </form>
    )
}

export default Form 