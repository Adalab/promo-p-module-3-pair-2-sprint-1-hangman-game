import '../styles/App.scss';
import logo from '../images/logo.svg';

function App() {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <h1 className='header__title'>Título de mi página</h1>
    </header>
  );
}

export default App;
