import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { monedas } from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const Input = styled.input`
  background-color: #03a7fedf; 
  border: none; 
  padding: 5px 50px;
  color: #FFF; 
  border-radius: 5px; 
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bolder; 
  transition: background-color 300ms ease; 
  width: 100%; 

  @media (min-width: 768px) {
    width: auto; 
  }

  &:hover {
    cursor: pointer; 
    background-color: #009df2bf; 
  }
`

const PosicionInput = styled.div`
  @media (min-width: 768px) {
    display: flex; 
    justify-content: end; 
  }
`

export default function Formulario({ setMonedas }) {
  const [ criptomonedas, setCriptomonedas ] = useState([])
  const [ alerta, setAlerta ] = useState(false)
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
  const [ cripto, SelectCriptos ] = useSelectMonedas('Elige tu Criptomoneda', criptomonedas)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map( cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name, 
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })

      setCriptomonedas(arrayCriptos)
    }
    consultarAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    
    if([moneda, cripto].includes('')) {
      setAlerta('Todos los campos son obligatorios')
      setTimeout(() => {
        setAlerta(false)
      }, 2000);
      return
    }

    setMonedas({
      moneda, 
      cripto
    })
  }

  return (
    <>
      { alerta && <Error>Todos los campos son obligatorios</Error>}
      <form
      onSubmit={handleSubmit}
      >
        <SelectMonedas />
        <SelectCriptos />
        <PosicionInput>
          <Input type="submit" value="Cotizar"/>
        </PosicionInput>
      </form>
    </>
    
  )
}
