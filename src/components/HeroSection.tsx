"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Camera,
  ClipboardCheck,
  Home,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Header from "./Header";

export default function HeroSection() {
  const problemas = [
    "Infiltração escondida",
    "Problemas elétricos",
    "Acabamento mal feito",
    "Vazamentos",
  ];

  const selos = [
    { icon: <ClipboardCheck size={15} />, text: "Laudo completo" },
    { icon: <Camera size={15} />, text: "Fotos no relatório" },
    { icon: <Home size={15} />, text: "Entrega, compra e locação" },
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
          "linear-gradient(180deg, #FFF9F2 0%, #F6EFE8 55%, #F1E4D8 100%)",
      }}
    >
      <Header />

      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 74px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.95fr) minmax(360px, 0.85fr)",
          alignItems: "center",
          gap: "42px",
          padding: "42px clamp(20px, 5.5vw, 96px) 34px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: "600px",
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{
              fontSize: "clamp(2.55rem, 4.4vw, 4.8rem)",
              lineHeight: "1.01",
              fontWeight: 950,
              color: "#5D4037",
              letterSpacing: "-2.6px",
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
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#6D4C41",
              fontWeight: 650,
              margin: "0 0 24px",
              maxWidth: "560px",
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
              marginBottom: "26px",
            }}
          >
            {problemas.map((item, index) => (
              <motion.div
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
            <a
              href="https://wa.me/5521981080434"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                minHeight: "52px",
                padding: "15px 24px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.98rem",
                fontWeight: 900,
                boxShadow: "0 16px 34px rgba(245,124,0,.28)",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 42px rgba(245,124,0,.36)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 16px 34px rgba(245,124,0,.28)";
              }}
            >
              <MessageCircle size={20} />
              Solicitar vistoria agora
            </a>

            <a
              href="#servicos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "52px",
                padding: "15px 24px",
                borderRadius: "15px",
                border: "1px solid rgba(93,64,55,.18)",
                background: "#FFFFFF",
                color: "#5D4037",
                fontSize: "0.98rem",
                fontWeight: 850,
                textDecoration: "none",
                boxShadow: "0 10px 28px rgba(93,64,55,.06)",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.color = "#F57C00";
                e.currentTarget.style.borderColor = "rgba(245,124,0,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.color = "#5D4037";
                e.currentTarget.style.borderColor = "rgba(93,64,55,.18)";
              }}
            >
              Conhecer serviços
            </a>
          </motion.div>

          <motion.div
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
                key={item.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.82)",
                  border: "1px solid rgba(93,64,55,.12)",
                  color: "#6D4C41",
                  fontWeight: 750,
                  fontSize: ".82rem",
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
          initial={{ opacity: 0, x: 34, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          style={{
            width: "100%",
            minHeight: "480px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "330px",
              height: "330px",
              borderRadius: "50%",
              background: "rgba(245,124,0,.15)",
              filter: "blur(42px)",
              position: "absolute",
              right: "8%",
              bottom: "12%",
              zIndex: 0,
            }}
          />

          <div
            style={{
              width: "min(100%, 580px)",
              height: "min(62vh, 550px)",
              minHeight: "430px",
              borderRadius: "32px",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 24px 58px rgba(93,64,55,.13)",
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
                objectPosition: "center center",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "16px 20px",
                background:
                  "linear-gradient(90deg, rgba(191,106,42,.96), rgba(245,124,0,.96))",
                color: "#fff",
                fontSize: "1rem",
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

      <style>{`
        @media (max-width: 1050px) {
          #inicio > div {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
            padding: 42px 22px 34px !important;
            text-align: center !important;
          }

          #inicio h1 {
            font-size: clamp(2.35rem, 9vw, 4rem) !important;
            letter-spacing: -1.8px !important;
          }

          #inicio p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          #inicio > div > div:first-child {
            margin: 0 auto !important;
          }
        }

        @media (max-width: 720px) {
          #inicio {
            min-height: auto !important;
          }

          #inicio > div {
            min-height: auto !important;
            padding-top: 34px !important;
          }

          #inicio h1 {
            font-size: clamp(2.2rem, 11vw, 3.35rem) !important;
            line-height: 1.04 !important;
          }

          #inicio a[href*="wa.me"],
          #inicio a[href="#servicos"] {
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto !important;
          }

          #inicio > div > div:last-child {
            min-height: 390px !important;
            justify-content: center !important;
          }

          #inicio > div > div:last-child > div:last-child {
            width: 100% !important;
            max-width: 390px !important;
            height: 420px !important;
            min-height: 420px !important;
            border-radius: 26px !important;
          }
        }

        @media (max-width: 460px) {
          #inicio > div {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          #inicio h1 {
            font-size: 2.35rem !important;
          }

          #inicio > div > div:last-child > div:last-child {
            height: 360px !important;
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
