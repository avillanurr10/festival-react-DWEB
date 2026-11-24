import Cabecera from './Cabecera.jsx'
import ConciertoCard from './ConciertoCard.jsx'
import './App.css'

// Datos ficticios del cartel.
const concierto = {
  artista: 'Órbita Violeta',
  genero: 'Indie pop',
  horario: '21:30',
}

export default function App() {
  return (
    <>
      <Cabecera />
      <main className="cartel" aria-labelledby="titulo-cartel">
        <h2 id="titulo-cartel">Cartel</h2>
        <ConciertoCard concierto={concierto} />
      </main>
    </>
  )
}
