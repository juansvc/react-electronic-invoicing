import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '¿Qué necesito para facturar electrónicamente con Tfactura?',
      answer: (
        <ul className='list-disc'>
          <li>
            Tener habilitado el ambiente de pruebas y producción en página del
            SRI
          </li>
          <li>Firma electrónica tipo archivo .p12</li>
          <li>Conexión a Internet</li>
          <li>Logotipo empresa</li>
          <li>Certificado de Ruc</li>
        </ul>
      ),
    },
    {
      question:
        '¿TFactura autoriza los comprobantes de forma oficial con el SRI?',
      answer:
        'Por supuesto, nuestro sistema de Facturación Electrónica permite emitir documentos con validez tributaria.',
    },
    {
      question: '¿Si vivo en otra ciudad puedo usar el Sistema?',
      answer:
        '¿TFactura es un Sistema de Facturación Electrónica (en Línea) que funciona en cualquier parte del pais.',
    },
    {
      question:
        '¿Para utilizar el sistema de Tfactura necesito que se me instale en mi computadora?',
      answer:
        'NO el sistema está en la nube por lo que puede abrirla desde su navegador de preferencia en cualquier parte del país mientras tenga internet y un dispositivo (recomendado Tablet, laptop, Computadora Escritorio)',
    },
    {
      question:
        '¿Dispone de planes contables con el sistema de Facturación electrónica TFactura?',
      answer:
        'Tfactura cuenta con un plan contable que se ajusta a los requerimientos de tu empresa, para una correcta toma de decisiones financieras',
    },
  ],
  [
    {
      question:
        'Tengo firma electrónica en Token ¿me sirve este para facturación electrónica con Tfactura?',
      answer:
        'No, solamente sirve la firma electrónica en archivo, ya que esta se carga en tu sistema de Facturación',
    },
    {
      question: '¿Si ocurre algún inconveniente, TFactura me brindará Soporte?',
      answer:
        'Si, nosotros brindamos soporte en línea en horarios laborables a todo el país',
    },
    {
      question:
        '¿Yo solo necesito enviar únicamente Facturas, no necesito inventario, ni enviar otros comprobantes, ¿tienen algún plan que se ajuste?',
      answer:
        'Si, Tfactura tiene un plan LITE económico solo para él envió únicamente de facturas',
    },
    {
      question:
        '¿Yo tengo dos impresoras diferentes, podría imprimir comprobantes con cualquiera de ellas?',
      answer:
        'Si nosotros tenemos diferentes comprobantes de impresión, Formatos A4, A5, Impresoras Térmicas, e incluso personalizamos para el cliente.',
    },
  ],
  [
    {
      question:
        '¿Si el SRI realiza algún cambio en la facturación debo de cancelar por esa actualización en mi sistema?',
      answer:
        'No TFactura realiza actualizaciones permanentes a todos nuestros usuarios de manera Gratuita',
    },
    {
      question:
        '¿En sus planes puedo visualizar cuanto he vendido al día, cuentas por cobrar y por pagar?',
      answer:
        'Si, contamos con planes que tienen reportes de Caja, cuentas por pagar y Cobrar, así como reportes de inventarios, además de facturas puedes realizar Cotizaciones, Notas de entrega, entre otros.',
    },
    {
      question: '¿Cuáles son los costos de implementación del sistema?',
      answer:
        'Si de adquiere mensual el costo es de 30$ +IVA, pero si se adquiere el plan anual la implementación no tiene costo ',
    },
    {
      question:
        '¿Qué tiempo se tarda en crear mi sitio si ya he adquirido mi plan de facturación electrónica en Tfactura?',
      answer:
        'Por lo general con un máximo de una Hora tendrá su sistema implementado',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='relative overflow-hidden bg-slate-50 py-20 sm:py-32'
    >
      <Image
        className='absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4'
        src={backgroundImage}
        alt=''
        width={1558}
        height={946}
        unoptimized
      />
      <Container className='relative'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faq-title'
            className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
          >
            Preguntas frecuentes
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Si no encuentras lo que está buscando, envía un correo electrónico a
            nuestro equipo de soporte y, alguien se pondrá en contacto contigo.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3'
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='flex flex-col gap-y-8'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='font-display text-lg leading-7 text-slate-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-slate-700'>{faq.answer}</p>
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
