import React, { PropTypes } from 'react'
import Header from './header'
import Search from './search'
import Action from './action'
import Info from './info'

const AppContent = ({ temosCep, results}) => (
    <div className='app'>

        <Header />

        <Search />

        <Action />

        {!!temosCep && <Info className='info' title='Rua' id='rua' info={results.logradouro} />}

        {!!temosCep && <Info className='info' title='Bairro' id='bairro' info={results.bairro} />}

        {!!temosCep && <Info className='info' title='Cidade' id='cidade' info={results.cidade} />}

        {!!temosCep && <Info className='info' title='Estado' id='estado' info={results.estado} />}

        {!!temosCep && <Info className='info' title='DDD' id='ddd' info={results.ddd} />}
    </div>
)

AppContent.propTypes ={
    temosCep: PropTypes.string.isRequired,
    results: PropTypes.object.isRequired
}

export default AppContent