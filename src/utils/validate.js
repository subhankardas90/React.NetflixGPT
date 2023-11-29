export const  checkValidSignInData =(email, password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isEmailValid) 
        return "Email ID is not valid";
    if (!isPasswordValid) 
        return "Password is not valid";
  
    
    return null;
}

export const  checkValidSignUpData =(email, password, name, isSignInForm)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /^[A-Za-z\\s]+$/.test(name);
    // console.log(!isSignInForm);
    // console.log(name)
    // console.log(isNameValid);
    // if (!isSignInForm && name && !isNameValid) 
    //     return "Name ID is not valid";
    if (!isEmailValid) 
        return "Email ID is not valid";
    if (!isPasswordValid) 
        return "Password is not valid";
  
    
    return null;
}