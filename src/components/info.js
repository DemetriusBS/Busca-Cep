import React, {PropTypes} from 'react'

const Info = ({ className, title, id, info }) => (
    <div className={className}>
        <label className='dados' htmlFor={id}>
            {title}: <input className='show' type='text' id={id} value={info} />
        </label>
    </div>
)

Info.defaultProps = {
    className: ''
}

Info.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string
}

export default Info