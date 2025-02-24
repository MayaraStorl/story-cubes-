import React from 'react'
import './StoryCubes.css'


function StoryCubes() {
  const icones = ['']

const [desenhoEscolhido, setDesenhoEscolhido] = useState([])

function SortearIcon() {
    let novoDesenho = [] // Não deixa que o desenho escolhido se perca
    let desenhoDisponivel = icones.filter(img => !desenhoEscolhidoesenhoEscolhido.includes(img)) // Mantem os desenhos que ainda não foram sorteados
    
    if (desenhoDisponivel.length < 6) {
        setDesenhoEscolhido([])
        desenhoDisponivel = [...icones]
    }
    
    while (novoDesenho.length < 6) {
        const sorteio = Math.floor(Math.random() * desenhoDisponivel.length)
        const novoDesenho = desenhoDisponivel.splice(sorteio, 1)[0]
        novoDesenho.push(novoDesenho)
    }
    
    setDesenhoEscolhido(novoDesenho)
}

return (

    <div className='storyCubes-container'>
        <div className="ladoEsquerdo">
            <h2>Seja bem vindo 🤗 </h2>
            <p>Tema Geral: Filmes</p>
            <p>Clique no botão para começar a criar uma história</p>
            <button onClick={SortearDesenho}>Sortear</button>
        </div>
        <div className="ladoDireito">
            <div className="imagem-container">
                {desenhoSorteados.map((img, index) => (
                   <img key={index} className='imagemSorteada' src={img} alt={`Icone sorteado ${index + 1}`} />
               ))}
            </div>
        </div>
    </div>
)
}

export default StoryCubes