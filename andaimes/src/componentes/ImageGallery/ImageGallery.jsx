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
  const [filtroCategoria, setFiltroCategoria] = useState('todos') // Inicializa com "todos"
  const [filtroTamanho, setFiltroTamanho] = useState('todos') // Filtro de tamanho

  // Lista de produtos com categorias e tamanhos
  const produtos = [
    {
      id: 1,
      categoria: 'andaimes',
      tamanho: '1m',
      imagem: Andaimes,
      titulo: 'Aluguel de Painel Metálico para Andaime 1m',
      descricao:
        'Estes painéis metálicos para andaime possuem 1 metro e auxiliam no desenvolvimento vertical',
    },
    {
      id: 2,
      categoria: 'andaimes',
      tamanho: '1,5m',
      imagem: Andaimes,
      titulo: 'Aluguel de Painel Metálico para Andaime 1,5m',
      descricao:
        'Estes painéis metálicos para andaimes possuem 1,5 metros e auxiliam no desenvolvimento vertical',
    },
    {
      id: 3,
      categoria: 'acessorios',
      tamanho: '2m',
      imagem: Escada,
      titulo: 'Aluguel de Escada 2m para Andaime',
      descricao:
        'As escadas para andaime são peças necessárias para dar acesso ao nível de trabalho',
    },
    {
      id: 4,
      categoria: 'acessorios',
      tamanho: '1m',
      imagem: GuardaCorpo,
      titulo: 'Aluguel de 1m Guarda-Corpo para Andaime',
      descricao:
        'O guarda-corpo é peça essencial para a segurança e proteção nos andaimes',
    },
    {
      id: 5,
      categoria: 'acessorios',
      tamanho: '1,5m',
      imagem: GuardaCorpo,
      titulo: 'Aluguel de 1,5m Guarda-Corpo para Andaime',
      descricao:
        'O guarda-corpo é peça essencial para a segurança e proteção nos andaimes',
    },
    {
      id: 6,
      categoria: 'acessorios',
      tamanho: '1m',
      imagem: Prancha,
      titulo: 'Aluguel de 1m Piso Metálico para Andaime',
      descricao:
        'O piso metálico para andaime de 1 m possui a finalidade de proporcionar maior estabilidade',
    },
    {
      id: 7,
      categoria: 'acessorios',
      tamanho: '1,5m',
      imagem: Prancha,
      titulo: 'Aluguel de 1,5m Piso Metálico para Andaime',
      descricao:
        'O piso metálico para andaime de 1,5 m possui a finalidade de proporcionar maior estabilidade',
    },
    {
      id: 8,
      categoria: 'acessorios',
      tamanho: '',
      imagem: SapataFixa,
      titulo: 'Aluguel de Sapata Fixa para Andaime',
      descricao:
        'Sapata fixa para andaime é usada para dar maior firmeza na base da torre de andaime',
    },
    {
      id: 9,
      categoria: 'acessorios',
      tamanho: '',
      imagem: SapataRegulavel,
      titulo: 'Aluguel de Sapata Regulável para Andaime',
      descricao:
        'Sapata ajustável para andaimeé usada para nivelamento de andaimes em terrenos irregulares',
    },
    {
      id: 10,
      categoria: 'acessorios',
      tamanho: '',
      imagem: Rodizio,
      titulo: 'Aluguel de Rodízio para Andaime',
      descricao:
        'Rodízios para andaime são utilizados para facilitar o deslocamento de torres de andaime',
    },
    {
      id: 11,
      categoria: 'escoramento',
      tamanho: '',
      imagem: Escoramento,
      titulo: 'Aluguel de Escoras Metálicas',
      descricao:
        'O escoramento serve como suporte temporário para estruturas durante a construção ou reparação civil',
    },
    {
      id: 12,
      categoria: 'acessorios',
      tamanho: '',
      imagem: Trava,
      titulo: 'Aluguel de Travas para Andaime',
      descricao:
        'As diagonais são ideais para o travamento dos montantes de andaimes',
    },
  ]

  // Funções para alterar os filtros
  const handleFiltroCategoriaChange = (event) => {
    setFiltroCategoria(event.target.value)
  }

  const handleFiltroTamanhoChange = (event) => {
    setFiltroTamanho(event.target.value)
  }

  // Filtrar os produtos com base nos filtros selecionados
  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaMatch =
      filtroCategoria === 'todos' || produto.categoria === filtroCategoria
    const tamanhoMatch =
      filtroTamanho === 'todos' || produto.tamanho === filtroTamanho
    return categoriaMatch && tamanhoMatch
  })

  return (
    <section id="sessao-inferior" className="andaimes">
      <div className="filtros">
        {/* Filtro por Categoria */}
        <div className="filtro">
          <label htmlFor="filtroCategoria">Categoria:</label>
          <select
            id="filtroCategoria"
            value={filtroCategoria}
            onChange={handleFiltroCategoriaChange}
          >
            <option value="todos">Todos</option>
            <option value="andaimes">Andaimes</option>
            <option value="acessorios">Acessórios</option>
            <option value="escoramento">Escoramento</option>
          </select>
        </div>

        {/* Filtro por Tamanho */}
        <div className="filtro">
          <label htmlFor="filtroTamanho">Tamanho:</label>
          <select
            id="filtroTamanho"
            value={filtroTamanho}
            onChange={handleFiltroTamanhoChange}
          >
            <option value="todos">Todos</option>
            <option value="1m">1m</option>
            <option value="1,5m">1,5m</option>
            <option value="2m">2m</option>
          </select>
        </div>
      </div>

      {/* Produtos Filtrados */}
      <div className="produtos">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt={produto.titulo} />
            <h2>{produto.titulo}</h2>
            <p>{produto.descricao}</p>
          </div>
        ))}
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

export default ImageGalley
