import styles from '../css/Footer.module.css'
import Whatsapp from '../assets/imagens/imagens/whats.png'
import Instagram from '../assets/imagens/imagens/insta.png'
import Facebook from '../assets/imagens/imagens/face.png'
function Footer (){
    return(

        <footer>
            <div className={styles.endereco}>
                <p>Nossa Loja - Instrumentos Musicais</p>
                <p2> Rua tito, 54 - Lapa </p2>
                <p3>São paulo - Brasil</p3>
            </div>
            <div className={styles.redesSocias}>
                <img src={Whatsapp} alt="" className={styles.whats}/>
                <img src={Instagram} alt="" className={styles.insta} />
                <img src={Facebook} alt="" className={styles.face}/>
            </div>

        </footer>


    )
}
export default Footer
