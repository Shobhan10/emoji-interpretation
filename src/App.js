import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "💣": "Bomb",
  "😳": "disbelief",
  "😔": "sad",
  "⏱️": "Stopwatch",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "⏰": "Alarm Clock",
  "👍": "Thumbs Up",
  "🔥": "Fire",
  "📻": "Radio",
  "🥰": "Smiling Face with Hearts",
  "📝": "Memo",
  "✨": "Sparkles",
  "🥺": "Pleading Face",
  "✔": "Check Mark"
};

let emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [showText, setShowText] = useState("");

  const [meaning, showMeaning] = useState("Meaning of emoji will appear here");

  function showLiveMeaning(event) {
    let userInput = event.target.value;
    setShowText(userInput);
    let meaning = emojiDictionary[userInput];
    // if (meaning === undefined) {
    //   meaning = "Emoji can't be recognized";
    // }
    // showMeaning(meaning);

    if (userInput in emojiDictionary) {
      showMeaning(meaning);
    } else {
      showMeaning("Emoji can't be recognized");
    }
    meaning = "Translation will apppear here";
  }

  function emojiClickShow(emoji) {
    let meaning = emojiDictionary[emoji];
    showMeaning(meaning);
  }

  return (
    <div className="App">
      <div style={{ padding: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}>
        Emoji Interpreter
      </div>
      <input
        onChange={showLiveMeaning}
        placeholder="Search your emoji"
        style={{
          width: "70vw",
          height: "5vh",
          border: "2px solid black",
          padding: "0.5rem",
          borderRadius: "10px"
        }}
      ></input>

      <div style={{ padding: "1rem", fontSize: "2rem" }}> {showText} </div>

      <div style={{ padding: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}>
        {meaning}
      </div>
      <h3> Emojis we know 👇</h3>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickShow(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
