import { useState } from "react";
import Counter from "./Counter";

function Estado() {
  //desestructurmos por que useState devuelve un array de 2 posiciones (valor, funcion)
  // Los hooks no pueden estar entre condicionales
    const [contador, setContador] = useState(0)

    //Funciones helppers

    const handleClick = () => {
      // setContador(prevContador => {
      //   return prevContador + 1
      // })
      setContador(contador +1)
    }

    const handleClickReset = () => {
      setContador(0)
    }

    const par = contador % 2 === 0
    const mensajePar = par ? "es par" : "es impar"


    return (
      <>
        <Counter number={contador}></Counter>


        <small>{mensajePar}</small><br></br>

        
        {/* <button onClick={() =>{


          // setContador(contador+1)


          // setContador(prevContador => {
          //   console.log(prevContador)
          //   return prevContador + 1
          // })

        }}>Incrementar antiguo</button> */}

        <button onClick={handleClick}>Incrementar</button>
        <button onClick={handleClickReset}>Reset</button>
      </>
    )
  }
  
  export default Estado
  