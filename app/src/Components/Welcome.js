import React, {Component} from 'react';
import PPAPI from "../utils/pocketPantryAPI"; 
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import "./style.css";

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
    PPAPI.getUserRecord(response.profileObj.googleId); 
    if (PPAPI.getUserRecord(response.profileObj.googleId) != null) {
        sessionStorage.setItem("un", response.profileObj.name);
        sessionStorage.setItem("em", response.profileObj.email);
        cb(response.profileObj.googleId, addSavedRecipesToSessionStorage);
    }  
    else {
        PPAPI.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email);
        sessionStorage.setItem("un", response.profileObj.name);
        sessionStorage.setItem("em", response.profileObj.email);
    }
}

// let getSavedRecipesFromDB = (googleId, cb) => {
//     let savedRecipeArr = PPAPI.getUsersSavedRecipes(googleId);
//         cb(savedRecipeArr);
// }

// let addSavedRecipesToSessionStorage = (arr) => {
//     sessionStorage.setItem("savedRecipes", JSON.stringify(arr));
// } 
   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
            checkIfUserAlreadyExistsInDB(response);
            // window.location.reload(); // This reload is here so that once logged in, the user doesn't have to manually refresh to see their data appear in the app.
          }

        return(
            <div className= "row" id= "Body">
            <div className= "medium-12 columns g-buttons">
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
            <button type="button" href="signup" className="button success">
                <div>
                    <svg width="18" height="18">
                        <g fill="#000"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g>
                    </svg>
                </div>
                <span>Continue as Guest</span>
            </button>
            </div>
            </div>
        )
        
    }
}

  

export default Welcome;