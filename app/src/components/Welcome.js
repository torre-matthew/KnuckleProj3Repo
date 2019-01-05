import React, {Component} from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';


const logout = () => {
    console.log('logout') // eslint-disable-line
    sessionStorage.clear();
    window.location.reload();
}
   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
            console.log(response.w3.ig);
            
            sessionStorage.setItem("un", response.w3.ig);
            sessionStorage.setItem("em", response.profileObj.email);

            window.location.reload();
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