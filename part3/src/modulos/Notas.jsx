import { useState } from 'react';
import Nota from './Nota';

function Notas({props}){
    const [notes, setNotes] = useState(props)
    const [newNote, setNewNote] = useState('')

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const noteToAddToState = {
            id: notes.length +1,
            content: newNote,
            important: Math.random < 0.5

        }

        setNotes([...notes,noteToAddToState])
        setNewNote('')

    }



    return(<>
        <h1>Notas</h1>

            <ol>
                {notes.map((note) => 
                    <Nota key={note.id} content={note.content} important={note.important}/>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote}></input>
                <button>Crea nota</button>
            </form>

        </>


    )

}

export default Notas