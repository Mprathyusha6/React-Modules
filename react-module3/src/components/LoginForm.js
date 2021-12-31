import React from "react";

export default function Login(){
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            
            if(formData.joinedNewsletter) {
                console.log("Thanks for sign up")
            }
            console.log("Successfully signed up")
        } 
        else {
            console.log("Passwords do not match")
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="loginPage">
            <div className="loginForm">
            <input 
            type="text" 
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
             />
            <input 
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
             />
            <input 
            type="text" 
            placeholder="Conform Password"
            name="passwordConfirm"
            onChange={handleChange}
            />
             <div>
              <input type="checkbox" id="conform"/> <label htmlFor="conform">i want to join the news letter</label> 
              </div>
              <button className="memeButton">Sign up</button>
            </div>
            
        </div>
        </form>
    )
}