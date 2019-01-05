import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import PPAPI from "../utils/pocketPantryAPI"; 


   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
            
            sessionStorage.setItem("un", response.w3.ig);
            sessionStorage.setItem("em", response.profileObj.email);

            PPAPI.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email);
            PPAPI.getUsersSavedRecipes(response.profileObj.googleId);
          }

        return(
            <div className= "row" id= "Body">
            <div className= "medium-12 columns">
            <GoogleLogin
                clientId="219205541710-tbgv10kbpl60g72od59iu9t68aaiu8e3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            <a href="signup" className="button success"> Signup</a>
            </div>
            </div>
        )
        
    }
}

  

export default Welcome;