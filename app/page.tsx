'use client'

import { useState } from 'react'
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Differentials } from "@/components/sections/differentials"
import { About } from "@/components/sections/about"
import { CTA } from "@/components/sections/cta"
import { Pricing } from "@/components/sections/pricing"
import { Footer } from "@/components/sections/footer"
import { OfferModal } from "@/components/modals/offer-modal"
import { BudgetModal } from "@/components/modals/budget-modal"
import { FloatingButtons } from "@/components/floating-buttons"

export default function SitePage() {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false)

  return (
    <>
      <OfferModal />
      <BudgetModal isOpen={isBudgetModalOpen} onClose={() => setIsBudgetModalOpen(false)} />
      <FloatingButtons />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Differentials />
        
        <Pricing onOpenBudget={() => setIsBudgetModalOpen(true)} />
        <CTA onOpenBudget={() => setIsBudgetModalOpen(true)} />
        <Footer />
      </main>
    </>
  )
}
