import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <div>
      <form className="flex pt-6 px-3 items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input w-full bg-gray-900  border-none text-white rounded-full"
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

