import { useRef } from 'react';

function BoxColor ({color, inputValue }) {
  const boxRef = useRef();
  const isMatch = color.toLowerCase() === inputValue.toLowerCase();
  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{
        background: color, // Siempre el color de la variable
        color: color === 'white' || color === 'yellow' ? '#333' : '#fff',
        boxShadow: isMatch ? '0 0 20px 5px #0002' : undefined,
        borderWidth: isMatch ? 3 : 1,
        borderStyle: 'solid',
        borderColor: isMatch ? '#222' : color
      }}
    >
      <p>{isMatch ? `¡Soy el color ${color}!` : 'No soy el color'}</p>
    </div>
  )
}

export default BoxColor;
