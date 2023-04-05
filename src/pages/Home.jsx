import React from 'react'
import { Caja, Cards, Esqueleto, Grilla, Product, Tipografia, TiposAlertas } from '../components'


export const Home = () => {
  return (
    <div>
        <Tipografia />
        <br />
        <hr />
        <Caja />
        <br />
        <hr />
        <Product />
        <br />
        <hr />
        <Cards />
        <br />
        <hr />
        <Grilla />
        <br />
        <hr />
        <TiposAlertas />
        <br />
        <hr />
        <Esqueleto/>
        <br />
        <hr />
        
    </div>
  )
}
