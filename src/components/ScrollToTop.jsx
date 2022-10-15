import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='fixed bottom-8 right-8'>
      <button
        type='button'
        onClick={scrollToTop}
        className={clsx(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center rounded-full bg-pink-500 p-3 text-white shadow-sm transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2'
        )}
      >
        <ArrowSmallUpIcon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  )
}
