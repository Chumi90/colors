import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyFormChallenge() {
  const [inputValue, setInputValue] = useState("");
  const colorInputRef = useRef();
  return (
    <>
      <input
        ref={colorInputRef}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Introduce color"
      />
      <div className="boxes-container">
        {colors.map(color => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
      </div>
    </>
  );
}

export default MyFormChallenge;