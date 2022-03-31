import React from "react";
function App() { 
    return React.createElement(
        'div', { className: 'container' },
        React.createElement('h1', {}, 'Hello World'),
        React.createElement('p', { className: 'bold-paragraph'}, 'This is my first React app')
    )
}
export default App;