import "./Acount.css"

export const Acount = () =>{
    return (
        <div className="acount">
            <form className="acountForm" action="">
                <h2 className="acountTitle">Crie sua conta hoje</h2>
                <input type="text" required placeholder="Nome" className="acountInput"/>
                <input type="email" required placeholder="Email" className="acountInput"/>
                <input type="password" required placeholder="Senha" className="acountInput"/>
                <input type="password" required placeholder="Repetir senha" className="acountInput"/>
                <input type="submit" required className="acountSubmit"/>
            </form>
        </div>
    )
}