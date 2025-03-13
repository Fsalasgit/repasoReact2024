import { useEffect, useState } from "react"
import OnePieceBoat from "./OnePieceBoat"


function OnePiece(){

    const [boats, setBoats] = useState([])
    
    useEffect(() => {
        fetch('https://api.api-onepiece.com/v2/boats/en')
            .then(response => response.json())
            .then((json) => setBoats(json))
    },[])


    return(
        <>
            <ol>
                {boats.map((boat) => 
                    <OnePieceBoat key={boat.id} name={boat.name} type={boat.type}/>
                )}
            </ol>
        </>
    )
}

export default OnePiece
