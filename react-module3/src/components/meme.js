// import memesData from "./memesData"
import React from "react"

export default function Memo(){
    const [meme,setMeme]=React.useState({
           topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})

const [memesData, setAllMemes] = React.useState([])

// React.useEffect(()=>{
//        fetch("https://api.imgflip.com/get_memes")
//                 .then(res => res.json())
//                 .then(data => 
//                     setAllMemes(data)
//         )
// },[])


React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data)
}, [])


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {value,name}=event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (<main>

    
        <div className="Meme">
            <div className="align-center">
                <input 
                type="text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}  
                onChange={handleChange}  
                />
              
            </div>
            <button className="memeButton" onClick={getMemeImage}>Get a New Meme image</button>
        </div>

        <div className="container">
        <img src={meme.randomImage} alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}