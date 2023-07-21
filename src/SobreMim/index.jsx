import React from 'react'
import PostModelo from 'componentes/PostModelo'
import styles from './SobreMim.module.scss'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}> Olá, eu sou o Rafael !</h3>

      <img
        src={fotoSobreMim}
        alt="Foto de Rafael"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo} >
        Olá, sou o Rafael, um profissional de tecnologia apaixonado pelo desenvolvimento web. Tenho experiência sólida em JavaScript Vanilla, HTML e CSS, o que me permite criar interfaces interativas e responsivas que proporcionam ótimas experiências de usuário.
      </p>

      <p className={styles.paragrafo} >
        Estou animado em começar minha jornada com React, uma biblioteca JavaScript amplamente reconhecida no mercado. Acredito que o React me permitirá criar aplicações web mais eficientes e escaláveis.
      </p>

      <p className={styles.paragrafo} >
        Além disso, estou me aprofundando no uso do Git, uma ferramenta essencial para o versionamento de código e colaboração em equipe. Com o Git, posso contribuir de forma eficaz em projetos conjuntos e acompanhar as alterações no código de forma organizada.
      </p>

      <p className={styles.paragrafo} >
        Minha abordagem proativa e minha habilidade em solucionar problemas são aspectos fundamentais do meu trabalho. Adoro enfrentar desafios técnicos e encontrar soluções criativas para eles. Sou capaz de analisar problemas de maneira aprofundada e encontrar as melhores alternativas para resolvê-los de forma eficiente.
      </p>

      <p className={styles.paragrafo} >
        Trabalhar em equipe é algo que valorizo muito. Tenho excelentes habilidades de comunicação verbal e escrita, o que me permite colaborar efetivamente com colegas de trabalho e transmitir minhas ideias de maneira clara e concisa. Acredito que a comunicação é a chave para um trabalho em equipe bem-sucedido.
      </p>

      <p className={styles.paragrafo} >
        Tenho uma mentalidade orientada a resultados e sou comprometido em entregar projetos de alta qualidade dentro dos prazos estabelecidos. Tenho uma forte ética de trabalho e estou sempre em busca de superar expectativas.
      </p>

      <p className={styles.paragrafo} >
        Estou entusiasmado em aplicar minhas habilidades técnicas e competências interpessoais para contribuir significativamente em projetos de desenvolvimento web. Estou pronto para enfrentar novos desafios e aprender continuamente no processo.
      </p>
    </PostModelo>
  )
}
