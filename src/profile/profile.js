import React from "react"
import propTypes from 'prop-types'


const Profile = (props) => {
  
    return <> 
    <div style={{backgroundColor: '#D9AFD9',backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',height:'250px'}}>
       
            {props.handleName(props.fullName)}

         <div>
       
                {props.children}
        </div>
     
        
        </div>
        <div>
        
            <h2 style={{ textAlign: 'center', paddingTop: '90px',fontSize:'31px' ,fontFamily:'Raleway'}}>
                {props.fullName}
            </h2>
        <div>
                <h3 style={{textAlign: 'left', marginLeft: '20px', fontWeight: '300px', paddingTop: '40px',
                    width: '400px', fontFamily: 'sans-serif', lineHeight: '30px'}}>
                    Bio : <p style={{ fontSize: '18px', fontFamily: 'Raleway' }}>
                           {props.bio}
                          </p>
            </h3>
        </div>
            <h3 style={{ textAlign: 'left', width: '250px', marginLeft: '20px', fontFamily: 'sans-serif',
                lineHeight: '30px' }}>
                Profession:<p style={{ fontSize: '18px', fontFamily: 'Raleway' }}>
                           {props.profession}
                          </p>
            </h3>
        </div>
        </>

}


Profile.defaultProps = {
    fullName: "Khaterchi Riadh",
    bio: "I'm learning Full Stack Js in GoMyCode .This is my First props issue.",
    profession: 'Web Developer'
    
}


Profile.propTypes = {
    fullName: propTypes.string.isRequired,
    bio: propTypes.string.isRequired,
    profession: propTypes.string,
    handleName:propTypes.func
}

export default Profile; 