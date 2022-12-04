import 'minireset.css';
import './App.css';
import logo from './assets/logo-ola-mundos.png';
import signature from './assets/signature.png';

function App({ name, course, date, begin_date, end_date, hours_spent }) {
  return (
    <div className="App">
      <Icon />
      <p className="byline">CERTIFICADO DE CONCLUSÃO</p>

      <div className="content">

        <div className='info'>
          <p>Certificamos que <u>{name}</u> concluiu com êxito o curso de {course}, realizado
          pelo projeto <b>Olá, Mundos!</b>, durante o período de {begin_date} a {end_date} com <b>carga
          horária de {hours_spent} horas.</b></p>
        </div>

        <div className="data">
          Campinas - SP, {date}
        </div>

        <div className="signature">
          <div className="line">
            ____________________________________________
          </div>

          <div className="image">
            <img src={signature} width="120" height="300"></img>
          </div>

          <div className="role">
            Caio Fernando 
            <br></br> 
            <b>Diretor de Ensino</b>
          </div>
        </div>

      </div>
      <img src={logo} className="logo" width="80" height="400"></img>
    </div>
  );
}

App.defaultProps = {
  name: 'Pedro Salvador',
  course: 'Python',
  date: '21 de Março de 2022',
  begin_date: '01 de Setembro de 2021',
  end_date: '31 de outubro de 2021',
  hours_spent: '100'
}

const Icon = () => (
  <svg width="99" height="139" viewBox="0 0 99 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H99V138.406L52.1955 118.324L0 138.406V0Z" fill="white" />
  </svg>
)

export default App;
