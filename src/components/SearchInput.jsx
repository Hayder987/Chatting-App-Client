import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search will be at least 3 characters long')
    }
    
    const conversation = conversations.find((items)=> items.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }
    else{
      toast.error('No Result Found Tell Your Partner To Create Account')
    }

  }

  return (
    <div>
      <form
      onSubmit={handleSubmit}
       className="flex pt-6 px-3 items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className="input w-full bg-gray-800  border-none text-white rounded-full"
          required
        />
        <button className="p-3 bg-blue-800 cursor-pointer text-white rounded-full">
        <LuSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;


// import { LuSearch } from "react-icons/lu";

// const SearchInput = () => {
//   return (
//     <div>
//       <form className="flex pt-6 px-3 items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="input w-full bg-gray-900  border-none text-white rounded-full"
//           required
//         />
//         <button className="p-3 bg-blue-800 cursor-pointer text-white rounded-full">
//         <LuSearch />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

