import { useEffect, useState } from "react";
import OnePieceBoat from "./OnePieceBoat";
import axios from "axios";



function OnePieceAxios(){

    const [boats, setBoats] = useState([])
    
    useEffect(() => {

        axios.get('https://api.api-onepiece.com/v2/boats/en')
            .then((response) => {
                const {data} = response
                setBoats(data)
            })
    },[])


    return(
        <>
            <h1>Pedido con axios</h1>
            <ol>
                {boats.map((boat) => 
                    <OnePieceBoat key={boat.id} name={boat.name} type={boat.type}/>
                )}
            </ol>
        </>
    )
}

export default OnePieceAxios
