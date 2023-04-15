import { redirect } from "react-router-dom";


export function getTokenDuration() {

    const expirationDate = new Date(localStorage.getItem('expiration'));
    console.log(expirationDate)
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    console.log(duration)
    return duration;
}



export function getAuthToken() {

    const token = localStorage.getItem('token')
    const tokenDuration = getTokenDuration();


    if(!token) {

        return null;
    }


    if(tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token
}

export function tokenLoader() {
   return getAuthToken()
   
}


export function checkAuthLoader() {
    // this function will be added in the next lecture
    // make sure it looks like this in the end
    const token = getAuthToken();
    
    if (!token) {
      return redirect('/auth');
    }
   
    return null; // this is missing in the next lecture video and should be added by you
  }