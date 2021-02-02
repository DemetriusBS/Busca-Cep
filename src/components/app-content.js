import React from 'react'
import Header from './header'
import Search from './search'
import Action from './action'
import Info from './info'

const AppContent = () => (
    <div className='app'>

        <Header />

        <Search />

        <Action />

        <Info className='info' title='Rua' />

        <Info className='info' title='Bairro' />

        <Info className='info' title='Cidade' />

        <Info className='info' title='Estado' />

        <Info className='info' title='DDD' />
    </div>
)

export default AppContent