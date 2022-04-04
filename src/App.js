import React from "react";
import Profile from "./profile/profile";

const App = () => {
  /* Alert function*/
  
  const handleName = (name) => {
    alert(`Hello Mr. ${name}`)
  }
  
  return <div>
    <Profile
      fullName=" Riadh Khaterchi"
      bio="I'm learning Full Stack Js in GoMyCode .This is my First props issue."
      profession="Web Developer"
      handleName={handleName}
      
    >
      
      <div>
        <img style={{width:'150px', border:'2px solid white',marginTop:'130px',marginLeft:'44%'} }src="./picture1.jpg" alt="profilePic"/>
      </div>
      </Profile>
  </div>
    
    
  
}

export default App;
