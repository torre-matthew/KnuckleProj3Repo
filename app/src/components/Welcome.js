import React, {Component} from 'react';
import PPAPI from "../utils/pocketPantryAPI"; 
import { GoogleLogout, GoogleLogin } from 'react-google-login';


const logout = () => {
    console.log('logout') // eslint-disable-line
    sessionStorage.clear();
    window.location.reload();
}

//THis function is checking to see if the user logging in via google already has a record in the database.
// It will make sure that mulitple records aren't created for the same googleId.
// if the do, save name and email address to session storage for display in the app while their session is live.
// if they don't, create a record for them in the Users collection, then save name and email address to session storage for display in the app while their session is live. 
let checkIfUserAlreadyExistsInDB = (response) => {
    if (PPAPI.getUserRecord(response.profileObj.googleId)) {
        sessionStorage.setItem("un", response.profileObj.name);
        sessionStorage.setItem("em", response.profileObj.email);
        PPAPI.getUsersSavedRecipes(response.profileObj.googleId);
    }  
    else {
        PPAPI.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email);
        sessionStorage.setItem("un", response.profileObj.name);
        sessionStorage.setItem("em", response.profileObj.email);
    }
}


   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
            checkIfUserAlreadyExistsInDB(response);
            window.location.reload(); // This reload is here so that once logged in, the user doesn't have to manually refresh to see their data appear in the app.
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
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
            <a href="signup" className="button success"> Signup</a>
            </div>
            </div>
        )
        
    }
}

  

export default Welcome;