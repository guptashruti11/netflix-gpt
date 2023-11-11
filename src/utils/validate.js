export const checkValidData=(email,password)=>{
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isname=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
   

    if(!isemailvalid) return "Entered Email is not valid!"
    if(!ispassword) return "Entered Password is not valid!!"
    // if(!isname) return "Entered Name is not valid!!"
    return null;

};