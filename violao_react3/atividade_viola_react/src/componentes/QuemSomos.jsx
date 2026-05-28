import styles from '../css/QuemSomos.module.css'
import Lugar from '../assets/imagens/imagens/loja.jpg'
function QuemSomos(){
    return(

        <section className={styles.quemsomos}>
            <div className={styles.conteudo}>
                <div className={styles.paragrafo}>
                    <h1>Nossa Loja - Instrumentos Musicais</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem autem asperiores quo sapiente reiciendis dolores est culpa natus, facere consequuntur, maxime sit aut architecto aliquid dolorem magnam, debitis quae ipsum.</p>
                </div>



                <div className={styles.imagem} >
                    <img src={Lugar} alt="" className={styles.imagemDoLocal} />
                </div>
            </div>
        </section>


    )
}
export default QuemSomos