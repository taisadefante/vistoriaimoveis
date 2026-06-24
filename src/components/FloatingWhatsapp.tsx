"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <>
      <a
        href="https://wa.me/5521981080434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 9999,
          textDecoration: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-12px",
            borderRadius: "999px",
            background: "rgba(37,211,102,.25)",
            animation: "pulseWhats 2s infinite",
          }}
        />

        <div
          style={{
            width: "78px",
            height: "78px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#25D366 0%,#1EBE5D 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "38px",
            boxShadow:
              "0 20px 45px rgba(37,211,102,.45)",
            position: "relative",
            transition: ".3s",
          }}
        >
          <FaWhatsapp />
        </div>

        <style>{`
          @keyframes pulseWhats {
            0% {
              transform: scale(1);
              opacity: .8;
            }

            70% {
              transform: scale(1.6);
              opacity: 0;
            }

            100% {
              transform: scale(1.6);
              opacity: 0;
            }
          }
        `}</style>
      </a>
    </>
  );
}