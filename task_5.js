import React, { useState } from 'react';

// Inline CSS styles
const styles = {
  calculator: {
    width: '220px',
    margin: '100px auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  display: {
    marginBottom: '10px',
    textAlign: 'right',
  },
  input: {
    fontSize: '2em',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  output: {
    fontSize: '2em',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    fontSize: '1.5em',
    padding: '20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#e0e0e0',
  },
};

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression and set output
        setOutput(eval(input));
      } catch (error) {
        setOutput('Error');
      }
      setInput('');
    } else if (value === 'C') {
      // Clear the input and output
      setInput('');
      setOutput('');
    } else {
      // Update the input with the clicked button value
      setInput(input + value);
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div style={styles.input}>{input || '0'}</div>
        <div style={styles.output}>{output}</div>
      </div>
      <div style={styles.buttons}>
        <Button onClick={() => handleClick('C')} label="C" />
        <Button onClick={() => handleClick('/')} label="/" />
        <Button onClick={() => handleClick('*')} label="*" />
        <Button onClick={() => handleClick('-')} label="-" />
        <Button onClick={() => handleClick('+')} label="+" />
        <Button onClick={() => handleClick('1')} label="1" />
        <Button onClick={() => handleClick('2')} label="2" />
        <Button onClick={() => handleClick('3')} label="3" />
        <Button onClick={() => handleClick('4')} label="4" />
        <Button onClick={() => handleClick('5')} label="5" />
        <Button onClick={() => handleClick('6')} label="6" />
        <Button onClick={() => handleClick('7')} label="7" />
        <Button onClick={() => handleClick('8')} label="8" />
        <Button onClick={() => handleClick('9')} label="9" />
        <Button onClick={() => handleClick('0')} label="0" />
        <Button onClick={() => handleClick('.')} label="." />
        <Button onClick={() => handleClick('=')} label="=" />
      </div>
    </div>
  );
};

const Button = ({ label, onClick }) => (
  <button
    style={{
      ...styles.button,
      ...(label === 'C' ? styles.buttonHover : {}),
    }}
    onClick={() => onClick(label)}
  >
    {label}
  </button>
);

export default App;
