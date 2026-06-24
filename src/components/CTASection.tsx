"use client";

import { ShieldCheck, Sparkles, FileCheck2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "./Motion";

export default function CTASection() {
  const whatsappLink =
    "https://wa.me/5521988359825?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20vistoria.";

  return (
    <section className="cta-section">
      <style jsx>{`
        .cta-section {
          width: 100%;
          padding: 80px 20px;
          background: linear-gradient(180deg, #f6efe8 0%, #fff8f1 45%, #fff 100%);
          overflow: hidden;
        }

        .cta-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .cta-card {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 58px 56px;
          background: linear-gradient(135deg, #5d4037 0%, #8a4d2a 48%, #e66f00 100%);
          color: #fff;
          box-shadow: 0 24px 60px rgba(93, 64, 55, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .cta-card::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          right: -140px;
          top: -140px;
          filter: blur(10px);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .cta-title {
          font-size: clamp(2rem, 3.3vw, 3.8rem);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -1.8px;
          margin: 0 0 20px;
          max-width: 780px;
        }

        .cta-text {
          font-size: 1.05rem;
          line-height: 1.7;
          font-weight: 600;
          opacity: 0.95;
          max-width: 680px;
          margin: 0 0 30px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-bottom: 30px;
        }

        .whatsapp-btn,
        .services-btn {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 900;
          transition: all 0.25s ease;
          font-size: 0.98rem;
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%);
          color: #4e2f21;
          box-shadow: 0 16px 34px rgba(255, 183, 77, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .services-btn {
          color: #fff;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .whatsapp-btn:hover,
        .services-btn:hover {
          transform: translateY(-3px);
        }

        .cta-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          font-size: 0.86rem;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .cta-section {
            padding: 70px 18px;
          }

          .cta-card {
            padding: 48px 34px;
            border-radius: 26px;
          }

          .cta-content {
            max-width: 100%;
          }

          .cta-title {
            font-size: clamp(2rem, 7vw, 3rem);
            letter-spacing: -1.3px;
          }
        }

        @media (max-width: 600px) {
          .cta-section {
            padding: 60px 14px;
          }

          .cta-card {
            padding: 38px 20px;
            border-radius: 24px;
            text-align: center;
          }

          .cta-badge {
            font-size: 0.68rem;
            padding: 8px 13px;
            margin-bottom: 18px;
          }

          .cta-title {
            font-size: clamp(1.75rem, 8vw, 2.35rem);
            line-height: 1.12;
            letter-spacing: -1px;
          }

          .cta-text {
            font-size: 0.98rem;
            line-height: 1.65;
            margin-bottom: 26px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
            margin-bottom: 26px;
          }

          .whatsapp-btn,
          .services-btn {
            width: 100%;
            min-height: 52px;
            padding: 14px 18px;
            font-size: 0.94rem;
          }

          .cta-tags {
            justify-content: center;
          }

          .cta-tag {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="cta-container">
        <Reveal>
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-badge">
                <Sparkles size={16} />
                Pronto para proteger seu imóvel?
              </span>

              <h2 className="cta-title">
                Agende sua vistoria com clareza, segurança e tudo documentado.
              </h2>

              <p className="cta-text">
                Fale com Flávia Fonseca pelo WhatsApp, envie os dados do imóvel
                e receba uma orientação rápida para realizar sua vistoria.
              </p>

              <div className="cta-buttons">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp size={22} />
                  Quero agendar minha vistoria
                </a>

                <a href="#servicos" className="services-btn">
                  Ver serviços
                </a>
              </div>

              <div className="cta-tags">
                <span className="cta-tag">
                  <ShieldCheck size={17} />
                  Mais segurança
                </span>

                <span className="cta-tag">
                  <FileCheck2 size={17} />
                  Laudo profissional
                </span>

                <span className="cta-tag">
                  <Sparkles size={17} />
                  Atendimento direto
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}