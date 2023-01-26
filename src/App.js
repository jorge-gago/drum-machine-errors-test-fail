import './App.css';
import { Pad } from './components/DrumPads/Drumpads';
import { ClipDisplay } from './components/clipDisplay/clipDisplay';
import { /*useRef,*/ useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState(['',false])
  const [nameClip, setClip] = useState("test app")
  // const buttonsRefs = useRef({})
  // buttonsRefs.current = {}

  useEffect(() => {
    document.getElementById('drum-machine').focus()
  }, [])

  // const audios = (url = "#") => {
  //   let sound = new Audio(url)
  //   return sound
  // }

  const Handlerkey = (e) => {
    console.log(e)
    // console.log(e.key.toUpperCase())
    // buttonsRefs.current[e.key.toUpperCase()](
    // () => { return(true)}
    // ) 
    // console.log(buttonsRefs.current[e.key.toUpperCase()])
    setState( () => {
      return [e.key.toUpperCase(), !state[1]]
    })
    // console.log('state ', state)
    // console.log('clip ', nameClip)
  }

  // const addButtonRefs = (ref) => {
  //   // console.log('add ')
  //   //console.log("ref ", ref.letra, ref)
  //   if (ref && !buttonsRefs.current[ref.letra]) {
  //     // buttonsRefs.current[ref.letra]
  //     //buttonsRefs.current.push(ref)
  //     buttonsRefs.current[ref[1]] = ref[0]
  //   }
  //   // console.log(buttonsRefs.current)
  // }

  const AudioClip = ({clip="#", id=null}) => {
    return (
      <audio id={id} src={clip} className='clip' ></audio>
    )
  }


  return (
    <div autoFocus id="drum-machine"  tabIndex="0" className="App" onKeyDown={(e) => {Handlerkey(e)}}>
      {/* <Pad id={actions.pad1.letra} texto={actions.pad1.letra} audio={audios(actions.pad1.audio)}/> */}
      <span className='botones'>
      <Pad  id={actions[0].letra} texto={actions[0].letra} audio={<AudioClip clip={actions[0].audio} id={actions[0].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[0].nombre}/>

      <Pad  id={actions[1].letra} texto={actions[1].letra} audio={<AudioClip clip={actions[1].audio} id={actions[1].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[1].nombre}/>
      
      <Pad  id={actions[2].letra} texto={actions[2].letra} audio={<AudioClip clip={actions[2].audio} id={actions[2].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[2].nombre}/>

      <Pad  id={actions[3].letra} texto={actions[3].letra} audio={<AudioClip clip={actions[3].audio} id={actions[3].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[3].nombre}/>

      <Pad  id={actions[4].letra} texto={actions[4].letra} audio={<AudioClip clip={actions[4].audio} id={actions[4].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[4].nombre}/>   

      <Pad  id={actions[5].letra} texto={actions[5].letra} audio={<AudioClip clip={actions[5].audio} id={actions[5].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[5].nombre}/>

      <Pad  id={actions[6].letra} texto={actions[6].letra} audio={<AudioClip clip={actions[6].audio} id={actions[6].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[6].nombre}/>

      <Pad  id={actions[7].letra} texto={actions[7].letra} audio={<AudioClip clip={actions[7].audio} id={actions[7].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[7].nombre}/>

      <Pad  id={actions[8].letra} texto={actions[8].letra} audio={<AudioClip clip={actions[8].audio} id={actions[8].letra}  />}
      estado={state} setDisplay={[setClip]} padClip={actions[8].nombre}/>


      </span>
      <ClipDisplay clipName={nameClip}  />

    </div>
  );
}

export default App;


const actions = [
  { nombre:"Heater 1", letra: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { nombre:"Heater 2", letra: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { nombre:"Heater 3", letra: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { nombre:"Heater 4", letra: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { nombre:"clap", letra: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { nombre:"open-HH", letra: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { nombre:"kick-n-hat", letra: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { nombre:"kick", letra: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { nombre:"close-HH", letra: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
]




{/* <Pad key={pad.letra} id={pad.letra} texto={pad.letra} audio={audios(pad.audio)} ref={addButtonRefs}/> */}

// actions.map(pad => {
//   return(
//     <Pad key={pad.letra} id={pad.letra} texto={pad.letra} audio={pad.audio} ref={addButtonRefs}/>
//   )
// })}