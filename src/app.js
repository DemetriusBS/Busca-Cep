'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {

  constructor (){
    super()
    this.state = {
      temosCep: '37264000',
      results: {
        logradouro: 'Rua Nossa Senhora Aparecida',
        bairro: 'Centro',
        cidade: 'Ribeirão Vermelho',
        estado: 'MG',
        ddd: '35'
      }
    }
  }

  render() {
    return <AppContent 
      temosCep = {this.state.temosCep}
      results = {this.state.results}
    />
  }
}
export default App
