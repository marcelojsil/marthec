// pages/api/briefing.js
import { supabase } from "../../../components/Supabase";



export async function POST(request) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("marthec_briefings")
      .insert([body]);

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}