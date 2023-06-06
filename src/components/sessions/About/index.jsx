import Image from 'next/image';
import styles from './About.module.css';
import { MapPinLine, Buildings, NavigationArrow } from 'phosphor-react';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>
          <MapPinLine weight='duotone' /> Aonde fica?
        </h1>
        <h2>
          <Buildings weight='fill' />
          Consultorio
        </h2>
        <h4>AV. PAULISTA, SP. NUMERO 999.</h4>
        <p>
          Ficamos localizados na Avenida Paulista na Cidade e Estado de São
          Paulo, no consultorio é no predio N.999 e fica no Decimo quinto andar.
        </p>
        <p>
          Funcionamos das 08:00 ás 18:00, precisando agendar por telefone a
          consulta.
        </p>

        <button>
          <NavigationArrow weight='fill' />
          Ir para local
        </button>
      </div>
    </div>
  );
}
