
function Wish() {
    const date = new Date()
    // const hours = date.getHours() % 12
    let wish=''
    if( date.getHours()<12){
        wish='Good Morning'
        
    }
    else if( date.getHours()>12 &&  date.getHours()<18){
        wish='Good Afternoon '
    }
    else{
        wish='Good Night'
    }
    
    return (
        <h1>{wish}!</h1>
    )
  }

  export default Wish