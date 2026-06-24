"use client";

import { MessageCircle, ShieldCheck, Sparkles, FileCheck2 } from "lucide-react";
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
          padding: 100px 5.8vw;
          background: linear-gradient(180deg, #f6efe8 0%, #fff8f1 45%, #fff 100%);
          overflow: hidden;
        }

        .cta-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .cta-card {
          position: relative;
          overflow: hidden;
          border-radius: 36px;
          padding: 70px 6vw;
          background: linear-gradient(135deg, #5d4037 0%, #8a4d2a 48%, #f57c00 100%);
          color: #fff;
          box-shadow: 0 30px 80px rgba(93, 64, 55, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 880px;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .cta-title {
          font-size: clamp(2.3rem, 4.6vw, 4.8rem);
          line-height: 1.03;
          font-weight: 950;
          letter-spacing: -2.5px;
          margin: 0 0 22px;
        }

        .cta-text {
          font-size: 1.12rem;
          line-height: 1.75;
          font-weight: 600;
          opacity: 0.95;
          max-width: 760px;
          margin: 0 0 34px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-bottom: 34px;
        }

        .whatsapp-btn,
        .services-btn {
          min-height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 26px;
          border-radius: 18px;
          text-decoration: none;
          font-weight: 950;
          transition: all 0.25s ease;
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%);
          color: #4e2f21;
          box-shadow: 0 18px 40px rgba(255, 183, 77, 0.34);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .whatsapp-btn:hover,
        .services-btn:hover {
          transform: translateY(-3px);
        }

        .services-btn {
          color: #fff;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .cta-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          font-size: 0.9rem;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 70px 18px;
          }

          .cta-card {
            border-radius: 26px;
            padding: 46px 22px;
            text-align: center;
          }

          .cta-content {
            max-width: 100%;
          }

          .cta-title {
            font-size: clamp(2rem, 10vw, 3rem);
            letter-spacing: -1.5px;
          }

          .cta-text {
            font-size: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .whatsapp-btn,
          .services-btn {
            width: 100%;
          }

          .cta-tags {
            justify-content: center;
          }
        }
      `}</style>

      <div className="cta-container">
        <Reveal>
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-badge">
                <Sparkles size={18} />
                Pronto para proteger seu imóvel?
              </span>

              <h2 className="cta-title">
                Agende sua vistoria e receba tudo documentado com clareza.
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
                  <FaWhatsapp size={24} />
                  Quero agendar minha vistoria
                </a>

                <a href="#servicos" className="services-btn">
                  Ver serviços
                </a>
              </div>

              <div className="cta-tags">
                <span className="cta-tag">
                  <ShieldCheck size={18} />
                  Mais segurança
                </span>

                <span className="cta-tag">
                  <FileCheck2 size={18} />
                  Laudo profissional
                </span>

                <span className="cta-tag">
                  <Sparkles size={18} />
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