import './App.css';
import TextSpan from './TextSpan';
function App() {
  var name = "Nguyen Thanh Dat"
  const sentence = name.split("")
  return (
    <div className="App">
      {sentence.map((letter, index)=>{
        return(
          <TextSpan key={index}>
            {letter === " "? '\u00A0' : letter}
          </TextSpan>
      )
      })}
    </div>
  );
}

export default App;
