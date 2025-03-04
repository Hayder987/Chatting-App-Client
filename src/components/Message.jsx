// import { extractTime } from "../../../backend/utils/extractTime";
import useAuthContext from "../hooks/useAuthContext"
import { extractTime } from "../utils/extractTime";
import useConversation from "../zustand/useConversation";


const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-800';
  const shakeClass = message.shouldShake ? "shake" : ''




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
        <div className={`chat-bubble max-w-[300px] text-gray-300 ${bubbleBgColor} ${shakeClass}`}>{message?.message}</div>
        <div className="chat-footer text-xs text-gray-300 flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message



