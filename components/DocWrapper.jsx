import React from "react"
import { useEffect } from "react"

const DocWrapper = ({children})=>{

   useEffect(()=>{
    let hash = location.hash.substring(1);
    // Remove scroll restoration when there is a hash of length > 0.
    if (hash.length!==0 && "scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    // Check if the hash type is a Docusauraus link or a reference link within document.
    let isDocusaurusLink = (hash.substring(0,4) !== "link")
    let targetElement;
    targetElement = document.getElementById(hash)
    if(!targetElement)return
    if(isDocusaurusLink)
    targetElement.scrollIntoView(true)
   },[])

   return <>{children}</>
}

export default DocWrapper