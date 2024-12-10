import Logo from '../../assets/andaimes-logo.svg'
import './Header.css';


function Header() {
    return (
        <header>
            <div className="container primary-background">
                <div className="logo-and-text">
                    <img src={Logo} alt="Logo Andaimes V.Redonda" />
                    <div className="header-text">
                        <h2>ANDAIMES V.REDONDA</h2>
                        <h3>Locação de andaimes e Escoramentos Metálicos</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header



