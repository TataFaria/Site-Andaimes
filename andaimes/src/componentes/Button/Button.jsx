import PropTypes from "prop-types"; // Importando PropTypes
import "./Button.css";

function Button({ targetId, texto }) {
    const handleScroll = () => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button className="botao-saiba-mais" onClick={handleScroll}>
            {texto}
        </button>
    );
}

// Validação das props
Button.propTypes = {
    targetId: PropTypes.string.isRequired, // targetId deve ser uma string obrigatória
    texto: PropTypes.string.isRequired,    // texto deve ser uma string obrigatória
};

export default Button;