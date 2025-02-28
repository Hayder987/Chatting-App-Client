import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"


const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setMessages, selectedConversation} = useConversation()

  useEffect(()=>{
   const getMessages = async ()=>{
    setLoading(true)
    try{
      const {data} = axios.get(`/api/messages/${selectedConversation._id}`)

      if(data.error) {
        throw new Error(data.error)
      }
      setMessages(data)
    }
    catch(err){
     toast.error(err.message)
    }
    finally{
     setLoading(false)
    }
   }

   if(selectedConversation?._id) getMessages()

   

  }, [selectedConversation?._id, setMessages])
  
  return {messages, loading}
}

export default useGetMessages