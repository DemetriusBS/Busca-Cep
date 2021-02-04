import React, { PropTypes } from 'react'
import Header from './header'
import Search from './search'
import Info from './info'

const AppContent = ({ results, handleSearch }) => (
    <div className='app'>

        <Header />

        <Search handleSearch={handleSearch} />

        <Info className='info' title='Rua' id='rua' info={results.logradouro} />

        <Info className='info' title='Bairro' id='bairro' info={results.bairro} />

        <Info className='info' title='Cidade' id='cidade' info={results.cidade} />

        <Info className='info' title='Estado' id='estado' info={results.estado} />

        <Info className='info' title='DDD' id='ddd' info={results.ddd} />
    </div>
)

AppContent.propTypes = {
    temosCep: PropTypes.string.isRequired,
    results: PropTypes.object.isRequired
}

export default AppContent