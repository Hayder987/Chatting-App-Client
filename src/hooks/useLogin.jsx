import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";


const useLogin = () => {
 const [loading, setLoading] = useState(false)
 const {setAuthUser } = useAuthContext();

 const login = async (username, password)=>{
    setLoading(true);
    try{
      const {data} = await axios.post(`/api/auth/login`, {username, password})
    
      if(data.error){
        throw new Error(data.error)
      }
      
      localStorage.setItem('chat-user', JSON.stringify(data))
      setAuthUser(data)

    }
    catch(err){
        toast.error(err.message)
    }
    finally{
     setLoading(false)
    }
 }

 return {loading, login}

}

export default useLogin