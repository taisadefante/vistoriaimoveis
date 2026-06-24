import { ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#5D4037",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "5px",
          background:
            "linear-gradient(90deg,#BF6A2A 0%,#F57C00 50%,#FF9800 100%)",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "45px 5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <ShieldCheck size={20} color="#F57C00" />

            <strong
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
              }}
            >
              Flávia Fonseca
            </strong>
          </div>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,.8)",
              fontSize: ".95rem",
            }}
          >
            Vistoria de Imóveis • Atendimento profissional
          </p>
        </div>

        <a
          href={siteConfig.defanUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            padding: "12px 18px",
            borderRadius: "12px",
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.12)",
            transition: "all .3s ease",
          }}
        >
          Desenvolvido por Defan Soluções Digitais
          <ExternalLink size={16} />
        </a>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          textAlign: "center",
          padding: "18px",
          color: "rgba(255,255,255,.65)",
          fontSize: ".85rem",
        }}
      >
        © {new Date().getFullYear()} Flávia Fonseca • Todos os direitos reservados
      </div>
    </footer>
  );
}