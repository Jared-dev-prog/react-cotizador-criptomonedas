import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  column-gap: 10px; 
`

const ImagenCripto = styled.img`
  width: 100px; 
`

const Precio = styled.p`
  color: #FFF; 
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  font-size: 18px;  
`

const Informacion = styled.p`
  color: #FFF;
  font-family: 'Nunito Sans', sans-serif; 
  font-weight: 600; 
`

export default function Cotizacion({cotizacion}) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
  return (
    <Contenedor>
      <ImagenCripto src={`https://www.cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Informacion>Precio más alto del día: <span>{HIGHDAY}</span></Informacion>
        <Informacion>Precio más bajo del día: <span>{LOWDAY}</span></Informacion>
        <Informacion>Variación últimas 24 horas:  <span>{CHANGEPCT24HOUR}</span></Informacion>
        <Informacion>Última actualización: <span>{LASTUPDATE}</span></Informacion>
      </div>
      
    </Contenedor>
  )
}
