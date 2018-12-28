import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';
<<<<<<< HEAD
=======
// 
>>>>>>> 319d18ff3893ea19b6d491e0970011f45307cbda


   
class Welcome extends Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response);
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
        );
        
    }
}

 
  

export default Welcome;