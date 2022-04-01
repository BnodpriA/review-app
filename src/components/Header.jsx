import React from 'react'

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

export default Header
