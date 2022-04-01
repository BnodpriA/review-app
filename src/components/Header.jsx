import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header>
        <div className="container">
            <h1>{props.bunny}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    bunny: 'Bunny'
}

Header.propTypes = {
    bunny: PropTypes.string
}

export default Header
