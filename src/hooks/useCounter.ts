import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import {gsap} from 'gsap';


export const useCounter = (max: number) =>{
    const [counter, setCounter] = useState<number>(5);

    const elementToAnimate = useRef<any>(null);

    const timeline = useRef(gsap.timeline())


    useLayoutEffect(() => {

        if (!elementToAnimate.current) return;

        timeline.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                .to(elementToAnimate.current, {y: 0, duration: 0.1, ease: 'bounce.out'})
                .pause();

    }, []);

    useEffect(() => {
      timeline.current.play(0);
    }, [counter])
    
    

    const incrementar = () =>{
        setCounter(prevValue => Math.min(prevValue + 1, max));
    }

    const decrementar = () =>{
        setCounter(prevValue => prevValue - 1);
    }


    return {
        counter,
        incrementar,
        decrementar,
        elementToAnimate,
        max
    }
}