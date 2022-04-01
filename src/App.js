import React from "react";
function App() { 
    const title = 'This is a title';
    const subtitle = 'This is a subtitle';
    const comments = [
        {id: 1, text: 'This is comment 1'},
        {id: 2, text: 'This is comment 2'},
        {id: 3, text: 'This is comment 3'},
        {id: 4, text: 'This is comment 4'},
        {id: 5, text: 'This is comment 5'},

    ];
    const loading = false;
    const showComments = false;
    if(loading) return <h1>Loading...</h1>
    return(
        <div className="container">
            <h1>{title.toLocaleUpperCase()}</h1>
            <p>{subtitle}</p>
            {showComments && (
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))}
                    </ul>
                </div>
            )}
            
        </div>
    )
}
export default App;