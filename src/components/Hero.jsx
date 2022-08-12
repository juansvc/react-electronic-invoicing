import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logo1 from '@/images/logos/1.svg'
import logo2 from '@/images/logos/2.svg'
import logo3 from '@/images/logos/3.svg'
import logo4 from '@/images/logos/4.svg'
import logo5 from '@/images/logos/5.svg'
import logo6 from '@/images/logos/6.svg'
import logo7 from '@/images/logos/7.svg'
import logo8 from '@/images/logos/8.svg'
import logo9 from '@/images/logos/9.svg'
import logo10 from '@/images/logos/10.svg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export function Hero() {
  const handleDragStart = (e) => e.preventDefault()
  const items = [
    <Image key={1} src={logo1} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={2} src={logo2} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={3} src={logo3} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={4} src={logo4} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={5} src={logo5} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={6} src={logo6} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={7} src={logo7} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={8} src={logo8} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={9} src={logo9} onDragStart={handleDragStart} alt="" role="presentation" />,
    <Image key={10} src={logo10} onDragStart={handleDragStart} alt="" role="presentation" />,
  ]

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 6 },
  }

  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Facturación{' '}
        <span className="relative whitespace-nowrap text-pink-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-600/40"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">electrónica</span>
        </span>{' '}
        en la nube para cualquier
        negocio o persona.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Tfactura es de fácil manejo e intuitivo, una poderosa herramienta que transforma tu negocio. Todos los documentos electrónicos son autorizados por el SRI (facturas, retenciones, notas de crédito, guías de remisión y más..)
      Ofrecemos soluciones automatizadas para el control y simplificación de los procesos contables, comerciales, administrativos y gerenciales de pequeñas y medianas empresas.
      ¡¡Este es el momento de explorar un sistema de última generación!!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Obten un mes de prueba</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-pink-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Ver video</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Empresas ecuatorianas que confían y trabajan diariamente con Tfactura
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <AliceCarousel 
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={2000}
            animationDuration={1000}
            infinite
            responsive={responsive}
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items} />
        </ul>
      </div>
    </Container>
  )
}
