import React, { useState } from 'react';
import styles from './Presentation.module.css';
import { Scroll, ArrowRight, ArrowLeft } from 'phosphor-react';
import Image from 'next/image';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const plans = [
    {
      name: 'Básico',
      description: 'Consulta unica c/ dieta personalizada',
      value: 'R$ 50',
    },
    {
      name: 'Intermediário',
      description: 'Acompanhamento mensal c/ dieta personalizada',
      value: 'R$ 80',
    },
    {
      name: 'Avançado',
      description: 'Dieta personalizada + Acompanhamento semanal',
      value: 'R$ 120',
    },
    {
      name: 'Premium',
      description: 'Dieta personalizada + Acompanhamento diário',
      value: 'R$ 200',
    },
    {
      name: 'Nutrição Esportiva',
      description: 'Dieta para atletas + Acompanhamento especializado',
      value: 'R$ 150',
    },
    {
      name: 'Emagrecimento',
      description: 'Dieta focada em emagrecimento + Acompanhamento semanal',
      value: 'R$ 90',
    },
    {
      name: 'Vegan',
      description: 'Dieta vegana + Acompanhamento mensal',
      value: 'R$ 100',
    },
    {
      name: 'Personalizado',
      description: 'Dieta personalizada + Acompanhamento personalizado',
      value: 'R$ 250',
    },
  ];

  const itemsPerPage = 4; // Quantidade de planos exibidos por tela

  const totalSlides = Math.max(plans.length - itemsPerPage + 1, 1);

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const startIndex = currentSlide;
  const endIndex = startIndex + itemsPerPage;
  const visiblePlans = plans.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles.container}>
        <span className={styles.skill}>
          <Scroll weight='duotone' />
          <h4>Confira os planos.</h4>
          <div className={styles.nav}>
            <button onClick={handlePreviousSlide} disabled={currentSlide === 0}>
              <ArrowLeft weight='fill' />
            </button>
            <button
              onClick={handleNextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <ArrowRight weight='fill' />
            </button>
          </div>
        </span>
        <div className={styles.plans}>
          {visiblePlans.map((plan, index) => (
            <div key={index} className={styles.itemPlans}>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
              <span>{plan.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.description}>
          <div className={styles.woman}>
            <Image
              src='/images/woman.png'
              width={1280}
              height={1280}
              quality={100}
              alt=''
              className={styles.marta}
            />
          </div>

          <div className={styles.text}>
            <h1>Acompanhamento personalizado para sua saúde.</h1>
            <h2>Planos de nutrição feitos sob medida.</h2>
            <p>
              Oferecemos planos personalizados de nutrição para atender às suas
              necessidades específicas. Nossa equipe de especialistas irá criar
              um programa adaptado às suas preferências e objetivos, para que
              você alcance uma alimentação mais saudável e equilibrada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
