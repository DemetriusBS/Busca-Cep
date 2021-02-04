'use strict'

import React, { Component } from 'react'
import Axios from 'axios'
import AppContent from './components/app-content'

class App extends Component {

  constructor() {
    super()
    this.state = {
      results: {
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
        ddd: ''
      }
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13
    if (keyCode === enter) {
      Axios.get(`https://viacep.com.br/ws/${value}/json`)
        .then((response) => {
          console.log(response.data)
          this.setState({
            results:{
              logradouro: response.data.logradouro,
              bairro: response.data.bairro,
              cidade: response.data.localidade,
              estado: response.data.uf,
              ddd: response.data.ddd
            }
          })
        }).catch((erro) => {
          console.log('Deu erro', erro)
        })
    }
  }


  render() {
    return <AppContent
      results={this.state.results}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}
export default App
