import {
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
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
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
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
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 0.08}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid rgba(245,124,0,.12)",
                  boxShadow: "0 15px 40px rgba(0,0,0,.05)",
                  transition: ".3s",
                }}
                className="hover-lift"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg,#F57C00,#FF9800)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronRight size={24} />
                  </div>

                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "#5D4037",
                        fontSize: "1.15rem",
                        marginBottom: "10px",
                      }}
                    >
                      {faq.q}
                    </strong>

                    <p
                      style={{
                        color: "#6D4C41",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
            }}
          >
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
    </section>
  );
}