import styles from '../css/Instrumentos.module.css'
import Violao from '../assets/imagens/imagens/guitarrinha.jpg'
function Instrumentos(){
    return(

        <section className={styles.container}>
            <div className={styles.imagens}>
                <div><img src={Violao} alt="" className={styles.violao}/>
                    <p>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante <br></br>
                        <span>R$989,50</span>
                    </p>
                </div>

                <div><img src={Violao} alt="" className={styles.violao}/>
                <p>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante <br></br>
                    <span>R$989,50</span>
                </p>
                </div>


                <div><img src={Violao} alt="" className={styles.violao}/>
                <p>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante <br></br>
                    <span>R$989,50</span>
                </p>
                </div>


                <div><img src={Violao} alt="" className={styles.violao}/>
                <p>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante <br></br>
                    <span>R$989,50</span>
                </p>
                </div>
            </div>
        </section>

    )
}
export default Instrumentos