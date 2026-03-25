'use client'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../components/Supabase'

export default function ChatBotModal({ open, onClose }) {

  const [step, setStep] = useState(1)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const messagesEndRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    businesstype: '',
    goal: '',
    website: '',
    deadline: '',
    budget: ''
  })

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Mensagem inicial
  useEffect(() => {
    if (open && messages.length === 0) {

      simulateBotMessage(
`Olá 👋 Seja bem-vindo à Marthec!

Nós ajudamos empresas a crescer com sites profissionais e automações.

Qual é o seu nome?`
      )

    }
  }, [open])

  const simulateBotMessage = (text) => {

    setTyping(true)

    setTimeout(() => {

      setTyping(false)

      setMessages(prev => [
        ...prev,
        { sender: 'bot', text }
      ])

    }, 3000)

  }

  const handleSend = async () => {

    if (!input.trim()) return

    const userInput = input.trim()

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userInput }
    ])

    setInput('')

    /* STEP 1 - NOME */

    if (step === 1) {

      setFormData(prev => ({ ...prev, name: userInput }))

      simulateBotMessage(
`Prazer ${userInput}! 😊

Qual serviço você procura?

Digite o número da opção:

1 - Criação de Site
2 - Landing Page
3 - Bot para WhatsApp
4 - Saas
5 - Outro`
      )

      setStep(2)
      return
    }

    /* STEP 2 - SERVIÇO */

    if (step === 2) {

      const services = {
        "1": "Criação de Site",
        "2": "Landing Page",
        "3": "Bot para WhatsApp",
        "4": "Saas",
        "5": "Outro"
      }

      const service = services[userInput]

      if (!service) {
        simulateBotMessage("Por favor digite um número de 1 a 5.")
        return
      }

      setFormData(prev => ({ ...prev, service }))

      simulateBotMessage(
`Qual ramo de empresa ou projeto?

1 - Empresa local
2 - Profissional autônomo
3 - MEI
4 - Startup / projeto novo`
      )

      setStep(3)
      return
    }

    /* STEP 3 - TIPO DE NEGÓCIO */

    if (step === 3) {

      const types = {
        "1": "Empresa local",
        "2": "Profissional autônomo",
        "3": "MEI",
        "4": "Startup"
      }

      const businesstype = types[userInput]

      if (!businesstype) {
        simulateBotMessage("Digite um número de 1 a 4.")
        return
      }

      setFormData(prev => ({ ...prev, businesstype }))

      simulateBotMessage(
`Qual é o principal objetivo do site?

1 - Conseguir mais clientes
2 - Apresentar minha empresa
3 - Vender produtos online
4 - Captar contatos`
      )

      setStep(4)
      return
    }

    /* STEP 4 - OBJETIVO */

    if (step === 4) {

      const goals = {
        "1": "Conseguir mais clientes",
        "2": "Apresentar empresa",
        "3": "Vender produtos online",
        "4": "Captar contatos"
      }

      const goal = goals[userInput]

      if (!goal) {
        simulateBotMessage("Digite um número de 1 a 4.")
        return
      }

      setFormData(prev => ({ ...prev, goal }))

      simulateBotMessage(
`Você já possui um site?

1 - Não tenho site
2 - Tenho, mas quero melhorar
3 - Tenho, mas não gera resultados`
      )

      setStep(5)
      return
    }

    /* STEP 5 - SITE ATUAL */

    if (step === 5) {

      const sites = {
        "1": "Não possui site",
        "2": "Quer melhorar",
        "3": "Não gera resultados"
      }

      const website = sites[userInput]

      if (!website) {
        simulateBotMessage("Digite um número de 1 a 3.")
        return
      }

      setFormData(prev => ({ ...prev, website }))

      simulateBotMessage(
`Quando você gostaria de ter o projeto pronto?

1 - O mais rápido possível
2 - Até 30 dias
3 - Apenas pesquisando`
      )

      setStep(6)
      return
    }

    /* STEP 6 - PRAZO */

    if (step === 6) {

      const deadlines = {
        "1": "O mais rápido possível",
        "2": "Até 30 dias",
        "3": "Apenas pesquisando"
      }

      const deadline = deadlines[userInput]

      if (!deadline) {
        simulateBotMessage("Digite um número de 1 a 3.")
        return
      }

      setFormData(prev => ({ ...prev, deadline }))

      simulateBotMessage(
`Qual faixa de investimento você imagina?

1 - Até R$1500
2 - R$1500 a R$3000
3 - R$3000 a R$6000
4 - Acima de R$6000`
      )

      setStep(7)
      return
    }

    /* STEP 7 - ORÇAMENTO */

    if (step === 7) {

      const budgets = {
        "1": "Até R$1500",
        "2": "R$1500 a R$3000",
        "3": "R$3000 a R$6000",
        "4": "Acima de R$6000"
      }

      const budget = budgets[userInput]

      if (!budget) {
        simulateBotMessage("Digite um número de 1 a 4.")
        return
      }

      const updated = { ...formData, budget }

      setFormData(updated) 

  //    const { error } = await supabase
  //    .from('marthec_leads')
  //  .insert([{
  //   ...updated,
  //    conversation: messages
  //  }])

  const { data, error } = await supabase
  .from('marthec_leads')
  .insert([
    {
      name: updated.name,
      service: updated.service,
      businesstype: updated.businesstype,
      goal: updated.goal,
      website: updated.website,
      deadline: updated.deadline,
      budget: updated.budget
    }
  ])
  //.select()

console.log("DATA:", data)
console.log("ERROR:", error)

  if (error) {
    console.error("Erro ao salvar lead:", error)
  }

      simulateBotMessage(`Perfeito! Vou te direcionar para o WhatsApp 🚀 
        Caso ainda tenha alguma dúvida, estamos à disposição!`)

      setTimeout(() => {

        const message = `
Olá, sou ${updated.name}.

Tenho interesse em ${updated.service}.

Tipo de empresa: ${updated.businesstype}

Objetivo: ${updated.goal}

Prazo: ${updated.deadline}

Orçamento estimado: ${updated.budget}

Vim pelo site da Marthec.
`

        window.open(
          `https://wa.me/5512991022315?text=${encodeURIComponent(message)}`,
          '_blank'
        )

        onClose()

      }, 5)

    }

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
          placeholder="Digite sua resposta..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend()
          }}
        />

        <button onClick={handleSend}>➤</button>

      </div>

    </div>
  )
}