import { createClient } from "@supabase/supabase-js"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, supabaseKey)

    const body = await request.json()
    const { nome, telefone, email, tipoNegocio, mensagem } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json({ error: "Nome, email e telefone são obrigatórios" }, { status: 400 })
    }

    const { error } = await supabase.from("contatos").insert([
      {
        nome,
        telefone,
        email,
        tipo_negocio: tipoNegocio,
        mensagem,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Erro ao inserir no Supabase:", error)
      return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
    }

    return NextResponse.json({ message: "Contato enviado com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro na API:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
