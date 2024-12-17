import Logo from '../../assets/andaimes-logo.svg'
import './Header.css';
import InstagramLogo from '../../assets/instagram.svg'


function Header() {
    return (
        <header>
            <div className="header-container primary-background">
                <div className="logo-and-text-header">
                    <img src={Logo} alt="Logo Andaimes V.Redonda" />
                    <div className="header-text">
                        <h2>ANDAIMES V.REDONDA</h2>
                        <h3>Locação de andaimes e Escoramentos Metálicos</h3>
                    </div>
                </div>
                 {/* Adiciona o logo do Instagram */}
                <a 
                    href="https://www.instagram.com/andaimesvr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-link"
                >
                    <img 
                        src={InstagramLogo} 
                        alt="Instagram Andaimes V.Redonda" 
                        className="instagram-logo"
                    />
                </a>
            </div>
        </header>
    );
}

export default Header



