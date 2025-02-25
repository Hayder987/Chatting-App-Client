import { FiSend } from "react-icons/fi";
const MessageInput = () => {
  return (
    <div className="">
      <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Send a message"
            className="input w-full bg-gray-900 border-none text-white input-bordered"
            required
          />
          <button
            type="submit"
            className="absolute text-gray-400 text-2xl cursor-pointer inset-y-0 end-0 flex items-center pe-5"
          >
            <FiSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;


// import { FiSend } from "react-icons/fi";
// const MessageInput = () => {
//   return (
//     <div className="">
//       <form className="px-4 my-3">
//         <div className="w-full relative">
//           <input
//             type="text"
//             placeholder="Send a message"
//             className="input w-full bg-gray-900 border-none text-white input-bordered"
//             required
//           />
//           <button
//             type="submit"
//             className="absolute text-gray-400 text-2xl cursor-pointer inset-y-0 end-0 flex items-center pe-5"
//           >
//             <FiSend />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageInput;





