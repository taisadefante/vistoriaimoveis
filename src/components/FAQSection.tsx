"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ShieldCheck } from "lucide-react";
import { Reveal } from "./Motion";

const faqs = [
  {
    q: "A vistoria serve para locação?",
    a: "Sim. É indicada tanto para entrada quanto para saída de locação, registrando detalhadamente as condições do imóvel.",
  },
  {
    q: "O relatório possui fotos?",
    a: "Sim. O laudo pode conter registro fotográfico dos ambientes, acabamentos e pontos de atenção encontrados.",
  },
  {
    q: "Atende imóveis comerciais?",
    a: "Sim. O serviço pode ser realizado em imóveis residenciais, comerciais e corporativos.",
  },
  {
    q: "Como faço para agendar?",
    a: "Entre em contato pelo WhatsApp e informe os dados do imóvel para combinar data e horário.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      style={{
        width: "100%",
        padding: "100px 5vw",
        background:
          "linear-gradient(180deg,#ffffff 0%,#fff8f1 50%,#f6efe8 100%)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 60px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "#FFF4E8",
                border: "1px solid rgba(245,124,0,.25)",
                color: "#F57C00",
                fontWeight: 800,
                fontSize: ".8rem",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              <HelpCircle size={16} />
              FAQ
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem,4vw,4rem)",
                color: "#5D4037",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              Dúvidas frequentes
            </h2>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Veja as respostas para as perguntas mais comuns antes de solicitar
              sua vistoria.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gap: "18px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.q} delay={index * 0.08}>
                <div
                  className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    border: isOpen
                      ? "1px solid rgba(245,124,0,.35)"
                      : "1px solid rgba(245,124,0,.12)",
                    boxShadow: isOpen
                      ? "0 22px 55px rgba(93,64,55,.12)"
                      : "0 15px 40px rgba(0,0,0,.05)",
                    overflow: "hidden",
                    transition: "all .3s ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      padding: "24px 26px",
                      cursor: "pointer",
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "16px",
                        background: isOpen
                          ? "linear-gradient(135deg,#F57C00,#FF9800)"
                          : "#FFF4E8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isOpen ? "#fff" : "#F57C00",
                        flexShrink: 0,
                        transition: "all .3s ease",
                      }}
                    >
                      <ChevronDown
                        size={24}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform .3s ease",
                        }}
                      />
                    </span>

                    <strong
                      style={{
                        flex: 1,
                        display: "block",
                        color: "#5D4037",
                        fontSize: "1.15rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </strong>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "180px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height .35s ease, opacity .25s ease",
                    }}
                  >
                    <p
                      style={{
                        color: "#6D4C41",
                        lineHeight: 1.8,
                        margin: "0",
                        padding: "0 28px 26px 92px",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 22px",
                borderRadius: "999px",
                background: "#FFF4E8",
                color: "#5D4037",
                fontWeight: 800,
              }}
            >
              <ShieldCheck color="#F57C00" />
              Ainda tem dúvidas? Fale diretamente pelo WhatsApp.
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .faq-card:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 640px) {
          #faq {
            padding: 76px 18px !important;
          }

          .faq-card button {
            padding: 20px 18px !important;
            gap: 12px !important;
          }

          .faq-card button span {
            width: 44px !important;
            height: 44px !important;
            border-radius: 14px !important;
          }

          .faq-card strong {
            font-size: 1rem !important;
          }

          .faq-card p {
            padding: 0 20px 22px 74px !important;
            font-size: .95rem !important;
          }
        }
      `}</style>
    </section>
  );
}