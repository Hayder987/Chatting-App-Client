import { TiMessages } from "react-icons/ti";
import useAuthContext from "../hooks/useAuthContext";

const NoChat = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex 
      flex-col items-center gap-2">
        <p className="">Welcome ✨🎉 {authUser?.fullName} 🎉✨</p>
        <p className="">Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  )
}

export default NoChat