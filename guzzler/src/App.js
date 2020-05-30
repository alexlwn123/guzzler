import React from 'react';
import Footer from './Components/footer';
import Body from './Components/body';
import Header from './Components/navbar';
import './App.css';

function App() {
  return (
    <div>
      <Header style={{}}/>
      <div style={{position: 'absolute', left:'50%',  transform: 'translate(-50%, 0)'}}>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
