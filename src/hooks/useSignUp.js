import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";

const useSignUp = ()=>{
 const [loading, setLoading] = useState(false);
 const {setAuthUser} = useAuthContext()

 const signup = async ({fullName, username, password, confirmPassword, gender})=>{
    const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
   
    if(!success) return
    setLoading(true)
    try{
      
      const {data} =await axios.post(`/api/auth/signup`, {fullName, username, password, confirmPassword, gender})
       if(data.error){
        throw new Error(data.error)
       }
      
       //local storage
       localStorage.setItem('chat-user', JSON.stringify(data))
      // context   
      setAuthUser(data)
    }
    catch(err){
        toast.error(err.message)
    }
    finally{
        setLoading(false)
    }
 }
  return {loading, signup}
}

export default useSignUp;

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please Fill All Field')
        return false
    }
    if(password !== confirmPassword){
        toast.error("Password Don't Match")
        return false
    }
    if(password.length<6){
        toast.error("Password Must Be 6 Character")
        return false  
    }

    return true
}