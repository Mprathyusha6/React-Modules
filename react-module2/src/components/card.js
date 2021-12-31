import React from "react"

export default function Contact(props) {
    console.log(props)
    //object destructuring
    const {img,name,phone,email,state}=props
    let badgeText
    if (state === 0) {
        badgeText = "SOLD OUT"
    } else {
        badgeText = "ONLINE"
    }
    return (
        <div className="contact-card">
        <div className="card--badge">{badgeText}</div>
        {/* {state === 0 && <div className="card--badge">SOLD OUT</div>} */}
            <img alt="" src={img}/>
            
            <h3>{name}</h3>
            <div className="info-group">

                <img alt="" src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
            
                <img alt="" src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

