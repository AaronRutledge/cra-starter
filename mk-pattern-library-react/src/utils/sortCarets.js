import React from 'react';

const downCaret = (
    <span className="order">
        <span className="caret"></span>
    </span>
)

const upCaret = (
    <span className="order dropup">
        <span className="caret"></span>
    </span>
)

export const pickCaret = (direction, fieldName) => {
    if (direction === 'asc') {
        return upCaret
    }
    else if (direction === 'desc') {
        return downCaret
    }
    else {
        return ''
    }
};