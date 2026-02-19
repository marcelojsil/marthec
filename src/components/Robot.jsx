'use client'
import { useState } from 'react'
import ChatBotModal from './modal/ModalRobot'

import './style/robot.css'

export default function RobotButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="whatsapp-float"
        onClick={() => setOpen(prev => !prev)}
      >
        💬
      </button>

      <ChatBotModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
