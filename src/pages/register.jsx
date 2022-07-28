import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Empieza gratis
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Ya estás registrado?{' '}
              <Link
                href="/login"
                className="font-medium text-pink-500 hover:underline"
              >
                Ingresa
              </Link>{' '}
              a tu cuenta.
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="Nombre *"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Apellido *"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Correo electrónico *"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Contraseña *"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <TextField
            className="col-span-full"
            label="Razón social *"
            id="razon_social"
            name="razon_social"
            type="text"
            required
          />
          <TextField
            label="RUC *"
            id="ruc"
            name="ruc"
            type="text"
            required
          />
          <TextField
            label="Número celular *"
            id="celular"
            name="celular"
            type="number"
            required
          />
          <SelectField
            className="col-span-full"
            label="Tipo de régimen *"
            id="tipo_regimen"
            name="tipo_regimen"
            required
          >
            <option>Régimen Rimpe Emprendedor</option>
            <option>Régimen General</option>
            <option>Desconozco</option>
          </SelectField>
          <SelectField
            className="col-span-full"
            label="Tipo de plan"
            id="tipo_plan"
            name="tipo_plan"
          >
            <option>LITE</option>
            <option>F20</option>
            <option>F50</option>
            <option>F100</option>
            <option>F-ilimitado</option>
            <option>Contable</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="slate"
              className="w-full"
            >
              <span>
                Crear cuenta
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
