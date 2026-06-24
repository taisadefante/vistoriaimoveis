import {
  Building2,
  ClipboardList,
  KeyRound,
  SearchCheck,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./Motion";

const services = [
  {
    icon: KeyRound,
    title: "Vistoria de Entrada",
    text: "Registro detalhado das condições do imóvel antes do início da locação.",
  },
  {
    icon: ClipboardList,
    title: "Vistoria de Saída",
    text: "Comparação do estado do imóvel para entrega de chaves com mais segurança.",
  },
  {
    icon: SearchCheck,
    title: "Vistoria para Compra",
    text: "Identificação visual de possíveis problemas antes da negociação.",
  },
  {
    icon: Building2,
    title: "Vistoria Comercial",
    text: "Atendimento para salas comerciais, escritórios, lojas e empresas.",
  },
];

export default function ServicesSection() {
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
              Seja para locação, compra, venda ou imóveis comerciais,
              você recebe um relatório profissional com fotos e observações.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
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
                      background:
                        "linear-gradient(135deg,#F57C00,#FF9800)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      marginBottom: "22px",
                      boxShadow:
                        "0 15px 30px rgba(245,124,0,.25)",
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

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#F57C00",
                      fontWeight: 800,
                    }}
                  >
                    Saiba mais
                    <ArrowRight size={18} />
                  </div>
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
              Solicite uma vistoria profissional e tenha mais segurança na negociação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}