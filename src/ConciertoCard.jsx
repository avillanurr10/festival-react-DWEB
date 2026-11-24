import { useState } from 'react'

export default function ConciertoCard({ concierto }) {
  const { artista, genero, horario } = concierto
  const [mensaje, setMensaje] = useState('')

  /*
   * El manejador se ejecuta al pulsar el botón.
   * El estado actualiza el mensaje que muestra React.
   */
  function probarClic() {
    const confirmacion = `Clic de prueba: ${artista}`
    console.info(confirmacion)
    setMensaje(confirmacion)
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
      <button type="button" onClick={probarClic}>Probar clic</button>
      <p className="mensaje" role="status">{mensaje}</p>
    </article>
  )
}
