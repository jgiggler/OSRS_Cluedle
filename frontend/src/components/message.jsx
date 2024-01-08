import React from 'react';

function Message({isCorrect, count}){
    if (isCorrect){
        return <p>
            Nice Job!
            This item has been guessed correctly {count} times!</p>
            
    }
    return <p>
        Sorry, Try Again!
        This item has been guessed correctly {count} times!</p>

}

export default Message;