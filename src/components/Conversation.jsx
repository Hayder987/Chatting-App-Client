import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const Conversation = ({conversation, lastIdx}) => {

  const {selectedConversation, setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === conversation._id ;

  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id);


  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer
       ${isSelected? "bg-sky-500": ""}
        `}
        onClick={()=> setSelectedConversation(conversation)}
        >
        <div className={`avatar ${isOnline? 'avatar-online':'avatar-offline'} `}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePic} alt="User avatar" className="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="text-xl">🚀</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="border-b-2 border-gray-600"></div>}
    </>
  );
};

export default Conversation;


// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
//         <div className="avatar avatar-online">
//           <div className="w-12 rounded-full">
//             <img src="https://i.ibb.co.com/yQVc3zX/280112897-1476710909415001-2943046122797346934-n.jpg" alt="User avatar" className="" />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between ">
//             <p className="font-bold text-gray-200">Orin</p>
//             <span className="text-xl">🚀</span>
//           </div>
//         </div>
//       </div>

//       <div className="border-b-2 border-gray-600"></div>
//     </>
//   );
// };

// export default Conversation;




