import { useEffect, useState } from "react";
import NoteList from "./NoteList";
import { getAllnotes } from "./services/notes/getAllNotes";
import { createNotes } from "./services/notes/createNotes";



function NotesAxios(){

    const [notes, setNotes] = useState([])
    
    useEffect(() => {

        getAllnotes().then((notes) => {
            setNotes(notes)
        })
    },[])

    const [newNote, setNewNote] = useState('')

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const noteToAddToState = {
            title: newNote,
            body: newNote,
            userId: 1
        }

        createNotes(noteToAddToState).then((newNote) =>{
            setNotes((prevNotes) => prevNotes.concat(newNote))
        })

        setNewNote('')

    }



    return(
        <>
            <h1>Notas</h1>
            <ol>
                {notes.map((note) => 
                    <NoteList key={note.id} title={note.title}/>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote}></input>
                <button>Crea nota</button>
            </form>
        </>
    )
}

export default NotesAxios