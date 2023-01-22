import React, {useImperativeHandle, forwardRef} from "react";
import Style from "./DrumPads.module.css"
import { useEffect, useState } from "react";

export const Pad = forwardRef(({ id = null, texto = 'place holder', audio = "#", estado = false}, ref) => {
    const [ activo, setActivo] = useState(estado)

    useEffect(() => {
        // console.log("inside ", id)
        playSound()
        setActivo(() => {return false})
    } , [activo])

    useImperativeHandle(ref, () =>  {
        return [setActivo, id]
    })

    const clickHandler = () => {
        //return audio? audio.play() : console.log('no function')
        playSound()
    }

    const playSound = () =>{
        //return audio? audio.play() : console.log('no function')
        document.getElementById(id).pause()
        document.getElementById(id).currentTime = 0
        document.getElementById(id).play()
    }



    return (
        <div id = {`pad-${id}`} className = {`${Style.pad} drum-pad` } onClick={() => clickHandler()}>
            <audio id={id} src={audio} className='clip'></audio>
            {texto}
        </ div> 
    )
})
