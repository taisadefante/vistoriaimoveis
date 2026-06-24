"use client";
import {
  ExternalLink,
  MapPin,
  MessageCircle,
  ShieldCheck,
  FileCheck2,
  Home,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        background: "#4E342E",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "6px",
          background:
            "linear-gradient(90deg,#BF6A2A 0%,#F57C00 50%,#FF9800 100%)",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(245,124,0,.16)",
          filter: "blur(60px)",
          position: "absolute",
          right: "-160px",
          top: "-120px",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "56px 5.8vw 38px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "36px",
            alignItems: "start",
          }}
          className="footer-grid-inline"
        >
          <div>
            <img
              src="/logo.png"
              alt="Fonseca Reformas e Construção"
              style={{
                height: "70px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                marginBottom: "20px",
                filter: "brightness(1.25) contrast(1.08)",
              }}
            />

            <p
              style={{
                maxWidth: "430px",
                margin: 0,
                color: "rgba(255,255,255,.78)",
                fontSize: ".98rem",
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              Vistoria de imóveis com atendimento profissional, registro
              fotográfico e relatório organizado para mais segurança na entrega,
              compra, venda ou locação.
            </p>
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "1.05rem",
                fontWeight: 950,
                marginBottom: "18px",
                color: "#fff",
              }}
            >
              Navegação
            </strong>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {[
                ["#servicos", "Serviços"],
                ["#beneficios", "Benefícios"],
                ["#processo", "Como funciona"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: "rgba(255,255,255,.76)",
                    textDecoration: "none",
                    fontWeight: 700,
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF9800";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,.76)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "1.05rem",
                fontWeight: 950,
                marginBottom: "18px",
                color: "#fff",
              }}
            >
              Atendimento
            </strong>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  color: "rgba(255,255,255,.78)",
                  fontWeight: 650,
                  lineHeight: 1.5,
                }}
              >
                <ShieldCheck
                  size={20}
                  color="#FF9800"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                Vistoria técnica, clara e profissional
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  color: "rgba(255,255,255,.78)",
                  fontWeight: 650,
                  lineHeight: 1.5,
                }}
              >
                <FileCheck2
                  size={20}
                  color="#FF9800"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                Laudo com fotos e observações
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  color: "rgba(255,255,255,.78)",
                  fontWeight: 650,
                  lineHeight: 1.5,
                }}
              >
                <Home
                  size={20}
                  color="#FF9800"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                Imóveis residenciais e comerciais
              </div>

              <a
                href="https://wa.me/5521981080434"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "8px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  width: "fit-content",
                  padding: "13px 18px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,#F57C00 0%,#FF9800 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 950,
                  boxShadow: "0 14px 30px rgba(245,124,0,.25)",
                  transition: "all .25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <MessageCircle size={19} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "42px",
            paddingTop: "22px",
            borderTop: "1px solid rgba(255,255,255,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            color: "rgba(255,255,255,.65)",
            fontSize: ".88rem",
          }}
          className="footer-bottom-inline"
        >
          <span>
            © {year} Fonseca Reformas e Construção • Todos os direitos
            reservados
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <MapPin size={15} color="#FF9800" />
            Engenharia e Soluções
          </span>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          background: "#3A241F",
          borderTop: "1px solid rgba(255,255,255,.08)",
          padding: "16px 5.8vw",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <a
          href={siteConfig.defanUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "rgba(255,255,255,.82)",
            textDecoration: "none",
            fontWeight: 750,
            fontSize: ".88rem",
            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#FF9800";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,.82)";
          }}
        >
          Desenvolvido por Defan Soluções Digitais
          <ExternalLink size={15} />
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid-inline {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }

          .footer-grid-inline img {
            margin-left: auto !important;
            margin-right: auto !important;
            height: 62px !important;
          }

          .footer-grid-inline p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .footer-grid-inline a,
          .footer-grid-inline div {
            justify-content: center !important;
          }

          .footer-bottom-inline {
            justify-content: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 520px) {
          .footer-grid-inline img {
            height: 54px !important;
          }
        }
      `}</style>
    </footer>
  );
}
