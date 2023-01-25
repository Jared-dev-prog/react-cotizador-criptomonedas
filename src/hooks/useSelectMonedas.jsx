import { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: #FFF; 
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold; 
  display: block; 
  margin-bottom: 10px;
  font-size: 20px;  
`

const Select = styled.select`
  min-width: 100%; 
  padding: 5px 0; 
  border-radius: 5px; 
  color: #747474;
  margin-bottom: 20px;  
`

export default function useSelectMonedas( label, opciones ) {
  const [ state, setState ] = useState('')

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map(opcion => (
          <option value={opcion.id} key={opcion.id}>{opcion.nombre}</option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectMonedas ]
}
