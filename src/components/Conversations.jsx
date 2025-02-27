
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';

const Conversations = () => {
 const {loading, conversation} = useGetConversations();

 console.log(conversation)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        
    </div>
  )
}

export default Conversations

// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//     </div>
//   )
// }

// export default Conversations