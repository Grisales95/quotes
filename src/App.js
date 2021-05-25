import "./styles.css";
import { useState } from "react";
import quotes from "./quotes";
import QuoteBox from "./QuoteBox";

const data = quotes.quotes;

const color = [
  "#ff9d72",
  "#999b84",
  "#83a95c",
  "#ff4646",
  "#c9cbff",
  "#fdb827",
  "#98acf8",
  "#b088f9",
  "#7FFF00",
  "#00FFFF",
  "#DEB887",
  "#8FBC8F",
  "#00CED1",
  "#00BFFF",
  "#DCDCDC",
  "#FFD700",
  "#ff98da",
  "#87a8d0",
  "#2eac6d",
  "#c3b4d2",
  "#e16262",
  "#3e31ae",
  "#fbd400",
  "#40a798",
  "#f6e97f",
  "#00e0ff",
  "#8e9fe6",
  "#a2792f"
];

let number = Math.round(Math.random() * (color.length -1));
let number2 = Math.round(Math.random() * (data.length -1));

export default function App() {
  const [myColor, setMyColor] = useState(color[number]);
  const [myPhrase, setMyPhrase] = useState(data[number2].quote);
  const [author, setAuthor] = useState(data[number2].author)

  const handleClick = () => {
    number = Math.round(Math.random() * (color.length -1));
    setMyColor(color[number]);
    number2 = Math.round(Math.random() * (data.length - 1));
    setMyPhrase(data[number2].quote);
    setAuthor(data[number2].author);
  };

  return (
    <div className="App">
      <QuoteBox myColor = {myColor} myPhrase = {myPhrase} author = {author} handleClick = {handleClick}/>
    </div>
  );
}
