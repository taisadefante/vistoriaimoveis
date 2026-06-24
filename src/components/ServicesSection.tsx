"use client";

import { useState } from "react";
import {
  Building2,
  ClipboardList,
  KeyRound,
  SearchCheck,
  ArrowRight,
  BadgeCheck,
  X,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "./Motion";

const services = [
  {
    icon: KeyRound,
    title: "Vistoria de Entrada",
    text: "Registro detalhado das condições do imóvel antes do início da locação.",
    fullText:
      "A vistoria de entrada registra o estado real do imóvel antes do início da locação. O objetivo é documentar pintura, pisos, portas, janelas, elétrica, hidráulica, acabamento, conservação e possíveis avarias já existentes.",
    items: [
      "Registro fotográfico dos ambientes",
      "Descrição dos principais pontos avaliados",
      "Mais segurança para proprietário e inquilino",
      "Ajuda a evitar cobranças indevidas no futuro",
    ],
  },
  {
    icon: ClipboardList,
    title: "Vistoria de Saída",
    text: "Comparação do estado do imóvel para entrega de chaves com mais segurança.",
    fullText:
      "A vistoria de saída é realizada no momento da entrega das chaves. Ela ajuda a comparar o estado atual do imóvel com as condições registradas anteriormente, identificando danos, alterações ou pendências.",
    items: [
      "Conferência das condições do imóvel",
      "Registro de possíveis danos ou alterações",
      "Organização para entrega de chaves",
      "Mais clareza entre locador, imobiliária e inquilino",
    ],
  },
  {
    icon: SearchCheck,
    title: "Vistoria para Compra",
    text: "Identificação visual de possíveis problemas antes da negociação.",
    fullText:
      "A vistoria para compra ajuda o comprador a avaliar visualmente o imóvel antes de fechar negócio. Ela identifica pontos de atenção como infiltrações, acabamento mal feito, vazamentos, elétrica, conservação e possíveis reparos necessários.",
    items: [
      "Avaliação visual antes da negociação",
      "Identificação de pontos de atenção",
      "Mais segurança para decidir a compra",
      "Ajuda a evitar gastos inesperados depois",
    ],
  },
  {
    icon: Building2,
    title: "Vistoria Comercial",
    text: "Atendimento para salas comerciais, escritórios, lojas e empresas.",
    fullText:
      "A vistoria comercial é indicada para salas, lojas, escritórios e imóveis empresariais. O serviço registra as condições do espaço, facilitando negociações, locações, entregas e controle patrimonial.",
    items: [
      "Atendimento para imóveis comerciais",
      "Registro de estrutura, acabamento e conservação",
      "Relatório com fotos e observações",
      "Mais segurança para empresas e proprietários",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] =
    useState<(typeof services)[number] | null>(null);

  return (
    <section
      id="servicos"
      style={{
        width: "100%",
        padding: "110px 5.8vw",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "0 auto 70px",
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
              <BadgeCheck size={16} />
              Serviços
            </span>

            <h2
              style={{
                fontSize: "clamp(2.2rem,4vw,4.5rem)",
                lineHeight: 1.05,
                color: "#5D4037",
                fontWeight: 950,
                letterSpacing: "-2px",
                marginBottom: "18px",
              }}
            >
              Vistorias completas para cada etapa do imóvel.
            </h2>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Seja para locação, compra, venda ou imóveis comerciais, você
              recebe um relatório profissional com fotos e observações.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "26px",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(180deg,#fff 0%,#fff9f3 100%)",
                    borderRadius: "28px",
                    padding: "32px",
                    border: "1px solid rgba(245,124,0,.12)",
                    boxShadow: "0 18px 45px rgba(0,0,0,.05)",
                    transition: ".3s",
                  }}
                  className="hover-lift"
                >
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "18px",
                      background: "linear-gradient(135deg,#F57C00,#FF9800)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginBottom: "22px",
                      boxShadow: "0 15px 30px rgba(245,124,0,.25)",
                    }}
                  >
                    <Icon size={32} />
                  </div>

                  <h3
                    style={{
                      color: "#5D4037",
                      fontSize: "1.35rem",
                      fontWeight: 900,
                      marginBottom: "12px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#6D4C41",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                    }}
                  >
                    {service.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    style={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#F57C00",
                      fontWeight: 900,
                      fontSize: "1rem",
                      transition: ".25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Saiba mais
                    <ArrowRight size={18} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: "60px",
              background: "linear-gradient(90deg,#BF6A2A,#F57C00)",
              borderRadius: "30px",
              padding: "40px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                marginBottom: "10px",
              }}
            >
              Não deixe problemas passarem despercebidos.
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                opacity: 0.95,
                margin: 0,
              }}
            >
              Solicite uma vistoria profissional e tenha mais segurança na
              negociação.
            </p>
          </div>
        </Reveal>
      </div>

      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedService(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(44,28,22,.62)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "760px",
              background:
                "linear-gradient(180deg,#FFFFFF 0%,#FFF8F1 100%)",
              borderRadius: "30px",
              padding: "34px",
              position: "relative",
              boxShadow: "0 35px 90px rgba(0,0,0,.28)",
              border: "1px solid rgba(245,124,0,.18)",
              animation: "modalEnter .25s ease",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Fechar modal"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                border: "1px solid rgba(93,64,55,.12)",
                background: "#fff",
                color: "#5D4037",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={22} />
            </button>

            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "22px",
                background: "linear-gradient(135deg,#F57C00,#FF9800)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                marginBottom: "24px",
                boxShadow: "0 15px 35px rgba(245,124,0,.28)",
              }}
            >
              {(() => {
                const Icon = selectedService.icon;
                return <Icon size={36} />;
              })()}
            </div>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#F57C00",
                fontSize: ".8rem",
                fontWeight: 900,
                letterSpacing: ".7px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              <BadgeCheck size={16} />
              Detalhes do serviço
            </span>

            <h3
              style={{
                color: "#5D4037",
                fontSize: "clamp(2rem,4vw,3rem)",
                lineHeight: 1.05,
                fontWeight: 950,
                letterSpacing: "-1px",
                margin: "0 0 18px",
              }}
            >
              {selectedService.title}
            </h3>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.08rem",
                lineHeight: 1.8,
                fontWeight: 600,
                margin: "0 0 26px",
              }}
            >
              {selectedService.fullText}
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginBottom: "30px",
              }}
            >
              {selectedService.items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#5D4037",
                    fontWeight: 800,
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="#F57C00"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5521981080434"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "16px 22px",
                borderRadius: "16px",
                background: "linear-gradient(135deg,#F57C00,#FF9800)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 950,
                boxShadow: "0 16px 34px rgba(245,124,0,.28)",
              }}
            >
              <MessageCircle size={21} />
              Solicitar este serviço pelo WhatsApp
            </a>
          </div>

          <style>{`
            @keyframes modalEnter {
              from {
                opacity: 0;
                transform: translateY(18px) scale(.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
