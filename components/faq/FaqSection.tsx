"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "  El precio depende de lo que necesite tu negocio  Trabajamos con webs desde 430€, pensadas para empezar a captar clientes desde el primer momento.  ",
  },
  {
    question: "¿Es buena idea hacer una web barata?",
    answer:
      " Depende de lo que busques.  Si solo necesitas presencia, puede servir. Pero si quieres conseguir clientes, necesitas una web bien planteada, pensada para posicionar y convertir.  ",
  },
  {
    question: "¿Cuánto tarda en posicionarse una web en Google?",
    answer:
      "  Depende del sector y la competencia.    Desde el inicio, la web queda preparada para posicionarse, pero los resultados suelen verse a medio plazo.    ",
  },
  {
    question: "¿Mi web puede conseguir clientes?",
    answer:
      "Sí, si está bien planteada. Una web que transmite confianza y guía al usuario puede convertirse en un canal constante de contactos.",
  },
  {
    question: "¿Cómo sé si esto va a funcionar en mi caso?",
    answer:
      "Es una duda normal. Analizamos tu negocio y planteamos una web adaptada a tu situación. Si existe demanda, la web puede ayudarte a generar oportunidades reales.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="section-grey px-6 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20 lg:py-30">
      <div className="mx-auto w-full max-w-4xl">
        <span className="eyebrow"> 
          Resolvemos tus dudas
        </span>

        <h2 className="mb-8 text-3xl font-black tracking-tight text-black sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
          Preguntas frecuentes antes de crear tu web
        </h2>

        <div className="border-t border-black/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="pr-2 text-sm font-medium leading-6 text-black sm:text-base md:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`block shrink-0 text-base leading-none text-black transition-transform duration-500 ease-in-out sm:text-lg ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ˅
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-sm leading-7 text-black/70 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}