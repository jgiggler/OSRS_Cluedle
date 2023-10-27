import React, {useEffect, useState} from 'react';

import Message from '../components/message';

function ItemsPage() {
    const [isCorrect, setisCorrect] = useState(undefined)
    const [img, setImg] = useState();

    const fetchImage = async () => {
      const res = await fetch('http://localhost:5000/item');
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };

    useEffect(()=> {
      fetchImage();
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(JSON.stringify(formJson));
      const data = await fetch('http://localhost:5000/guesscheck', {method: 'POST',
      headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'},
      body: JSON.stringify(formJson)});
      const {correct} = await data.json()
      console.log(correct)
      setisCorrect(correct)
      form.reset();
    }
    
    return (
        <>
        <h1>Guess Old School Runescape Items</h1>

      <div className="card">
      <img className='item_image' src={img} />
        <form method='POST' onSubmit={handleSubmit}>
          <label for="guess" >Guess: </label>
          <input type='text' name="guess" id='guess'  rows="1" placeholder='...'
          
          />
          <button type='submit'>Enter</button>
        </form>
      {isCorrect !== undefined && <Message isCorrect={isCorrect}/>}
      </div>
        </>
    )
}

export default ItemsPage;