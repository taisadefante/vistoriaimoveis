import {
  CalendarCheck,
  FileOutput,
  HomeIcon,
  MessageSquareText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Motion";

const steps = [
  {
    icon: MessageSquareText,
    title: "Solicitação",
    text: "Você chama no WhatsApp, informa o tipo de imóvel e explica sua necessidade.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "A data e o horário são alinhados conforme disponibilidade, localização e urgência.",
  },
  {
    icon: HomeIcon,
    title: "Vistoria no imóvel",
    text: "Os ambientes são conferidos com atenção, observações técnicas e registro fotográfico.",
  },
  {
    icon: FileOutput,
    title: "Entrega do laudo",
    text: "Você recebe o relatório organizado para consulta, negociação ou documentação.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="processo"
      style={{
        width: "100%",
        padding: "100px 5.8vw",
        background:
          "linear-gradient(180deg, #F6EFE8 0%, #FFF8F1 45%, #FFFFFF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(245,124,0,.08)",
          filter: "blur(45px)",
          position: "absolute",
          left: "-160px",
          top: "80px",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "820px",
              margin: "0 auto 60px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#FFF4E8",
                border: "1px solid rgba(245,124,0,.3)",
                color: "#5D4037",
                fontSize: ".78rem",
                fontWeight: 900,
                letterSpacing: ".65px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              <CheckCircle2 size={16} color="#F57C00" />
              Como funciona
            </span>

            <h2
              style={{
                fontSize: "clamp(2.25rem, 4.2vw, 4.3rem)",
                lineHeight: 1.03,
                color: "#5D4037",
                fontWeight: 950,
                letterSpacing: "-2px",
                margin: "0 0 18px",
              }}
            >
              Um processo simples, rápido e profissional.
            </h2>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.08rem",
                lineHeight: 1.75,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Do primeiro contato até a entrega do laudo, tudo é feito com
              clareza, organização e atendimento direto.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "22px",
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article
                  style={{
                    height: "100%",
                    padding: "30px",
                    borderRadius: "28px",
                    background:
                      index % 2 === 0
                        ? "linear-gradient(180deg, #FFFFFF 0%, #FFF9F3 100%)"
                        : "linear-gradient(180deg, #FFF7EE 0%, #FFFFFF 100%)",
                    border: "1px solid rgba(93,64,55,.1)",
                    boxShadow: "0 16px 38px rgba(93,64,55,.07)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all .3s ease",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-34px",
                      right: "-18px",
                      fontSize: "6.2rem",
                      fontWeight: 950,
                      color: "rgba(245,124,0,.08)",
                      lineHeight: 1,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginBottom: "22px",
                      boxShadow: "0 13px 28px rgba(245,124,0,.24)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <strong
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#F57C00",
                      fontSize: ".82rem",
                      fontWeight: 950,
                      textTransform: "uppercase",
                      letterSpacing: ".7px",
                      marginBottom: "10px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    Etapa 0{index + 1}
                    {index < steps.length - 1 && <ArrowRight size={16} />}
                  </strong>

                  <h3
                    style={{
                      color: "#5D4037",
                      fontSize: "1.28rem",
                      fontWeight: 950,
                      margin: "0 0 10px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      color: "#6D4C41",
                      fontSize: ".98rem",
                      lineHeight: 1.7,
                      fontWeight: 550,
                      margin: 0,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {step.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.28}>
          <div
            style={{
              marginTop: "48px",
              padding: "24px 28px",
              borderRadius: "26px",
              background: "#5D4037",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              textAlign: "center",
              boxShadow: "0 18px 45px rgba(93,64,55,.18)",
              flexWrap: "wrap",
            }}
          >
            <CheckCircle2 size={22} color="#F57C00" />

            <strong
              style={{
                fontSize: "1rem",
                fontWeight: 850,
              }}
            >
              Atendimento direto, vistoria organizada e laudo entregue com
              clareza.
            </strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
