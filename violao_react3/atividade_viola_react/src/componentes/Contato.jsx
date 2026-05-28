import styles from '../css/Contato.module.css'
import Whats from '../assets/imagens/imagens/whats.png'
import Insta from '../assets/imagens/imagens/insta.png'
import Face from '../assets/imagens/imagens/face.png'
function Contato(){
    return(

        <section className={styles.cor}>
    <section className={styles.container}>
        <section className={styles.areaDeDados}>

            <div className={styles.inserir}>

            <div className={styles.nome}>
                <label>Entre com seu nome:</label>
                <input type="text" placeholder="Digite seu nome aqui!" />
            </div>


            <div className={styles.nome}>
                <label>Entre com seu email:</label>
                <input type="email" placeholder="Entre com seu email!" />
            </div>

            <textarea 
            placeholder="Faça seu pedido por aqui:" 
            className={styles.pedido}
            />

             <button>ENVIAR!</button>
            </div>

           


        </section>

        <section className={styles.redesociais}>

            <h2>Acesse também nossas redes socias:</h2>
            <div className={styles.redes}>
                <img src={Whats} className={styles.icones} />
                <img src={Insta} className={styles.icones} />
                <img src={Face}  className={styles.icones} />
            </div>
            
        </section>
    </section>
    </section>
    )
}
export default Contato