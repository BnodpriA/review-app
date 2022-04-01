import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

  //defining styles variable
  const headerStyle = {
    backgroundColor: bgColor, 
    color: textColor
  }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
