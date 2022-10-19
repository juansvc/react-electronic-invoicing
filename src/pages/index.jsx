import Head from 'next/head'
import dynamic from 'next/dynamic'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
// import { Testimonials } from '@/components/Testimonials'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Tips } from '@/components/Tips'

export default function Home() {
  const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
  return (
    <>
      <Head>
        <title>Tfactura - Sistema de facturación electrónica</title>
        <meta
          name='description'
          content='Tfactura - Sistema de facturación electrónica.'
        />
      </Head>
      <Header />
      <main>
        <ScrollToTop />
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <Testimonials /> */}
        <Pricing />
        <Faqs />
        <CallToAction />
        <Tips />
      </main>
      <Footer />
    </>
  )
}
