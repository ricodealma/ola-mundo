import React from 'react'
import styles from './Banner.module.scss'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá,Mundo !
            </h1>
            <p className={styles.paragrafo}>
            Eu sou Rafael, estudante de Análise e Desenvolvimento de Sistemas, apaixonado por Frontend (Javascript, HTML e CSS). Estou aprendendo React e versionamento Git. Sou proativo, criativo, trabalho bem em equipe. Busco novos desafios e oportunidades para aprender e crescer na minha jornada profissional e pessoal.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido} 
                aria-hidden = {true}
                alt = ''
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto} 
                alt="Foto de Rafael sério" 
            />
        </div>
    </div>
  )
}
