import Violao from '../assets/imagens/imagens/guitarras_header1.png'
import GuitarraFundo from '../assets/imagens/imagens/guitarra_fundo_body1.png'
import styles from '../css/Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <div>
                <img src={GuitarraFundo} alt="" className={styles.guitarraFundo}/>
            </div>
            <img src={Violao} alt="" className={styles.headerGuitarra}/>

            <nav className={styles.menu}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/QuemSomos">Quem somos</Link></li>
                    <li><Link to="/Instrumentos">Instrumentos</Link></li>
                    <li><Link to="/Endereco">Endereço</Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header