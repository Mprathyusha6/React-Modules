export default function Main(){
    var c=0
    function handleClick() {
        console.log("I was clicked!")
    }
    function handleMouseOver(){
        c=c+1
        console.log(c)
    }
    return(
        <div className="container">
            <img src="https://picsum.photos/640/360" alt="" onMouseOver={handleMouseOver}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}