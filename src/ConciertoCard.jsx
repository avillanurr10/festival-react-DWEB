import { useState } from 'react'

export default function ConciertoCard({ concierto }) {
  const { artista, genero, horario } = concierto
  const [mensaje, setMensaje] = useState('')
  const [clics, setClics] = useState(0)

  function probarClic() {
    const confirmacion = `Clic de prueba: ${artista}`
    console.info(confirmacion)
    setMensaje(confirmacion)
  }
  /*
  *Con valor: le dices a React «pon el contador en 5».
  *Con función: le dices «suma 1 al número que lleve el contador».

  */

  function contarClics() {
    setClics(clics+1)
  }

  return (
    <article className="concierto">
      <h3>{artista}</h3>
      <dl>
        <div>
          <dt>Género</dt>
          <dd>{genero}</dd>
        </div>
        <div>
          <dt>Horario</dt>
          <dd><time dateTime={horario}>{horario}</time></dd>
        </div>
      </dl>

      <button type="button" onClick={contarClics}>
        Conteo de clics
      </button>

      <p>Has pulsado el boton {clics} veces</p>

      <button type="button" onClick={probarClic}>
        Probar clic
      </button>

      <p className="mensaje" role="status">{mensaje}</p>
    </article>
  )
}