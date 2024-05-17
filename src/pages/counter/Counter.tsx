import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {counter}</p>
      <button onClick={handleClick}>Adicionar +1</button>
    </div>
  );
}

export default Counter;
