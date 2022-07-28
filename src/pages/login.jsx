import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <>
      <Head>
        <title>Ingreso - Tfactura</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Ingresa a tu cuenta
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              No tienes una?{' '}
              <Link
                href="/register"
                className="font-medium text-pink-500 hover:underline"
              >
                Registrate
              </Link>{' '}
              en una prueba gratuita.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Correo electrónico"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <TextField
            label="Contraseña"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Ingresa tu contraseña"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="slate"
              className="w-full"
            >
              <span>
                Ingresar
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
