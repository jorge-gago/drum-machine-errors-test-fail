import './App.css';
import { Pad } from './components/DrumPads/Drumpads';
import { Display } from './components/DrumDisplay/DrumDisplay';
import { useRef } from 'react';

function App() {

  const buttonsRefs = useRef({})
  buttonsRefs.current = {}

  const audios = (url = "#") => {
    let sound = new Audio(url)
    return sound
  }

  const Handlerkey = (e) => {
    console.log('key')
    console.log(e.key.toUpperCase())
    buttonsRefs.current[e.key.toUpperCase()].playHandle()
    console.log(buttonsRefs.current)
  }

  const addButtonRefs = (ref) => {
    console.log('add ', ref)
    //console.log("ref ", ref.letra, ref)
    if (ref && !buttonsRefs.current[ref.letra]) {
      // buttonsRefs.current[ref.letra]
      //buttonsRefs.current.push(ref)
      buttonsRefs.current[ref.letra] = ref
    }
    console.log(buttonsRefs.current)
  }


  return (
    <div id="drum-machine" tabIndex="0" className="App" onKeyDown={(e) => {Handlerkey(e)}}>
      {/* <Pad id={actions.pad1.letra} texto={actions.pad1.letra} audio={audios(actions.pad1.audio)}/> */}
      {actions.map(pad => {
        return(
          <Pad key={pad.letra} id={pad.letra} texto={pad.letra} audio={audios(pad.audio)} ref={addButtonRefs}/>
        )
      })}
      <Display />

    </div>
  );
}

export default App;


const actions = [
  { nombre:"Heater 1", letra: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { nombre:"Heater 2", letra: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { nombre:"Heater 3", letra: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }
]
