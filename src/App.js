import React from 'react';

function Greetings(props) {
  const colorObj = {};
  colorObj.color = props.color;
    return (
        <h3 style={colorObj}>{props.greet}, {props.name}!</h3>
    );
}

function App() {
  return (
      <div>
        <Greetings
          greet="Hello"
          name="Sue"
          color="blue"
        />
        <Greetings
          greet="Goodbye"
          name="Sue"
          />
      </div>
  );
}

export default App;


