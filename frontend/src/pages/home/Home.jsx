import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[45px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding'>
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}

export default Home
