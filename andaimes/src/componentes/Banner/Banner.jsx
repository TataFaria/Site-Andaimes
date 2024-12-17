import "./Banner.css";
import Button from "../Button/Button";
import bannerImg from "../../assets/banner.svg";

function Banner() {
    return (
        <section className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="banner-content">
                <h1>Bem Vindo à <br /> Andaimes V.Redonda</h1>
                <p>
                    Oferecemos soluções seguras e eficientes para sua obra, com equipamentos
                    de qualidade e atendimento especializado. Garantimos estruturas confiáveis
                    para projetos de todos os portes. Conte conosco!
                </p>
                <Button targetId="sessao-inferior" texto="Saiba Mais" />
            </div>
        </section>
    );
}

export default Banner;