import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble' src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is upp</div>
    </div>
  )
}

export default Message
