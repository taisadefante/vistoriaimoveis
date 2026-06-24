"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#processo", label: "Como Funciona" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#fff",
        borderBottom: "1px solid rgba(93,64,55,.1)",
        boxShadow: "0 8px 24px rgba(93,64,55,.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "10px 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <a href="#inicio" style={{ textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="Fonseca Reformas e Construção"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        <nav
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "34px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#5D4037",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: ".95rem",
                transition: ".25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F57C00";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5D4037";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="desktop-cta"
          href="https://wa.me/5521981080434"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg,#F57C00,#FF9800)",
            color: "#fff",
            padding: "13px 24px",
            borderRadius: "14px",
            fontWeight: 900,
            textDecoration: "none",
            boxShadow: "0 12px 28px rgba(245,124,0,.25)",
            whiteSpace: "nowrap",
            transition: ".25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Solicitar Vistoria
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          style={{
            display: "none",
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            border: "1px solid rgba(245,124,0,.25)",
            background: "#FFF4E8",
            color: "#F57C00",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          className="mobile-menu"
          style={{
            display: "none",
            padding: "18px 5vw 24px",
            background: "#fff",
            borderTop: "1px solid rgba(93,64,55,.08)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                color: "#5D4037",
                textDecoration: "none",
                fontWeight: 900,
                borderBottom: "1px solid rgba(93,64,55,.08)",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/5521981080434"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "18px",
              display: "block",
              textAlign: "center",
              background: "#F57C00",
              color: "#fff",
              padding: "15px",
              borderRadius: "14px",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Solicitar Vistoria
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu,
          .desktop-cta {
            display: none !important;
          }

          .mobile-menu-button {
            display: flex !important;
          }

          .mobile-menu {
            display: block !important;
          }
        }

        @media (max-width: 520px) {
          header img {
            height: 40px !important;
          }
        }
      `}</style>
    </header>
  );
}