import React from 'react'

function Cronometro() {
    const Cronometro = () => {

        const [segundos, setSegundos] = useState(10);
    
        useEffect(() => {
          if (segundos === 0) return;
      
          const intervalo = setInterval(() => {
            setSegundos(prevSegundos => prevSegundos - 1);
          }, 1000);

          return () => clearInterval(intervalo);
        }, [segundos]);

    }

  return (
    <div>
      <h3>{segundos}</h3>
      {segundos === 0 && <p>Tempo esgotado!</p>}
    </div>
  )
}

export default Cronometro
