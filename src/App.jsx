import { useState, useEffect } from "react";
import styled from "styled-components"
import Cotizacion from "./components/Cotizacion";
import Formulario from "./components/Formulario"
import Spinner from "./components/Spinner";
import ImagenCriptos from "./img/imagen-criptos.png"

const Contenedor = styled.div`
  max-width: 992px; 
  margin: 0 auto; 
  @media (min-width: 768px) {
    display: flex; 
    column-gap: 50px; 
  }
`

const Heading = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: #FFF; 
  text-align: center; 

  &::after {
    content: ''; 
    display: block; 
    width: 200px; 
    height: 3px; 
    background-color: white; 
    margin: 5px auto; 
  }
`

const Imagen = styled.img`
  max-width: 400px; 
  width: 80%; 
  margin: 0 auto;
  display: block; 
`

function App() {
  const [ monedas, setMonedas ] = useState({})
  const [ cotizacion, setCotizacion ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length !== 0) {
      const consultarCriptos = async () => {
        setCargando(true)
        setCotizacion({})
        const { moneda, cripto } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[cripto][moneda])
        setCargando(false)
      }
      consultarCriptos()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCriptos} />

      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />

        {cargando && <Spinner />}
        {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion}/>}
      </div>
    </Contenedor>
  )
}

export default App
