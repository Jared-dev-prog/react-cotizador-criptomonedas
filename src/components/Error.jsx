import React from 'react'
import styled from 'styled-components'

const Alerta = styled.div`
  background-color: #e86161; 
  border-radius: 5px; 
  padding: 10px 0;
  margin-bottom: 10px; 
  text-align: center; 
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  color: #FFF; 
  font-weight: bold;   
`

export default function Error({ children }) {
  return (
    <Alerta>
      {children}
    </Alerta>
  )
}
