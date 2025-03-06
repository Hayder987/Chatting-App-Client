import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChat from "./NoChat";
import useConversation from "../zustand/useConversation";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
   
    return ()=> setSelectedConversation(null)

  }, [setSelectedConversation])

  return (
    <div className="lg:min-w-[700px] flex flex-col">
      {!selectedConversation ? (
        <NoChat></NoChat>
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-400 px-4 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//   return (
//     <div className="lg:min-w-[700px] flex flex-col">
//       <>
//       {/* header */}
//       <div className="bg-slate-500 px-4 mb-2">
//         <span className="label-text">To: </span><span className="text-gray-900 font-bold">Orin</span>

//       </div>
//       <Messages></Messages>
//       <MessageInput></MessageInput>
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
