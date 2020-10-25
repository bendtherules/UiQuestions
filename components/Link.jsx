import React from "react"

const Link = ({hash,title}) =>{

    const handleLink=(event)=>{
        //manually change hash to trigger hashChange event.
        window.location.hash  = "#";
        window.location.hash = hash;
      }
      
      
    return <a onClick={handleLink} className="navlink">{title}</a>
}

export default Link