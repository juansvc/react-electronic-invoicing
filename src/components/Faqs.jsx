import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '¿TFactura autoriza los comprobantes de forma oficial con el SRI?',
      answer:
        'Por supuesto, nuestro sistema de Facturación Electrónica permite emitir documentos con validez tributaria.',
    },
    {
      question: '¿Qué necesito para comenzar a usar el plan?',
      answer:
        'Solamente tu firma electrónica autorizada, logotipo y RUC en formato PDF.',
    },
  ],
  [
    {
      question: '¿Prestan ayuda si tengo alguna duda?',
      answer: 'Efectivamente, nuestro Dpto. de Sistemas presta ayuda remota cuando el cliente lo necesite (dentro de horarios de oficina).',
    },
  ],
  [
    {
      question: '¿Si vivo en otra ciudad puedo usar el Sistema?',
      answer:
        '¿TFactura es un Sistema de Facturación Electrónica (en Línea) que funciona en cualquier parte del pais.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Si no encuentras lo que está buscando, envía un correo electrónico a nuestro equipo de soporte
          y, alguien se pondrá en contacto contigo.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
