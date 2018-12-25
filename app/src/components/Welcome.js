import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';


   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
          }
           
        return(
            <div className= "row" id= "Body">
            <div className= "medium-12 columns">
            <h2 id="welcomeText">Log in with Google</h2>
            <GoogleLogin
                clientId="219205541710-tbgv10kbpl60g72od59iu9t68aaiu8e3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            <a href="signup" className="button success"> Signup</a>
            </div>
            </div>
        );
        
    }
}

 
  

export default Welcome;