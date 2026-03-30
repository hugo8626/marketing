"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "¿El precio bajo significa mala calidad?",
    answer:
      "No. Trabajamos con procesos optimizados y sin estructuras innecesarias. Eso nos permite ofrecer precios accesibles sin bajar la calidad.",
  },
  {
    question: "¿Puedo ampliar la web más adelante?",
    answer:
      "Sí. Todas nuestras webs están pensadas para crecer contigo. Puedes añadir secciones o funcionalidades cuando lo necesites.",
  },
  {
    question: "¿Desaparecéis después de entregar?",
    answer:
      "No. Seguimos contigo después de la entrega. Ofrecemos soporte y acompañamiento para que tu web siga funcionando.",
  },
  {
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Depende del proyecto, pero una One Page puede estar lista en pocos días. Trabajamos rápido sin sacrificar calidad.",
  },
  {
    question: "¿Necesito saber de tecnología o diseño?",
    answer:
      "No. Nos encargamos de todo y te explicamos el proceso de forma clara. Tú te centras en tu negocio.",
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
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c79a3b] sm:text-sm">
          FAQ
        </span>

        <h2 className="mb-8 text-3xl font-black tracking-tight text-black sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
          Preguntas frecuentes
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