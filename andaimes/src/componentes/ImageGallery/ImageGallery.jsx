import { useState } from 'react'
import './ImageGallery.css'
import Andaimes from '../../assets/andaimes.svg'
import Escada from '../../assets/escada.svg'
import Escoramento from '../../assets/escoramento.svg'
import GuardaCorpo from '../../assets/guarda-corpo.svg'
import Prancha from '../../assets/prancha.svg'
import SapataFixa from '../../assets/sapata-fixa.svg'
import SapataRegulavel from '../../assets/sapata-reg.svg'
import Rodizio from '../../assets/rodizio.svg'
import Trava from '../../assets/trava.svg'

function ImageGalley() {
  const [filtro, setFiltro] = useState('andaimes')

  // Função para alterar o filtro
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value)
  }

  return (
    <section id="sessao-inferior" className="andaimes">
      <div className="filtro">
        <label htmlFor="filtroCategoria">Categoria:</label>
        <select
          id="filtroCategoria"
          value={filtro}
          onChange={handleFiltroChange}
        >
          <option value="andaimes">Tamanhos</option>
          <option value="acessorios">Acessórios</option>
          {/* Você pode adicionar mais opções aqui */}
        </select>
      </div>

      <div className="produtos">
        <div className="produto">
          <img src={Andaimes} alt="Produto 1" />
          <h2>
            Aluguel de Painel Metálico <br /> para Andaime 1m
          </h2>
          <p>
            Estes painéis metálicos para andaime possuem 1 metro e auxiliam no
            desenvolvimento vertical
          </p>
        </div>
        <div className="produto">
          <img src={Andaimes} alt="Produto 2" />
          <h2>
            Aluguel de Painel Metálico <br /> para Andaime 1,5m
          </h2>
          <p>
            Estes painéis metálicos para andaimes possuem 1,5 metros e auxiliam
            no desenvolvimento vertical
          </p>
        </div>
        <div className="produto">
          <img src={Escada} alt="Produto 3" />
          <h2>
            Aluguel de Escada 2m <br /> para Andaime{' '}
          </h2>
          <p>
            As escadas para andaime são peças necessárias para dar acesso ao
            nível de trabalho.
          </p>
        </div>
        <div className="produto">
          <img src={Escoramento} alt="Produto 4" />
          <h2>
            Aluguel de <br /> Escoras Metálicas{' '}
          </h2>
          <p>
            O escoramento serve como suporte temporário para estruturas durante
            a construção ou reparação civil
          </p>
        </div>
        <div className="produto">
          <img src={GuardaCorpo} alt="Produto 5" />
          <h2>
            Aluguel de 1m Guarda-Corpo <br /> para andaime{' '}
          </h2>
          <p>
            O guarda-corpo é peça essencial para a segurança e proteção nos
            andaimes.
          </p>
        </div>
        <div className="produto">
          <img src={GuardaCorpo} alt="Produto 6" />
          <h2>
            Aluguel de 1,5m Guarda-Corpo <br /> para andaime{' '}
          </h2>
          <p>
            O guarda-corpo é peça essencial para a segurança e proteção nos
            andaimes.
          </p>
        </div>
        <div className="produto">
          <img src={Prancha} alt="Produto 7" />
          <h2>
            Aluguel de 1m Piso Metálico <br /> para andaime{' '}
          </h2>
          <p>
            O piso metálico para andaime de 1 m possui a finalidade de
            proporcionar maior estabilidade.
          </p>
        </div>
        <div className="produto">
          <img src={Prancha} alt="Produto 8" />
          <h2>
            Aluguel de 1,5m Piso Metálico <br /> para andaime{' '}
          </h2>
          <p>
            O piso metálico para andaime de 1,5 m possui a finalidade de
            proporcionar maior estabilidade.
          </p>
        </div>
        <div className="produto">
          <img src={SapataFixa} alt="Produto 9" />
          <h2>
            Aluguel de Sapata Fixa <br /> para andaime{' '}
          </h2>
          <p>
            Sapata fixa para andaime é usada para dar maior firmeza na base da
            torre de andaime.
          </p>
        </div>
        <div className="produto">
          <img src={SapataRegulavel} alt="Produto 10" />
          <h2>
            Aluguel de Sapata Regulável <br /> para andaime{' '}
          </h2>
          <p>
            Sapata ajustável para andaime é usada para nivelamento de andaimes
            em terrenos irregulares.
          </p>
        </div>
        <div className="produto">
          <img src={Rodizio} alt="Produto 11" />
          <h2>
            Aluguel de Rodízios <br /> para andaime{' '}
          </h2>
          <p>
            Sapata ajustável para andaime é usada para nivelamento de andaimes
            em terrenos irregulares.
          </p>
        </div>
        <div className="produto">
          <img src={Trava} alt="Produto 12" />
          <h2>
            Aluguel de Travas de 1m ou 1,5m <br /> para andaime{' '}
          </h2>
          <p>
            As diagonais são ideais para o travamento dos montantes de andaimes
          </p>
        </div>
      </div>

      <div className="whatsapp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=5524998839394"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Consultar a loja</button>
        </a>
      </div>
    </section>
  )
}


//FALTA ARRUMAR O FILTRO

export default ImageGalley
