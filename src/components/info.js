import React from 'react'

const Info = ({ className, title }) => (
    <div className={className}>
        <label htmlFor='logradouro'>
            {title}: <input type='text' id='logradouro' />
        </label>
    </div>
)

Info.defaultProps = {
    className: ''
}

Info.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string
}

export default Info