import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
      <div>
        <Welcome
            name="Sue"
        />
      </div>
  );
}

export default App;


