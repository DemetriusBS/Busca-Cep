import React, { PropTypes } from 'react'

const Search = ({handleSearch}) => (
    <div className='search'>
        <input type='text' className='cep' placeholder='Informe o cep e tecle enter'
          onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes={
 handleSearch: PropTypes.func.isRequired
}

export default Search