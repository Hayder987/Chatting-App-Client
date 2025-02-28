import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./MessageSkeleton";


const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();
  console.log(lastMessageRef)
  useEffect(()=> {
   setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
   }, 100)
  }, [messages])

 
  return (
    <div className="px-4 flex-1 overflow-auto">
        {
          !loading && messages.length>0 && (
            messages.map((message)=>(
              <div key={message._id} className=""
              ref={lastMessageRef}
              >
                <Message message={message}></Message>
              </div>
            ))
          )
        }

        {loading && <MessageSkeleton></MessageSkeleton>}

        {
          !loading && messages.length === 0 && (
            <p className="text-center text-gray-400">Send a message to start the conversation</p>
          )
        }


    </div>
  )
}

export default Messages


// import Message from "./Message"


// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//     </div>
//   )
// }

// export default Messages