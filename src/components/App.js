// SCSS
import '../styles/App.scss';
import { useState } from "react";
// IMG
// import logo from '../images/logo.svg';

function App() {
  // En la expresión declaramos una const de estado que consta :
  // 1- de la variable en sí misma "numberOfErrors".
  // 2- es como una abstracción de la variable (en realidad una función interna de react) donde actualizamos su valor.
  // 3- con useState le indicamos el valor inicial (librería de react).
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const [lastLetter, setLastLetter] = useState("");

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    console.log('El botón ha sido pulsado');
    setNumberOfErrors(numberOfErrors + 1);
    console.log(numberOfErrors);
  };

  const handleLastLetter = (ev) => {
    const inputValue = ev.currentTarget.value;
    setLastLetter(inputValue);
    console.log(inputValue); //porque aún no le ha dado tiempo a react a lanzar
    console.log('Este es el last letter: ' , lastLetter);
    
    
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleLastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
        <button className="increaseBtn" onClick={handleClickBtn}>
          Incrementar
        </button>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
