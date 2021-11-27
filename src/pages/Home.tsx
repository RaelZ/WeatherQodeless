import '../Home.css';
import { Box, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { fontSize } from '@material-ui/system';

export default function Home(){
    return (
      <div className="Home">
        <header className="Home-header">
          <button type="submit" className="botao-entrar">ENTRAR</button>
          <button type="submit" className="botao-cadastrar">CADASTRAR</button>
          <div className="weatherLabelIcon">  
            <FontAwesomeIcon style={{color:'white', fontSize: 35, paddingRight:'10px'}} icon={faCloud}/>
            <h3 className="weather-label">Weather</h3>
          </div>  
        </header>
        <body className="Home-body">
        </body>
        <footer className="Home-footer">© QODELESS 2021</footer>
      </div>
    );
  }