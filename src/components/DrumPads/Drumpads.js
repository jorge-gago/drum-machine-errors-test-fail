import React from "react";
import Style from "./DrumPads.module.css"
import { useEffect, useState } from "react";

export const Pad = ({ id = null, texto = 'place holder', audio = null, estado = "", setDisplay, padClip="test test" }) => {

    const [playing, setPlay] = useState(true)

    useEffect(() => {
        // console.log(estado, 'in pad')
        // console.log(setDisplay)
        keyPress()
        
    }, [estado])

    const keyPress = () => {
        if (estado[0] === id ) {
            //console.log('insede pad ', id)
            // updateClip()
            // playSound()
            triggerClip()
        }
        //console.log('pad ', id)
        
    }

    const updateClip = () => {
        const name = padClip
        //console.log('update ', padClip)
        //console.log('updateName ', name)
        setDisplay[0](() => {
            return name
        })
    }

    const triggerClip = () => {
        updateClip()
        playSound()
    }

    const playSound = async () =>{
        
        const self = document.getElementById(id)
        try { 
            // const self = document.getElementById(id) 
        // const sound = await self.load()
            await self.play()
            console.log("sound")
        } catch (e) {
            // console.log(`error ${e}`)
            console.log('catch')
            await self.play()
        }

        
        // if (playing){
        // .then(
        //     self.pause(),
        //     self.currentTime = 0
        // )
        // }
        //setPlay(() => true)
        // self.play()
        //setPlay(() => false)

    }

    return (
        <div id = {`pad-${id}`} className = {`${Style.pad} drum-pad` } onClick={() => triggerClip()}>
            {texto}
            {audio}
        </ div> 
    )
}
