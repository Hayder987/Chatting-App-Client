
import Conversations from "./Conversations"
import LogOutBtn from "./LogOutBtn"
import SearchInput from "./SearchInput"


const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput></SearchInput>
      <div className="divider px-3"></div>
      <Conversations></Conversations>
      <LogOutBtn></LogOutBtn>
    </div>
  )
}

export default SideBar


