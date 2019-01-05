import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
// import axios from "axios";
import PPAPI from "../utils/pocketPantryAPI";

import {PostData} from '../services/PostData';

   
class Welcome extends Component{
    signup(res, type){
        let postData;
        
    if (type === 'google' && res.w3.U3) {
        postData = {
          name: res.w3.ig,
          provider: type,
          email: res.w3.U3,
          provider_id: res.El,
          token: res.Zi.access_token,
          provider_pic: res.w3.Paa
        }
    }

    if (postData) {
        PostData('signup', postData).then((result) => {
          let responseJson = result;
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({redirect: true});
        });
      } 
    

}
    render(){
        const responseGoogle = (response) => {
            console.log(response);
            PPAPI.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email)
            PPAPI.getUsersSavedRecipes(response.profileObj.googleId); 
            this.signup(response, "google");
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