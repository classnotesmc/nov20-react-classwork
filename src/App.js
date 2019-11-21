import React from 'react';

function Greetings(props) {
  return (
        <h3 style={{color: 'red'}}>{props.greet}, {props.name}!
        Would you like some {props.food}?</h3>
  );
}

function App() {
  return (
      <div>
        <Greetings
          greet="Hello"
          name="Sue"
          food="apples"
        />
        <Greetings
          greet="Goodbye"
          name="Sue"
          food="apples"
          />
      </div>
  );
}

export default App;


