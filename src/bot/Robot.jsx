'use client'
import { useState } from 'react'
import ChatBotModal from './ModalRobot'
import Image from 'next/image'

import './robot.css'

export default function RobotButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="whatsapp-float"
        onClick={() => setOpen(prev => !prev)}
      >
        
        <Image className='avatar'
          src="/img_bot.png"
          alt="Chatbot"
          width={100}
          height={100}
        />
        
      </button>

      <ChatBotModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
