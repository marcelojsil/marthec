import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Inicialize o cliente Supabase
const supabaseUrl = 'https://xlabrfblnrbgsneltjzp.supabase.co'  // Substitua pela URL do seu Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWJyZmJsbnJiZ3NuZWx0anpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQ0OTM2OSwiZXhwIjoyMDYyMDI1MzY5fQ.UkOrLcZf6x-PlMKiFo9U8VLXYcn1RlKVOSxgi7XxkGY'  // Substitua pela sua chave pública do Supabase
const supabase = createClient(supabaseUrl, supabaseKey)




const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Insira os dados na tabela marthec
      const { data, error } = await supabase
        .from('cdt_pessoas')  // Nome da tabela
        .insert([
          { nome, email, whatsapp }
        ])

      if (error) throw error
      setMessage('Dados enviados com sucesso!')
      setNome('')
      setEmail('')
      setWhatsapp('')
    } catch (error) {
      console.error('Erro ao inserir dados:', error)
      setMessage('Erro ao enviar os dados.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Cadastro</h2>

      {message && (
        <div className="mb-4 text-center text-sm font-semibold text-red-500">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Whatsapp</label>
          <input
            type="text"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}

export default Formulario
