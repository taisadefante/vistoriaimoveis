"use client";

import { ExternalLink, FileCheck2, Home, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(180deg,#5D4037 0%,#3A241F 100%)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg,#BF6A2A,#F57C00,#FF9800)",
        }}
      />

      <div
        className="footer-wrap"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "56px 5.8vw 34px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1.2fr",
            gap: "42px",
          }}
        >
          <div>
            <img
              src="/logo.png"
              alt="Fonseca Reformas e Construção"
              style={{
                height: "72px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                maxWidth: "430px",
                color: "rgba(255,255,255,.78)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Vistoria de imóveis com registro fotográfico, relatório organizado
              e atendimento profissional para entrega, compra, venda ou locação.
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 950 }}>
              Navegação
            </strong>

            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {[
                ["#servicos", "Serviços"],
                ["#beneficios", "Benefícios"],
                ["#processo", "Como funciona"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="footer-link"
                  style={{
                    color: "rgba(255,255,255,.78)",
                    textDecoration: "none",
                    fontWeight: 750,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 950 }}>
              Atendimento
            </strong>

            <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
              {[
                [
                  <ShieldCheck size={20} key="shield" />,
                  "Vistoria técnica, clara e profissional",
                ],
                [
                  <FileCheck2 size={20} key="file" />,
                  "Laudo com fotos e observações",
                ],
                [
                  <Home size={20} key="home" />,
                  "Imóveis residenciais e comerciais",
                ],
              ].map(([icon, text]) => (
                <div
                  key={String(text)}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: "rgba(255,255,255,.8)",
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: "#FF9800", display: "flex" }}>
                    {icon}
                  </span>
                  {text}
                </div>
              ))}

              <a
                href="https://wa.me/5521981080434"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
                style={{
                  marginTop: 12,
                  width: "fit-content",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "14px 22px 14px 14px",
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,.18) 0%, rgba(255,183,77,.30) 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 950,
                  boxShadow: "0 16px 38px rgba(245,124,0,.22)",
                  border: "1px solid rgba(255,255,255,.24)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,.16)",
                    border: "1px solid rgba(255,255,255,.18)",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp size={22} color="#FFB74D" />
                </span>

                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="footer-copy"
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,.1)",
            textAlign: "center",
            color: "rgba(255,255,255,.68)",
            fontSize: ".88rem",
          }}
        >
          © {year} Fonseca Reformas e Construção • Todos os direitos reservados
        </div>
      </div>

      <div
        style={{
          background: "#2B1814",
          padding: "16px 5vw",
          textAlign: "center",
        }}
      >
        <a
          href={siteConfig.defanUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-dev"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "rgba(255,255,255,.8)",
            textDecoration: "none",
            fontWeight: 750,
            fontSize: ".88rem",
          }}
        >
          Desenvolvido por Defan Soluções Digitais
          <ExternalLink size={15} />
        </a>
      </div>

      <style>{`
        .footer-link,
        .footer-whatsapp,
        .footer-dev {
          transition: all .25s ease;
        }

        .footer-link:hover {
          color: #FF9800 !important;
          transform: translateX(5px);
        }

        .footer-whatsapp:hover {
          transform: translateY(-4px);
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.24) 0%,
            rgba(255,183,77,.42) 100%
          ) !important;
          box-shadow: 0 22px 52px rgba(245,124,0,.34) !important;
        }

        .footer-dev:hover {
          color: #FF9800 !important;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }

          .footer-grid img,
          .footer-grid p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .footer-grid div {
            justify-items: center;
          }

          .footer-grid div[style*="display: flex"] {
            justify-content: center;
          }

          .footer-whatsapp {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 520px) {
          .footer-wrap {
            padding: 46px 20px 30px !important;
          }

          .footer-grid {
            gap: 34px !important;
          }

          .footer-grid img {
            height: 56px !important;
          }

          .footer-whatsapp {
            width: 100% !important;
            max-width: 320px;
          }
        }
      `}</style>
    </footer>
  );
}