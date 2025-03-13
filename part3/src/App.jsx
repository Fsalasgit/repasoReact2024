
import './App.css'
import Notas from './modulos/Notas'
import OnePiece from './modulos/OnePiece'
import OnePieceAxios from './modulos/OnePieceAxios'
import NotesAxios from './modulos/NotesAxios'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]


function App() {

  

  return (
    <>
      {/* <Notas props={notes}></Notas>
      <OnePieceAxios />
      <OnePiece /> */}
      <NotesAxios />
    </>
  )
}

export default App
