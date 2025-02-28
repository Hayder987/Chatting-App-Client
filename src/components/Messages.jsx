import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./MessageSkeleton";


const Messages = () => {
  const {messages, loading} = useGetMessages();

  console.log(messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
        {
          !loading && messages.length>0 && (
            messages.map((message)=>(
              <Message key={message._id} message={message}></Message>
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