import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Container } from '@/components/Container'

export function Tips() {
  return (
    <section
      id='tips'
      className='relative overflow-hidden bg-slate-50 py-20 sm:py-32'
    >
      <Container className='relative'>
        <h2
          id='tips-title'
          className='mb-10 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
        >
          Tips
        </h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1a-header'>
            <Typography>
              ¿Qué tipos de comprobantes electrónicos existen en Ecuador?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Existen 6 tipos de comprobantes: <br />
              <strong>Factura Electrónica</strong> <br />
              Es un documento que cumple con las especificaciones del Servicio
              de Rentas Internas, el mismo que se emite para detallar las
              ventas, los impuestos y las formas de pago. Este comprobante debe
              estar firmado electrónicamente y autorizado por el SRI.
              <br />
              <br />
              <strong>Retención Electrónica</strong> <br />
              Es un documento que permite al contribuyente retener el impuesto a
              la renta y/o el IVA a los proveedores de bienes y servicios. Este
              comprobante debe ser generado, firmado electrónicamente y
              autorizado por el SRI. <br />
              <br /> <strong>Nota de crédito electrónica </strong>
              <br />
              Es un documento emito para registrar devoluciones de producto o
              descuentos en ventas. Este comprobante debe ser generado, firmado
              electrónicamente y autorizado por el SRI. <br />
              <br /> <strong>Nota de débito electrónica</strong> <br />
              Es un documento que se emite para aumentar la deuda a un cliente
              por algún motivo especial. Este comprobante debe ser generado,
              firmado electrónicamente y autorizado por el SRI. <br />
              <br />
              <strong>Liquidación de compras electrónica</strong> <br />
              Es un documento que se emite cuando se adquiere bienes muebles y
              de servicios a personas naturales no obligadas a llevar
              contabilidad, ni inscritos en el Registro Único de Contribuyentes
              (RUC). <br />
              <br />
              <strong>Guía de remisión electrónica</strong> <br />
              Es un documento que se emite para transportar bienes, la misma que
              debe informar la cantidad de productos transportados y los datos
              del emisor y receptor de los mismos. Este comprobante debe ser
              generado, firmado electrónicamente y autorizado por el SRI.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel2a-header'>
            <Typography>
              ¿Cómo ver mis facturas electrónicas emitidas y recibidas en el
              SRI?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Con los siguientes pasos usted podrá verificar cualquier
              comprobante electrónico emitido o recibido.
              <ol className='list-decimal px-8'>
                <li>
                  Ingrese a la página{' '}
                  <a
                    href='https://www.sri.gob.ec'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.sri.gob.ec
                  </a>
                </li>
                <li>Seleccione Servicios en línea</li>
                <li>Digite el RUC, la contraseña y dele clic en Aceptar</li>
                <li>
                  Seleccione en la izquierda del navegador: Comprobantes
                  Electrónicos, Producción, Consultas
                </li>
                <li>
                  Clic en Recuperación de Comprobantes Electrónicos Autorizados
                </li>
                <li>
                  Ingrese la fecha de emisión, el origen de emisión, el estado
                  de autorización, el tipo de comprobante, el establecimiento,
                  el punto de emisión y finalmente damos clic en Buscar
                </li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel2a-header'>
            <Typography>
              Si tengo varios negocios con distintos RUC puedo utilizar el
              sistema para todos los negocios?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NO, en este caso deberá adquirir un plan para cada negocio
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </section>
  )
}
