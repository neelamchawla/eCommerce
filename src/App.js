import React, { Component } from 'react'
import './App.css'
import logo from './extra/logo.svg'

class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className='App-logo' alt="logo" />
        Hello World
        </header>
      </div>
    )
  }
}

export default App

