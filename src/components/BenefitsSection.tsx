import {
  Camera,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  Shield,
  Droplets,
  Zap,
  Paintbrush,
} from "lucide-react";
import { Reveal } from "./Motion";

const benefits = [
  {
    icon: Droplets,
    title: "Infiltrações e Vazamentos",
    text: "Identificação visual de sinais de umidade e problemas ocultos.",
  },
  {
    icon: Zap,
    title: "Instalações Elétricas",
    text: "Verificação dos principais pontos elétricos do imóvel.",
  },
  {
    icon: Paintbrush,
    title: "Acabamentos",
    text: "Avaliação de pintura, pisos, portas, janelas e conservação.",
  },
  {
    icon: Camera,
    title: "Fotos Organizadas",
    text: "Registro fotográfico completo para documentar cada ambiente.",
  },
  {
    icon: FileCheck2,
    title: "Laudo Profissional",
    text: "Relatório claro e objetivo para sua segurança.",
  },
  {
    icon: Shield,
    title: "Mais Segurança",
    text: "Redução de conflitos e maior proteção para todas as partes.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      style={{
        width: "100%",
        padding: "100px 5vw",
        background:
          "linear-gradient(180deg,#fff 0%,#fff8f1 50%,#f6efe8 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "0 auto 60px",
            }}
          >
            <span
              style={{
                display: "inline-block",
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
              Benefícios
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
              Seu imóvel documentado com clareza e segurança.
            </h2>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Uma vistoria profissional ajuda a evitar prejuízos,
              reduz conflitos e garante mais tranquilidade para todas as partes.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "24px",
          }}
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    padding: "30px",
                    border: "1px solid rgba(245,124,0,.12)",
                    boxShadow: "0 15px 40px rgba(0,0,0,.05)",
                    height: "100%",
                    transition: ".3s",
                  }}
                  className="hover-lift"
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg,#F57C00,#FF9800)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={30} />
                  </div>

                  <strong
                    style={{
                      display: "block",
                      color: "#5D4037",
                      fontSize: "1.2rem",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </strong>

                  <p
                    style={{
                      color: "#6D4C41",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: "60px",
              background:
                "linear-gradient(90deg,#BF6A2A,#F57C00)",
              borderRadius: "28px",
              padding: "35px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.6rem",
                  fontWeight: 900,
                }}
              >
                Evite problemas futuros.
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  opacity: 0.95,
                }}
              >
                Agende sua vistoria com atendimento profissional.
              </p>
            </div>

            <a
              href="https://wa.me/5521995585257"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#fff",
                color: "#5D4037",
                padding: "15px 24px",
                borderRadius: "14px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <MessageCircle size={20} />
              Solicitar vistoria
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}