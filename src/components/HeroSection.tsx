"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Camera,
  ClipboardCheck,
  Home,
  ShieldCheck,
} from "lucide-react";
import Header from "./Header";
import WhatsappButton from "./WhatsappButton";

export default function HeroSection() {
  const problemas = [
    "Infiltração escondida",
    "Problemas elétricos",
    "Acabamento mal feito",
    "Vazamentos",
  ];

  const selos = [
    { icon: <ClipboardCheck size={16} />, text: "Laudo completo" },
    { icon: <Camera size={16} />, text: "Fotos no relatório" },
    { icon: <Home size={16} />, text: "Entrega, compra e locação" },
  ];

  return (
    <section
      id="inicio"
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #FFF9F2 0%, #F6EFE8 52%, #F1E4D8 100%)",
      }}
    >
      <style jsx>{`
        .hero-primary-btn,
        .hero-secondary-btn,
        .hero-check-item,
        .hero-trust-item,
        .hero-image-card {
          transition: all 0.28s ease;
        }

        .hero-primary-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 18px 36px rgba(245, 124, 0, 0.34) !important;
          filter: brightness(1.04);
        }

        .hero-secondary-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(245, 124, 0, 0.5) !important;
          color: #f57c00 !important;
          box-shadow: 0 14px 30px rgba(93, 64, 55, 0.12);
        }

        .hero-check-item:hover {
          transform: translateX(8px);
          color: #f57c00 !important;
        }

        .hero-trust-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(93, 64, 55, 0.1);
        }

        .hero-image-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 28px 70px rgba(93, 64, 55, 0.18) !important;
        }

        @media (max-width: 980px) {
          .hero-grid-inline {
            grid-template-columns: 1fr !important;
            padding: 42px 22px 0 !important;
            text-align: center;
          }

          .hero-text-inline {
            max-width: 100% !important;
            margin: 0 auto !important;
          }

          .hero-actions-inline,
          .hero-trust-inline {
            justify-content: center !important;
          }

          .hero-image-wrap-inline {
            justify-content: center !important;
          }

          .hero-title-inline {
            font-size: clamp(2.4rem, 12vw, 4.2rem) !important;
            letter-spacing: -2px !important;
          }
        }
      `}</style>

      <Header />

      <div
        className="hero-grid-inline"
        style={{
          width: "100%",
          minHeight: "calc(100vh - 92px)",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          alignItems: "center",
          gap: "48px",
          padding: "44px 5.8vw 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          className="hero-text-inline"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          style={{
            maxWidth: "560px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 16px",
              borderRadius: "999px",
              background: "#FFF4E8",
              border: "1px solid rgba(245,124,0,.32)",
              color: "#5D4037",
              fontSize: "0.78rem",
              fontWeight: 900,
              letterSpacing: ".65px",
              textTransform: "uppercase",
              marginBottom: "20px",
              boxShadow: "0 8px 24px rgba(245,124,0,.08)",
            }}
          >
            <ShieldCheck size={16} color="#F57C00" />
            Vistoria técnica e profissional
          </motion.span>

          <motion.h1
            className="hero-title-inline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{
              fontSize: "clamp(3rem, 4.55vw, 5.15rem)",
              lineHeight: "0.98",
              fontWeight: 950,
              color: "#5D4037",
              letterSpacing: "-3px",
              margin: "0 0 20px",
            }}
          >
            Evite prejuízo na entrega do seu imóvel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.7,
              color: "#6D4C41",
              fontWeight: 650,
              margin: "0 0 24px",
              maxWidth: "540px",
            }}
          >
            Depois da entrega, reclamar fica muito mais difícil. Faça uma
            vistoria com laudo completo, fotos e análise profissional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              display: "grid",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            {problemas.map((item, index) => (
              <motion.div
                className="hero-check-item"
                key={item}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + index * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#4E342E",
                  fontSize: "1rem",
                  fontWeight: 850,
                }}
              >
                <BadgeCheck size={21} color="#F57C00" />
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions-inline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "13px",
              alignItems: "center",
              marginBottom: "22px",
            }}
          >
            <div className="hero-primary-btn" style={{ borderRadius: "14px" }}>
              <WhatsappButton>Solicitar vistoria agora</WhatsappButton>
            </div>

            <a
              className="hero-secondary-btn"
              href="#servicos"
              style={{
                padding: "14px 22px",
                borderRadius: "14px",
                border: "1px solid rgba(93,64,55,.2)",
                background: "#FFFFFF",
                color: "#5D4037",
                fontWeight: 850,
                textDecoration: "none",
                boxShadow: "0 10px 28px rgba(93,64,55,.06)",
              }}
            >
              Conhecer serviços
            </a>
          </motion.div>

          <motion.div
            className="hero-trust-inline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {selos.map((item) => (
              <span
                className="hero-trust-item"
                key={item.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.78)",
                  border: "1px solid rgba(93,64,55,.12)",
                  color: "#6D4C41",
                  fontWeight: 750,
                  fontSize: ".84rem",
                  backdropFilter: "blur(8px)",
                }}
              >
                {item.icon}
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrap-inline"
          initial={{ opacity: 0, x: 34, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "560px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "rgba(245,124,0,.16)",
              filter: "blur(42px)",
              position: "absolute",
              right: "8%",
              bottom: "12%",
              zIndex: 0,
            }}
          />

          <div
            className="hero-image-card"
            style={{
              width: "min(100%, 700px)",
              height: "min(69vh, 640px)",
              minHeight: "500px",
              borderRadius: "34px 34px 0 0",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 24px 60px rgba(93,64,55,.13)",
              border: "1px solid rgba(245,124,0,.15)",
              background: "#F5EFE8",
            }}
          >
            <img
              src="/flavia.png"
              alt="Flávia Fonseca - Vistoria de Imóveis"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "18px 22px",
                background:
                  "linear-gradient(90deg, rgba(191,106,42,.95), rgba(245,124,0,.95))",
                color: "#fff",
                fontSize: "1.12rem",
                fontWeight: 900,
                textAlign: "center",
                textShadow: "0 2px 8px rgba(0,0,0,.18)",
              }}
            >
              Trabalho sério, resultado profissional.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
