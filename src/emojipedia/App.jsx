import React from "react";
import Emoji from "./emoji";
import emojipedia from "./emojipedia";

function CreateEmoji(singleEmoji) {
  return(
  <Emoji 
    key={singleEmoji.id}
    name={singleEmoji.name}
    emoji={singleEmoji.emoji}
    meaning={singleEmoji.meaning}

  />
  )
}

const newmeaning = emojipedia.map( 
  emoji =>  emoji.meaning.substring(0, 40)  
)

console.log(newmeaning);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateEmoji)}
      </dl>

      
    </div>
  );
}

export default App;
