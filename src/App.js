import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Goodbye(props) {
  return <h1>Goodbye, {props.name}!</h1>;
}

function App() {
  return (
      <div>
        <Welcome
            name="Sue"
        />
        <Goodbye
          name="Sue"
        />
        <Goodbye
            name="Bob"
        />
      </div>
  );
}

export default App;


