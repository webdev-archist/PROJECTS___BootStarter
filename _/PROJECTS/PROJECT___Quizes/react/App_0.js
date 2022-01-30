import React, {useState, useEffect, useLayoutEffect} from 'react'
import {render} from 'react-dom'



const usePersTest = () => {
    const [test, setTest] = useState(0)
    const pers = () => {
        console.log(test);
        setTest(c=>c+10)
    }
    return [test, pers]
}
export default function Compteur(){
    const [test, setTest] = useState(0)
    const [persTest, setPersTest] = usePersTest(0)
    // setPersTest()
    useEffect(()=>{
        console.log("useeffect");
        // if(persTest<90)setPersTest()
        let tmp = setInterval(()=>{console.log("pers: "+persTest);},1000)
        return ()=>{clearInterval(tmp)}
    }, [persTest])
    useLayoutEffect(()=>{
        console.log("uselayouteffect");
        if(persTest==30)document.body.style.background="green"
    })

    console.log(test);
    // setTest('oui')
    const hand = e=>{setTest(10);setPersTest()}
    // console.log(test);
    console.log(('oui'));
    return <div onClick={hand}>oui: {test}-{persTest}</div>
}

// setTimeout(()=>{
//     render(<Compteur />, document.querySelector('#root'))
// }, 5000)
