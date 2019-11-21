import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function App() {
  const filePath = "src/App.js";
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello, my name is {user.firstName} {user.lastName}</p>
        <p>Also, {formatName(user)}</p>
        <p>With an ES6 string: {`${user.firstName} ${user.lastName}`}</p>
        <p>
          Edit <code>{filePath}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
