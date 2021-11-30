import '../styles/Home.css';
import { Button, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/searchRegion';

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="weatherLabelIcon">
          <FontAwesomeIcon
            style={{ color: 'white', fontSize: 35, paddingRight: '10px' }}
            icon={faCloud}
          />
          <h3 className="weather-label">Weather</h3>
        </div>
        <div>
          <Button
            type="submit"
            style={{
              backgroundColor: 'white',
              fontWeight: 'bold',
              color: '#5EA8EC',
              boxShadow: '0 0 8px #0000008D',
            }}
            sx={{
              borderRadius: '30px',
              width: '115px',
              height: '35px',
              top: '15px',
              right: '50px',
            }}
          >
            CADASTRAR
          </Button>
          <Button
            type="submit"
            style={{
              backgroundColor: '#5EA8EC',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 0 8px #0000008D',
            }}
            sx={{
              borderRadius: '30px',
              width: '90px',
              height: '35px',
              top: '15px',
              right: '25px',
            }}
          >
            ENTRAR
          </Button>
        </div>
      </header>
      <Grid className="Home-body" display="flex" justifyContent="center" pt={2}>
        <Search />
      </Grid>
      <footer className="Home-footer">© QODELESS 2021</footer>
    </div>
  );
}
