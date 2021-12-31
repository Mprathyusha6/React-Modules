import React from "react"
import Contact from "./card"
import contactInfo from "./contactinfo"


export default function ContactApp() {
    const ContactElements = contactInfo.map(item => {
        return <Contact 
        key={item.id}
        {...item}
        //-------------------------
        // item={item}
        //---------------------------
        // state={item.state}
        // img={item.img}
        // phone={item.phone} 
        // name={item.name} 
        // email={item.email} 

        />
    })
    return (
        <div>
            {ContactElements}
        </div>
    )
}