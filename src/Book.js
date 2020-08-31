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