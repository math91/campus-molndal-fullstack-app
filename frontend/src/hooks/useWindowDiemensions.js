import { useState, useEffect } from "react"

const getWindowDiemensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return { width, height }
}

export const useWindowDiemensions = () => {
    const [windowDiemensions, setWindowDiemensions] = useState(getWindowDiemensions()) 
    const handleResize = () => { setWindowDiemensions(getWindowDiemensions())}

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return windowDiemensions

}

