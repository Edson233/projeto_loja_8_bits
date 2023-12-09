import "./footer.css"
import chest from "../assets/Downloads/chest.png"
import xp from "../assets/Downloads/xp.png"
import life from "../assets/Downloads/life.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <div className="social-info">
                    <a href="#" className="fa fa-facebook"> </a><h2 className="social-name">Loja-8-Bits</h2>
                </div>
                
                <div className="social-info">
                    <a href="#" className="fa fa-twitter"> </a><h2 className="social-name">@Loja-8-Bits</h2>
                </div>

                <div className="social-info">
                    <a href="#" className="fa fa-instagram"></a><h2 className="social-name">Loja-8-Bits</h2>
                </div>

                <div className="social-info">
                    <a href="#" className="fa fa-youtube"> </a><h2 className="social-name">Canal-8-Bits</h2>
                </div>

            </div>
            <div className="formasPag">
                <h2>Formas de pagamento</h2>
                <div className="pagOption">
                    <img className="pagImg" src={chest} alt="" />
                    <h2 className="pagText" >Tesouros</h2>
                </div>
                <div className="pagOption">
                    <img className="pagImg" src={xp} alt="" />
                    <h2 className="pagText" >Niveis e XP</h2>
                </div>
                <div className="pagOption">
                    <img className="pagImg" src={life} alt="" />
                    <h2 className="pagText" >Vidas extras</h2>
                </div>
            </div>
            <div className="form">
                <form action="">
                    <label htmlFor="enviar-email" > Fique por dentro dos proximos patchs </label>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="Email" required />
                    <input type="submit" value="Enviar" className="submit" />
                </form>
            </div>
        </footer>
    )
}