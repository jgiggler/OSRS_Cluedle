import React from 'react';

function Message({isCorrect}){
    if (isCorrect){
        return <p>WINNER!!!</p>
    }
    return <p>SUCK FAILURE FREAK!</p>

}

export default Message;