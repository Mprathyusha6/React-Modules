import React from "react"

export default function WindowTracker() {
    
    const [width,setwidth]=React.useState(0)
    
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            // console.log("Resized")
            setwidth(window.innerWidth)
        })
    }, [])
    
    return (
        <h1>Window width: {width}</h1>
    )
}
