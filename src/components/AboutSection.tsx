import {
  ShieldCheck,
  FileText,
  BadgeCheck,
  Droplets,
  Zap,
  Home,
} from "lucide-react";
import { Reveal, ScaleReveal } from "./Motion";

export default function AboutSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 5vw",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <span
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "#FFF4E8",
              border: "1px solid rgba(245,124,0,.25)",
              color: "#F57C00",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: ".8rem",
              marginBottom: "18px",
            }}
          >
            Por que fazer uma vistoria?
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.8rem)",
              lineHeight: 1.05,
              color: "#5D4037",
              fontWeight: 900,
              maxWidth: "900px",
              marginBottom: "20px",
            }}
          >
            Evite prejuízos, cobranças indevidas e problemas futuros.
          </h2>

          <p
            style={{
              maxWidth: "850px",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "#6D4C41",
              marginBottom: "50px",
            }}
          >
            A vistoria profissional registra detalhadamente o estado do imóvel
            através de fotos, observações técnicas e laudo completo. Isso gera
            mais segurança para proprietários, compradores, vendedores,
            imobiliárias e locatários.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          <ScaleReveal delay={0.05}>
            <div
              style={{
                background: "#FFF8F2",
                border: "1px solid rgba(245,124,0,.15)",
                borderRadius: "24px",
                padding: "30px",
                height: "100%",
                transition: ".3s",
              }}
            >
              <Droplets
                size={42}
                color="#F57C00"
                style={{ marginBottom: 20 }}
              />

              <h3
                style={{
                  color: "#5D4037",
                  fontSize: "1.3rem",
                  marginBottom: "10px",
                }}
              >
                Infiltrações e vazamentos
              </h3>

              <p
                style={{
                  color: "#6D4C41",
                  lineHeight: 1.7,
                }}
              >
                Problemas ocultos podem gerar altos custos após a entrega do
                imóvel.
              </p>
            </div>
          </ScaleReveal>

          <ScaleReveal delay={0.12}>
            <div
              style={{
                background: "#FFF8F2",
                border: "1px solid rgba(245,124,0,.15)",
                borderRadius: "24px",
                padding: "30px",
                height: "100%",
              }}
            >
              <Zap
                size={42}
                color="#F57C00"
                style={{ marginBottom: 20 }}
              />

              <h3
                style={{
                  color: "#5D4037",
                  fontSize: "1.3rem",
                  marginBottom: "10px",
                }}
              >
                Problemas elétricos
              </h3>

              <p
                style={{
                  color: "#6D4C41",
                  lineHeight: 1.7,
                }}
              >
                Identificação de falhas e irregularidades antes que se tornem
                dores de cabeça.
              </p>
            </div>
          </ScaleReveal>

          <ScaleReveal delay={0.19}>
            <div
              style={{
                background: "#FFF8F2",
                border: "1px solid rgba(245,124,0,.15)",
                borderRadius: "24px",
                padding: "30px",
                height: "100%",
              }}
            >
              <Home
                size={42}
                color="#F57C00"
                style={{ marginBottom: 20 }}
              />

              <h3
                style={{
                  color: "#5D4037",
                  fontSize: "1.3rem",
                  marginBottom: "10px",
                }}
              >
                Acabamentos e conservação
              </h3>

              <p
                style={{
                  color: "#6D4C41",
                  lineHeight: 1.7,
                }}
              >
                Registro completo das condições reais do imóvel com fotos e
                observações técnicas.
              </p>
            </div>
          </ScaleReveal>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <ShieldCheck color="#F57C00" />
            <strong style={{ color: "#5D4037" }}>
              Mais segurança jurídica
            </strong>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <FileText color="#F57C00" />
            <strong style={{ color: "#5D4037" }}>
              Laudo completo e organizado
            </strong>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <BadgeCheck color="#F57C00" />
            <strong style={{ color: "#5D4037" }}>
              Atendimento profissional
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}