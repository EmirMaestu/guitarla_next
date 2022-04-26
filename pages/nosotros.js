/* eslint-disable jsx-a11y/alt-text */
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
import Image from 'next/image'
const Nosotros = () => {
    return (
        <Layout pagina='Nosotros'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image
                        layout='responsive'
                        width={600}
                        height={450}
                        src='/img/nosotros.jpg'
                    />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus similique pariatur facere enim,
                            animi eius quis, saepe distinctio corrupti placeat
                            repellat rem nesciunt nulla consequatur maxime
                            error. Saepe, animi maiores. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Delectus dolore,
                            explicabo iusto eveniet sint unde illum ducimus
                            doloribus expedita magni sequi nihil, debitis
                            dolores eligendi in animi possimus laudantium id.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus similique pariatur facere enim,
                            animi eius quis, saepe distinctio corrupti placeat
                            repellat rem nesciunt nulla consequatur maxime
                            error. Saepe, animi maiores. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Delectus dolore,
                            explicabo iusto eveniet sint unde illum ducimus
                            doloribus expedita magni sequi nihil, debitis
                            dolores eligendi in animi possimus laudantium id.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
