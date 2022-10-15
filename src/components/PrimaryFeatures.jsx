import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Facturas',
    description:
      'Nuestro sistema te ayudará agilizar el proceso de ventas de tu negocio. Tfactura es totalmente intuitivo, agiliza tus procesos en crear facturas, cotizaciones, guías de remisión, retenciones, liquidación de compras, notas de débito, notas de crédito.',
    image: screenshotPayroll,
  },
  {
    title: 'Productos y Servicios',
    description:
      'Fácil creación de productos y servicios, manejo de stock e inventarios que se adaptan a todos los tipos de negocios.',
    image: screenshotExpenses,
  },
  {
    title: 'Clientes y Proveedores',
    description:
      'Maneja de forma ágil la información completa de los clientes y proveedores.',
    image: screenshotVatReturns,
  },
  {
    title: 'Contabilidad',
    description:
      'La contabilidad en Tfactura esta basada en reglas preconfiguradas en donde la información contable se va generando automáticamente por detrás, sin requerir esfuerzos adicionales en la operación habitual de los procesos cotidianos del negocio. El módulo de contabilidad está presente en planes personalizado.',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden bg-pink-500 pt-20 pb-28 sm:py-32'
    >
      <Image
        className='absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
        src={backgroundImage}
        alt=''
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl'>
            Características de los módulos del Sistema de Facturación
            Electrónica TFactura.
          </h2>
          <p className='mt-6 text-lg tracking-tight text-blue-100'>
            Mantiene tus cuentas bajo control para el buen funcionamiento de tu
            negocio. <br />
            Si buscas un control más eficiente para tu negocio, mejorar la
            administración, ser más competitivo, agilizar procesos, reducir
            error humano, centralizar la información en un solo lugar para tener
            acceso a ella fácilmente y aumentar tus ventas. Con un sistema para
            punto de venta lo podes lograr.
          </p>
        </div>
        <Tab.Group
          as='div'
          className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                <Tab.List className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-pink-500 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl' />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className='lg:col-span-7'>
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className='relative sm:px-6 lg:hidden'>
                      <div className='absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
                      <p className='relative mx-auto max-w-2xl text-base text-white sm:text-center'>
                        {feature.description}
                      </p>
                    </div>
                    <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                      <Image
                        className='w-full'
                        src={feature.image}
                        alt=''
                        priority
                        sizes='(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem'
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
