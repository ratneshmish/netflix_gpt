export const checkvalidate=(email,password,fullname)=>{
    if(fullname){
 const Isfullname=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?$/.test(fullname);
 if(!Isfullname) return "Username is Not Valid!";
    }
   
 const Isemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const Ispassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
 if(!Isemail) return "Email ID is Not Valid!";
 if(!Ispassword) return "Password is Not Valid!";
 return null;
}