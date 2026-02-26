'use client'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../components/Supabase'

export default function ChatBotModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const messagesEndRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    budget: ''
  })

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Mensagem inicial
  useEffect(() => {
    if (open && messages.length === 0) {
      simulateBotMessage("Olá 👋 Seja bem-vindo à Marthec! \n Meu nome é Marcelo e irei te atender.")
      setTimeout(() => {
        simulateBotMessage("Qual seu nome por favor?")
      }, 800)
    }
  }, [open])

  const simulateBotMessage = (text) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { sender: 'bot', text }])
    }, 1000)
  }

  const handleSend = async () => {
    if (!input) return

    setMessages(prev => [...prev, { sender: 'user', text: input }])

    // Lógica de fluxo do chatbot
    if (step === 1) {
      setFormData(prev => ({ ...prev, name: input }))
      simulateBotMessage(`Muito prazer, ${input}! 😊 \n\nQual serviço você deseja?\n\n1 - Site\n2 - Landing Page\n3 - Automação de WhatsApp\n4 - E-commerce`)
      setStep(2)
    }

    else if (step === 2) {
      const services = {
        "1": "Site institucional",
        "2": "Landing Page",
        "3": "Automação de WhatsApp",
        "4": "E-commerce"
      }

      const service = services[input] || input
      setFormData(prev => ({ ...prev, service }))
      simulateBotMessage("Qual seu orçamento estimado?")
      setStep(3)
    }

    else if (step === 3) {
      const updated = { ...formData, budget: input }

      await supabase
        .from('leads_marthec')
        .insert([{
          ...updated,
          conversation: messages
        }])

      simulateBotMessage("Perfeito! Vou te direcionar para o WhatsApp 🚀")

      setTimeout(() => {
        const message = `
Olá, sou ${updated.name}.
Tenho interesse em ${updated.service}.
Meu orçamento estimado é ${updated.budget}.
Vim pelo site da Marthec.
        `

        window.open(
          `https://wa.me/55129991022315?text=${encodeURIComponent(message)}`,
          '_blank'
        )

        onClose()
      }, 2000)
    }

    setInput('')
  }

  return (
    <div className={`chat-container ${open ? 'open' : ''}`}>
      <div className="chat-header">
        <div>
          <strong>Marthec</strong>
          <span className="status">online</span>
        </div>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="msg bot typing">
            digitando...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  )
}
