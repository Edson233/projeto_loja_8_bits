import "./Contact.css"

export const Contact = () => {
    return (<div className="contact">
    <form action="" className="contactForm">
        <label htmlFor="Contact" className="contactLabel">Fale Conosco</label>
        <input type="text" placeholder="Nome" className="textInput" id="nameInput" required />
        <input type="email" placeholder="Email" className="textInput" id="emailInput" required />
        <input type="text" placeholder="Assunto" className="textInput" id="subjectInput" required />
        <textarea name="Descrição" id="descriptionInput" cols="30" rows="10" required className="textInput" placeholder="Descrição"></textarea>
        <input type="submit" className="submitInput" />
    </form>
</div>)
}