import React from 'react';

function Book(props) {
    return ( < div >
        <
        h1 > Our Books Collection < /h1> <
        ul >
        <
        li > Book name is { props.book1 } < /li> <
        li > Book name is { props.book2 } < /li> <
        li > Book name is { props.book3 } < /li> <
        li > Book name is { props.book4 } < /li> < /
        ul > <
        /div>

    )
}
export default Book;

{ /* now go to App.js and this code */ }
import React from 'react';
import './App.css';
import Book from './Book.js';

function App() {
    return ( <
        div className = "App" > {}

        <
        Book book1 = "Harry Potter"
        book2 = "Angels and Demons"
        book3 = "Little Mermaid"
        book4 = "Oliver Twist" / >

        <
        /div>

    );
}

export default App;