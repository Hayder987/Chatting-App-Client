import { extractTime } from "../../../backend/utils/extractTime";
import useAuthContext from "../hooks/useAuthContext"
import useConversation from "../zustand/useConversation";


const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-800';




  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
           <div className="w-10 rounded-full">
            <img 
            src={profilePic} 
            alt="Chat user Image" 
            className="" 
            />

           </div>
        </div>
        <div className={`chat-bubble text-gray-300 ${bubbleBgColor}`}>{message?.message}</div>
        <div className="chat-footer text-xs text-gray-400 flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message



// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//            <div className="w-10 rounded-full">
//             <img 
//             src="https://i.ibb.co.com/yQVc3zX/280112897-1476710909415001-2943046122797346934-n.jpg" 
//             alt="Chat user Image" 
//             className="" 
//             />

//            </div>
//         </div>
//         <div className="chat-bubble text-white bg-blue-500">Hi! Orin</div>
//         <div className="chat-footer text-xs text-gray-400 flex gap-1 items-center">12:10</div>
//     </div>
//   )
// }

// export default Message