const QuoteBox = ({ myColor, myPhrase, author, handleClick }) => {
  return (
    <div className="container" style={{ background: myColor }}>
      <div className="quotes">
        <h3 style={{ color: myColor }}>{myPhrase}</h3>
        <p>- {author}</p>
        <div className="container-button">
          <button style={{ background: myColor }}>
            <i className="fab fa-twitter"></i>
          </button>
          <button style={{ background: myColor }} onClick={handleClick}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
