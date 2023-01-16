import React, {useImperativeHandle, forwardRef} from "react";
import Style from "./DrumPads.module.css"
//import { useEffect, useState } from "react";

export const Pad = forwardRef(({ id = null, texto = 'place holder', audio = null, estado = false}, ref) => {
    //const [ activo, setActivo] = useState(estado)

    // useEffect(() => {
    //     console.log("inside")
    //     audio.play() || console.log("effect ")
  
    // } ,[activo])
    useImperativeHandle(ref, () =>  {
        return playSound()
    })

    const clickHandler = () => {
        //return audio? audio.play() : console.log('no function')
        playSound()
    }

    const playSound = () =>{
        return audio? audio.play() : console.log('no function')
    }



    return (
        <div id = {id}  className = {`${Style.pad}`} onClick={() => clickHandler()}>
            {texto}
        </ div>
    )
})
