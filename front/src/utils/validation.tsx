export const validateSignup = (signupValues: {
  email:string;
  password:string;
  first_name:string;
  last_name:string;
  phone:string;
  address:string;
}) => {
    let errors = {};
    if (!signupValues.email) {
        errors = {...errors, email: "Email is required" };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(signupValues.email)) {
        errors = {...errors, email: "Email is invalid" };
    } 
    if (!signupValues.password) {
        errors = {...errors, password: "Password is required" };
    } 
    if (signupValues.password.length <6) {
        errors = {...errors, password: "Password is must be at least 6 characters" };
    } 
    if (!/[a-z]/.test(signupValues.password)) {
        errors = {...errors, password: "Password is must contain at least one lowercase letter" };
    } 
    if (!/[A-Z]/.test(signupValues.password)) {
        errors = {...errors, password: "Password is must contain at least one uppercase letter" };
    } 
    if (!/\d/.test(signupValues.password)) {
        errors = {...errors, password: "Password must contain at least one number " };
    } 
    if(!signupValues.first_name) {
        errors = {...errors, first_name: "First name is required" };
    }
    if(!signupValues.last_name) {
        errors = {...errors, last_name: "First name is required" };
    }
    if(!signupValues.phone) {
        errors = {...errors, phone: "First name is required" };
    } else if (!/^\d+$/.test(signupValues.phone)) {
            errors = {...errors, phone: "Phone number must contain only numbers" };
        } 
    if(!signupValues.address) {
        errors = {...errors, address: "First name is required" };
    }
    
    return errors;
};


export const validateSignin = (signupValues: {
    email:string;
    password:string;
  }) => {
    let errors = {};
    if (!signupValues.email) {
        errors = {...errors, email: "Email is required" };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(signupValues.email)) {
        errors = {...errors, email: "Email is invalid" };
    } 
    if (!signupValues.password) {
        errors = {...errors, password: "Password is required" };
    } 
    if (signupValues.password.length <6) {
        errors = {...errors, password: "Password is must be at least 6 characters" };
    } 
    if (!/[a-z]/.test(signupValues.password)) {
        errors = {...errors, password: "Password is must contain at least one lowercase letter" };
    } 
    if (!/[A-Z]/.test(signupValues.password)) {
        errors = {...errors, password: "Password is must contain at least one uppercase letter" };
    } 
    if (!/\d/.test(signupValues.password)) {
        errors = {...errors, password: "Password must contain at least one number " };
    } 
    return errors
  };