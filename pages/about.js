import Image from "next/image";

import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Página desenvolvida por <b>Fillipe Oliveira</b> em conclusão com o Curso Next.js de Matheus Battisti (Hora de Codar).
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  )
}

export default About;