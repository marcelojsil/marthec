"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Globe } from "lucide-react";
import "./hero_1.css";

const floatingElements = [
  { icon: Code2, delay: 0, x: "10%", y: "20%" },
  { icon: Zap, delay: 0.2, x: "85%", y: "15%" },
  { icon: Globe, delay: 0.4, x: "75%", y: "70%" },
];

export default function Hero_1() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-primary"
        />

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-accent"
        />

        <div className="grid-pattern" />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -20, 0] }}
          transition={{
            delay: el.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="floating-icon"
          style={{ left: el.x, top: el.y }}
        >
          <div className="floating-box">
            <el.icon size={32} />
          </div>
        </motion.div>
      ))}

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            Tecnologia que transforma negócios
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Transformamos <span className="primary">ideias</span> em{" "}
            <span className="accent">soluções digitais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            Desenvolvemos sites, sistemas web e aplicações sob medida para
            impulsionar o crescimento do seu negócio com tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-buttons"
          >
            <a href="#contato" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={18} />
            </a>

            <a href="#portfolio" className="btn-outline">
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="stats"
          >
            <div>
              <h3>100+</h3>
              <span>Projetos Entregues</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Clientes Satisfeitos</span>
            </div>

            <div>
              <h3>5+</h3>
              <span>Anos de Experiência</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Suporte Dedicado</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-mouse"
        >
          <div className="scroll-dot" />
        </motion.div>
      </motion.div>
    </section>
  );
}