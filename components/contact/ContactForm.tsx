"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import {
  Send,
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Briefcase,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Site Institucional",
  "Landing Page",
  "Sistema Web",
  "SaaS",
  "Loja Virtual",
  "Outro",
];

const budgets = [
  "Até R$2.000",
  "R$2.000 - R$5.000",
  "R$5.000 - R$10.000",
  "Acima de R$10.000",
];

const formSchema = z.object({
  name: z.string().min(3, "Informe seu nome."),
  company: z.string().optional(),
  email: z.string().email("E-mail inválido."),
  phone: z.string().min(14, "Telefone inválido."),
  service: z.string().min(1, "Selecione um serviço."),
  budget: z.string().optional(),
  message: z.string().min(10, "Descreva seu projeto."),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".contact-form", {
        opacity: 0,
        x: 80,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".field", {
        opacity: 0,
        y: 20,
        stagger: .08,
        duration: .5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      });

    }, formRef);

    return () => ctx.revert();

  }, []);

  function formatPhone(value: string) {

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/, "($1) $2");

    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    return value;
  }

  async function onSubmit(data: FormData) {
    // Parte 2
  }

  return (

<div
ref={formRef}
className="
contact-form

relative

rounded-[32px]

border
border-white/10

bg-white/[0.04]

backdrop-blur-xl

p-6

lg:p-10
"
>

<form
onSubmit={handleSubmit(onSubmit)}
className="space-y-5"
>

{/* Nome */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<User size={16}/>

Nome

</label>

<input

{...register("name")}

placeholder="Seu nome"

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3

outline-none

transition

focus:border-primary
"

/>

<p className="mt-1 text-xs text-red-500">

{errors.name?.message}

</p>

</div>

{/* Empresa */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<Building2 size={16}/>

Empresa

</label>

<input

{...register("company")}

placeholder="Nome da empresa"

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3

outline-none

focus:border-primary
"

/>

</div>

{/* Email */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<Mail size={16}/>

E-mail

</label>

<input

type="email"

{...register("email")}

placeholder="email@empresa.com"

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3

outline-none

focus:border-primary
"

/>

<p className="mt-1 text-xs text-red-500">

{errors.email?.message}

</p>

</div>

{/* WhatsApp */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<Phone size={16}/>

WhatsApp

</label>

<input

{...register("phone")}

onChange={(e)=>{

e.target.value=formatPhone(e.target.value)

}}

placeholder="(12) 99999-9999"

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3

outline-none

focus:border-primary
"

/>

<p className="mt-1 text-xs text-red-500">

{errors.phone?.message}

</p>

</div>

{/* Serviço */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<Briefcase size={16}/>

Serviço

</label>

<select

{...register("service")}

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3
"

>

<option value="">

Selecione...

</option>

{services.map(service=>(

<option
key={service}
value={service}
>

{service}

</option>

))}

</select>

</div>

{/* Orçamento */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<DollarSign size={16}/>

Investimento

</label>

<select

{...register("budget")}

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3
"

>

<option value="">

Selecione...

</option>

{budgets.map(item=>(

<option
key={item}
value={item}
>

{item}

</option>

))}

</select>

</div>

{/* Mensagem */}

<div className="field">

<label className="mb-2 flex items-center gap-2 text-sm font-medium">

<MessageSquare size={16}/>

Conte sobre seu projeto

</label>

<textarea

rows={6}

{...register("message")}

placeholder="Descreva seu projeto..."

className="
w-full

rounded-xl

border
border-border

bg-background/50

px-4
py-3

resize-none

outline-none

focus:border-primary
"

/>

<p className="mt-1 text-xs text-red-500">

{errors.message?.message}

</p>

</div>

<Button
type="submit"
disabled={loading}
className="
w-full
h-12
text-base
"
>

{loading ? (

<>

<Loader2
size={18}
className="mr-2 animate-spin"
/>

Enviando...

</>

):(

<>

<Send
size={18}
className="mr-2"
/>

Solicitar orçamento

</>

)}

</Button>

</form>

</div>

  );
}