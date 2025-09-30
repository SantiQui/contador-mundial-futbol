import React, { useEffect, useState } from "react";
import "./App.css";

const FECHA_MUNDIAL = new Date("2026-06-10T00:00:00");

function diasFaltantes(fechaObjetivo) {
  const ahora = new Date();
  const diferencia = fechaObjetivo.getTime() - ahora.getTime();
  return Math.max(0, Math.ceil(diferencia / (1000 * 60 * 60 * 24)));
}

const ESTADISTICAS = [
  {
    titulo: "Países con más Mundiales ganados",
    dato: "Brasil (5), Alemania (4), Italia (4), Argentina (3), Francia (2), Uruguay (2)"
  },
  {
    titulo: "Máximo goleador histórico",
    dato: "Miroslav Klose (Alemania) - 16 goles"
  },
  {
    titulo: "Jugador con más partidos jugados",
    dato: "Lothar Matthäus (Alemania) - 25 partidos"
  },
  {
    titulo: "Mayor cantidad de goles en un solo Mundial",
    dato: "Just Fontaine (Francia, 1958) - 13 goles"
  },
  {
    titulo: "Final más repetida",
    dato: "Alemania vs. Argentina (1986, 1990, 2014)"
  }
];

function App() {
  const [dias, setDias] = useState(diasFaltantes(FECHA_MUNDIAL));

  useEffect(() => {
    const timer = setInterval(() => {
      setDias(diasFaltantes(FECHA_MUNDIAL));
    }, 1000 * 60 * 60); // actualiza cada hora
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Contador para el Mundial de Fútbol 2026</h1>
      </header>
      <main>
        <section className="contador">
          <h2>Faltan</h2>
          <div className="dias">{dias}</div>
          <h3>días para el inicio (10 de junio de 2026)</h3>
        </section>
        <section className="estadisticas">
          <h2>Estadísticas históricas</h2>
          <ul>
            {ESTADISTICAS.map((item, idx) => (
              <li key={idx}>
                <strong>{item.titulo}:</strong> {item.dato}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <small>Desarrollado por SantiQui</small>
      </footer>
    </div>
  );
}

export default App;