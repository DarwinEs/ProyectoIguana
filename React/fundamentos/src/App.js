import logo from './logo.svg';
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import AjaxApis from './components/Ajaxapis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="col-8">
        <Propiedades/>
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks/>
        <hr/>
        <ScrollHooks/>
        </div>
      </header>
    </div>
  );
}

export default App;
