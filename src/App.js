import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Facebook oauthApp
        </p>
        <Facebook/>
      </header>
    </div>
  );
}

export default App;
