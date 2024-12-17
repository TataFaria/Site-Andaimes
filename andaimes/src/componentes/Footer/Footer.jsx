import Logo from '../../assets/andaimes-logo.svg'
import Endereco from '../../assets/endereco.svg'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container primary-background">
        <div className="logo-and-text">
          <img src={Logo} alt="Logo Andaimes V.Redonda" />
          <div>
            <h2>ANDAIMES V.REDONDA</h2>
            <h3>Locação de andaimes e Escoramentos Metálicos</h3>
          </div>
        </div>

        <div className="info">
          <div className="endereco">
            <h2>ENDEREÇO</h2>
            <p>Rua das Margaridas, 184 - Água Limpa</p>
            <p>Volta Redonda - RJ</p>
          </div>

          <div className="horario">
            <h2>HORÁRIO DE ATENDIMENTO</h2>
            <p>Seg-Sex: 07:00h-12:00h | 13:30h-18:00h</p>
            <p>Sáb: Fechado</p>
            <p>Dom: Fechado</p>
          </div>

          <div className="mapa">
            <img src={Endereco} alt="Localização Andaimes V.Redonda" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
