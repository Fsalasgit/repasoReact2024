import { useState } from "react"
import WarningNoteUse from "./WarningNoteUse"
import ListOfClicks from "./ListOfClicks"

function EstadoArray() {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1
        }
        setClicks(newClicks)
        setAll(allClicks.concat('L'))
    }

    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1
        }
        setClicks(newClicks)
        setAll(allClicks.concat('R'))
    }

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
            {allClicks.length === 0 ? <WarningNoteUse/> : <ListOfClicks clicks={allClicks}/>}
            
        </div>
    )
} 

export default EstadoArray