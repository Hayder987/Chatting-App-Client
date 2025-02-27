import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations = () => {
   const [loading, setLoading] = useState(false);
   const [conversation, setConversation] = useState([]);

   useEffect(()=>{
   const getConversations = async () =>{
    setLoading(true)
    try{
     const {data} = await axios.get(`/api/users`);
     if(data.error){
      throw new Error(data.error)
     }
     setConversation(data)
    }
    catch(err){
     toast.error(err.message)
    }
    finally{
      setLoading(false)
    }
   }
   getConversations()
   }, [])

  return {loading, conversation}
}

export default useGetConversations