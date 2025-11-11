import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }

  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(`${quote.author} once said: "${quote.content}"`);
    alert('Copied!');
  }

  // ----- Share Links -----
  const text = encodeURIComponent(`"${quote.content}" — ${quote.author}`);
  const pageUrl = encodeURIComponent(window.location.href);

  const shareWhatsApp = `https://wa.me/?text=${text}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${text}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${text}`;

  return (
    <>
      <h1>Quote Generator React App</h1>

      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>

        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>

        {/* Share Buttons */}
        <h3>Share Quote:</h3>
        <div className="share-buttons">
          <button className="btn" onClick={() => window.open(shareWhatsApp, "_blank")}>
            Share on WhatsApp
          </button>

          <button className="btn" onClick={() => window.open(shareTwitter, "_blank")}>
            Share on Twitter
          </button>

          <button className="btn" onClick={() => window.open(shareFacebook, "_blank")}>
            Share on Facebook
          </button>
        </div>
              
      </div>
    </>
  )
}

export default App;
