import axios from 'axios';
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    setQuote(response.data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  const handleClick = () => {
    fetchData();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const app = document.querySelector(".App");
    const button = document.querySelector("#new-quote")
    app.style.backgroundColor = "#" + randomColor
    document.body.style.color = "#" + randomColor
    button.style.backgroundColor = "#" + randomColor
  }


  return (
    <div className="App h-screen background flex justify-center items-center">
      <div id="quote-box" className='w-5/6 md:w-1/3 m-6 bg-white p-12 rounded-md'>
        <p className='text-2xl text-center font-semibold flex pb-4' id="text"><span><FaQuoteLeft /></span>{quote.content}</p>
        <p id="author" className='text-end font-light'>- {quote.author}</p>
        <div className='flex place-content-between pt-6 items-center'>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.content}${quote.author}`} target='_blank' rel="noreferrer" id="tweet-quote" className='text-xl'><FaTwitter /></a>
          <button id="new-quote" onClick={handleClick} className='py-2 px-6 rounded-md font-light'>New Quote</button></div>
      </div>
    </div>

  );
}

export default App;
