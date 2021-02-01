'use strict'

import React from 'react'
import Header from './components/header'
import Search from './components/search'
import Action from './components/action'
import Info from './components/info'

const App = () => (
  <div className='app'>

    <Header />

    <Search />

    <Action />

    <Info className='info' title='Rua'/>
    
    <Info className='info' title='Bairro'/>

    <Info className='info' title='Cidade'/>

    <Info className='info' title='Estado'/>

    <Info className='info' title='DDD'/>
  </div>
)
export default App
