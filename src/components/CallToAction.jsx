import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id='contact-us'
      className='relative overflow-hidden bg-pink-500 py-32'
    >
      <Image
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={backgroundImage}
        alt=''
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className='relative'>
        <section className='relative' aria-labelledby='contact-heading'>
          <div
            className='bg-warm-gray-50 absolute h-1/2 w-full'
            aria-hidden='true'
          />

          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* Contact information */}
                <div className='relative overflow-hidden bg-slate-900 py-10 px-6 sm:px-10 xl:p-12'>
                  {/* Decorative angle backgrounds */}
                  <div
                    className='pointer-events-none absolute inset-0 sm:hidden'
                    aria-hidden='true'
                  >
                    <svg
                      className='absolute inset-0 h-full w-full'
                      width={343}
                      height={388}
                      viewBox='0 0 343 388'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                        fill='url(#linear1)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear1'
                          x1='254.553'
                          y1='107.554'
                          x2='961.66'
                          y2='814.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden'
                    aria-hidden='true'
                  >
                    <svg
                      className='absolute inset-0 h-full w-full'
                      width={359}
                      height={339}
                      viewBox='0 0 359 339'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                        fill='url(#linear2)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear2'
                          x1='192.553'
                          y1='28.553'
                          x2='899.66'
                          y2='735.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block'
                    aria-hidden='true'
                  >
                    <svg
                      className='absolute inset-0 h-full w-full'
                      width={160}
                      height={678}
                      viewBox='0 0 160 678'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                        fill='url(#linear3)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear3'
                          x1='192.553'
                          y1='325.553'
                          x2='899.66'
                          y2='1032.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className='text-lg font-medium text-white'>
                    Información de contacto
                  </h3>
                  <p className='mt-6 max-w-3xl text-base text-teal-50'>
                    Sucre y Azuay esquina. Edificio Consorcio Médicos. Torre II.
                    <br />
                    <br />
                    Loja - Ecuador
                  </p>
                  <dl className='mt-8 space-y-6'>
                    <dt>
                      <span className='sr-only'>Phone number</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <PhoneIcon
                        className='h-6 w-6 flex-shrink-0 text-white'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>+593 98 105 7766</span>
                    </dd>
                    <dt>
                      <span className='sr-only'>Email</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <EnvelopeIcon
                        className='h-6 w-6 flex-shrink-0 text-white'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>infotfactura@toners.ec</span>
                    </dd>
                  </dl>
                </div>

                {/* Contact form */}
                <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                  <h3 className='text-warm-gray-900 text-lg font-medium'>
                    Déjanos un mensaje
                  </h3>
                  <form
                    action='#'
                    method='POST'
                    className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                  >
                    <div>
                      <label
                        htmlFor='first-name'
                        className='text-warm-gray-900 block text-sm font-medium'
                      >
                        Nombres
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-pink-500 focus:ring-pink-500'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='last-name'
                        className='text-warm-gray-900 block text-sm font-medium'
                      >
                        Apellidos
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className='border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-pink-500 focus:ring-pink-500'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='text-warm-gray-900 block text-sm font-medium'
                      >
                        Correo Electrónico
                      </label>
                      <div className='mt-1'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          className='border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-pink-500 focus:ring-pink-500'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='phone'
                          className='text-warm-gray-900 block text-sm font-medium'
                        >
                          Teléfono
                        </label>
                        <span
                          id='phone-optional'
                          className='text-warm-gray-500 text-sm'
                        >
                          Opcional
                        </span>
                      </div>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='phone'
                          id='phone'
                          autoComplete='tel'
                          className='border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-pink-500 focus:ring-pink-500'
                          aria-describedby='phone-optional'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='message'
                          className='text-warm-gray-900 block text-sm font-medium'
                        >
                          Mensaje
                        </label>
                        <span
                          id='message-max'
                          className='text-warm-gray-500 text-sm'
                        >
                          Max. 500 caracteres
                        </span>
                      </div>
                      <div className='mt-1'>
                        <textarea
                          id='message'
                          name='message'
                          rows={4}
                          className='border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-pink-500 focus:ring-pink-500'
                          aria-describedby='message-max'
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2 sm:flex sm:justify-end'>
                      <button
                        type='submit'
                        className='mt-2 inline-flex w-full items-center justify-center rounded-full border border-transparent bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto'
                      >
                        Iniciar Conversación
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}
