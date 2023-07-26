import { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai";
import './App.scss'
import { Author, Quote, Button } from './components/StyledComponents';
import Footer from './components/Footer';

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = () => {
    const url = "https://api.quotable.io/random";

    fetch(url)
      .then(data => data.json())
      .then(read => {
        console.log(read)
        setQuote(
          <div className='quote-container' key={read._id}>
            <Quote>&quot;{read.content}&quot;</Quote>
            <Author>
              <h3>{read.author}</h3>
              <p>{read.tags[0]}</p>
            </Author>
          </div>
        )
      })
      .catch(error => console.log("Error:", error));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <main>
        <section className='quote-section'>
          <p className='right'>
            <Button onClick={fetchQuote}>Random <AiOutlineReload /></Button>
          </p>
          {quote}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
