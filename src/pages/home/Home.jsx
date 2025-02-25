import MessageContainer from "../../components/MessageContainer"
import SideBar from "../../components/SideBar"


const Home = () => {
  return (
    <div className=" flex sm:h-[450px] md:h-[750px] rounded-lg overflow-hidden opacity  bg-clip-padding 
       backdrop-blur-lg ">
          <SideBar></SideBar>
          <MessageContainer></MessageContainer>
    </div>
  )
}

export default Home