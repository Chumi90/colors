import { useRef } from 'react';

function BoxColor ({color, inputValue }) {
  const boxRef = useRef();
  const isMatch = color.toLowerCase() === inputValue.toLowerCase();
  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{
        background: isMatch ? color : 'transparent',
        color: isMatch ? '#111' : (color === 'white' || color === 'yellow' ? '#333' : color),
        boxShadow: isMatch ? '0 0 20px 5px #0002' : undefined,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: color,
        transition: 'background 0.3s, color 0.3s'
      }}
    >
      <p>{isMatch ? `¡Soy el color ${color}!` : 'No soy el color'}</p>
    </div>
  )
}

export default BoxColor;
