import React, {useState} from 'react';

export default function ContadorHooks(props) {
    const [contador, setcontador] = useState(0);


        const sumar = () => setcontador(contador + 1);
        const restar = () => setcontador(contador - 1);


  return (
    <div>
    <h2>Hooks ~~ UseState</h2>
    <h3>{contador}</h3>
    <p>Contador de {props.titulo}</p>
    <nav>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    </nav>
    </div>
  );
}


ContadorHooks.defaultProps = {
    titulo: "Clicks",
}