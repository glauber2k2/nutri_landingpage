import Image from 'next/image';
import styles from './Home.module.css';
import { WhatsappLogo, GraduationCap, Barbell } from 'phosphor-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <span>
          <Image src='/images/iconnav.png' width={1280} height={1280} alt='' />
          <h1>
            Marta <b>Nutricionista</b>
          </h1>
        </span>
        <span>
          <p>Planos</p>
          <p>Consultorio</p>
          <button>
            <WhatsappLogo size={26} weight='fill' /> Agendar consulta
          </button>
        </span>
      </nav>

      <main>
        <div className={styles.title}>
          <h1>
            Transforme seu corpo, com uma vida <span>saudavel</span> !
          </h1>
          <p>
            Transforme sua vida através da alimentação saudável e equilibrada.
            Receba orientações personalizadas para atingir seus objetivos de
            saúde. Com a expertise da nutricionista Marta, você terá acesso a
            planos alimentares adaptados às suas necessidades e preferências.
          </p>
        </div>

        <div className={styles.circle}>
          <Image
            src='/images/marta.png'
            width={1280}
            height={1280}
            quality={100}
            alt=''
            className={styles.marta}
          />
          <Image
            src='/images/circlefruit.png'
            width={1280}
            height={1280}
            quality={100}
            alt=''
            className={styles.fruits}
          />
        </div>
      </main>

      <footer>
        <h1>
          <GraduationCap size={32} weight='fill' />
          <span>Doutora em Nutrição</span>
        </h1>
        <h1>
          <Barbell size={32} weight='fill' />
          <span>Nutri Esportiva</span>
        </h1>
      </footer>
    </div>
  );
}
