import {useState} from 'react';
// import {} from './Lista.style.js'

function Lista() {

    const lista = localStorage.getItem('inventario')

    return(

      <h1>{lista}</h1>
  

)
}

export default Lista;