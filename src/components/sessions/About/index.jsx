import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.about}>
        <h1>Aonde fica?</h1>
        <h2>Consultorio</h2>

        <h4>AV. PAULISTA, SP. NUMERO 999.</h4>
        <p>
          Ficamos localizados na Avenida Paulista na Cidade e Estado de São
          Paulo, no consultorio é no predio N.999 e fica no Decimo quinto andar.
        </p>

        <p>
          Funcionamos das 08:00 ás 18:00, precisando agendar por telefone a
          consulta.
        </p>
      </div>

      <Image
        src='/images/vetor.png'
        width={1280}
        height={1280}
        quality={100}
        alt=''
      />
    </div>
  );
}
