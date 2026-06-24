"use client";

import { useState } from "react";
import {
  Building2,
  ClipboardList,
  KeyRound,
  SearchCheck,
  ArrowRight,
  BadgeCheck,
  X,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "./Motion";

const services = [
  {
    icon: KeyRound,
    title: "Vistoria de Entrada",
    text: "Registro detalhado das condições do imóvel antes do início da locação.",
    fullText:
      "A vistoria de entrada registra o estado real do imóvel antes do início da locação. O objetivo é documentar pintura, pisos, portas, janelas, elétrica, hidráulica, acabamento, conservação e possíveis avarias já existentes.",
    items: [
      "Registro fotográfico dos ambientes",
      "Descrição dos principais pontos avaliados",
      "Mais segurança para proprietário e inquilino",
      "Ajuda a evitar cobranças indevidas no futuro",
    ],
  },
  {
    icon: ClipboardList,
    title: "Vistoria de Saída",
    text: "Comparação do estado do imóvel para entrega de chaves com mais segurança.",
    fullText:
      "A vistoria de saída é realizada no momento da entrega das chaves. Ela ajuda a comparar o estado atual do imóvel com as condições registradas anteriormente, identificando danos, alterações ou pendências.",
    items: [
      "Conferência das condições do imóvel",
      "Registro de possíveis danos ou alterações",
      "Organização para entrega de chaves",
      "Mais clareza entre locador, imobiliária e inquilino",
    ],
  },
  {
    icon: SearchCheck,
    title: "Vistoria para Compra",
    text: "Identificação visual de possíveis problemas antes da negociação.",
    fullText:
      "A vistoria para compra ajuda o comprador a avaliar visualmente o imóvel antes de fechar negócio. Ela identifica pontos de atenção como infiltrações, acabamento mal feito, vazamentos, elétrica, conservação e possíveis reparos necessários.",
    items: [
      "Avaliação visual antes da negociação",
      "Identificação de pontos de atenção",
      "Mais segurança para decidir a compra",
      "Ajuda a evitar gastos inesperados depois",
    ],
  },
  {
    icon: Building2,
    title: "Vistoria Comercial",
    text: "Atendimento para salas comerciais, escritórios, lojas e empresas.",
    fullText:
      "A vistoria comercial é indicada para salas, lojas, escritórios e imóveis empresariais. O serviço registra as condições do espaço, facilitando negociações, locações, entregas e controle patrimonial.",
    items: [
      "Atendimento para imóveis comerciais",
      "Registro de estrutura, acabamento e conservação",
      "Relatório com fotos e observações",
      "Mais segurança para empresas e proprietários",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] =
    useState<(typeof services)[number] | null>(null);

  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <Reveal>
          <div className="services-header">
            <span className="services-badge">
              <BadgeCheck size={16} />
              Serviços
            </span>

            <h2>Vistorias completas para cada etapa do imóvel.</h2>

            <p>
              Seja para locação, compra, venda ou imóveis comerciais, você
              recebe um relatório profissional com fotos e observações.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="service-card hover-lift">
                  <div className="service-icon">
                    <Icon size={32} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="service-more-btn"
                  >
                    Saiba mais
                    <ArrowRight size={18} />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="services-alert">
            <h3>Não deixe problemas passarem despercebidos.</h3>

            <p>
              Solicite uma vistoria profissional e tenha mais segurança na
              negociação.
            </p>
          </div>
        </Reveal>
      </div>

      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div className="modal-scroll">
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Fechar modal"
                className="modal-close"
              >
                <X size={22} />
              </button>

              <div className="modal-icon">
                {(() => {
                  const Icon = selectedService.icon;
                  return <Icon size={34} />;
                })()}
              </div>

              <span className="modal-badge">
                <BadgeCheck size={16} />
                Detalhes do serviço
              </span>

              <h3>{selectedService.title}</h3>

              <p className="modal-text">{selectedService.fullText}</p>

              <div className="modal-items">
                {selectedService.items.map((item) => (
                  <div key={item} className="modal-item">
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5521981080434"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-whatsapp"
              >
                <MessageCircle size={21} />
                Solicitar este serviço pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          width: 100%;
          padding: 110px 5.8vw;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .services-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 70px;
        }

        .services-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: #fff4e8;
          border: 1px solid rgba(245, 124, 0, 0.25);
          color: #f57c00;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .services-header h2 {
          font-size: clamp(2rem, 3.2vw, 3.5rem);
          line-height: 1.08;
          color: #5d4037;
          font-weight: 950;
          letter-spacing: -1.5px;
          margin-bottom: 18px;
        }

        .services-header p {
          color: #6d4c41;
          font-size: 1.05rem;
          line-height: 1.75;
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 26px;
        }

        .service-card {
          height: 100%;
          background: linear-gradient(180deg, #fff 0%, #fff9f3 100%);
          border-radius: 28px;
          padding: 32px;
          border: 1px solid rgba(245, 124, 0, 0.12);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.05);
          transition: 0.3s;
        }

        .service-icon {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f57c00, #ff9800);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 22px;
          box-shadow: 0 15px 30px rgba(245, 124, 0, 0.25);
        }

        .service-card h3 {
          color: #5d4037;
          font-size: 1.35rem;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .service-card p {
          color: #6d4c41;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .service-more-btn {
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f57c00;
          font-weight: 900;
          font-size: 1rem;
          transition: 0.25s;
        }

        .service-more-btn:hover {
          transform: translateX(5px);
        }

        .services-alert {
          margin-top: 60px;
          background: linear-gradient(90deg, #bf6a2a, #f57c00);
          border-radius: 30px;
          padding: 40px;
          color: #fff;
          text-align: center;
        }

        .services-alert h3 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900;
          margin-bottom: 10px;
        }

        .services-alert p {
          font-size: 1.05rem;
          opacity: 0.95;
          margin: 0;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(44, 28, 22, 0.62);
          backdrop-filter: blur(8px);
          padding: 18px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .modal-scroll {
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 0;
        }

        .modal-card {
          width: min(100%, 760px);
          max-height: calc(100vh - 44px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          background: linear-gradient(180deg, #ffffff 0%, #fff8f1 100%);
          border-radius: 30px;
          padding: 34px;
          position: relative;
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(245, 124, 0, 0.18);
          animation: modalEnter 0.25s ease;
        }

        .modal-close {
          position: sticky;
          top: 0;
          margin-left: auto;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          border: 1px solid rgba(93, 64, 55, 0.12);
          background: #fff;
          color: #5d4037;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          box-shadow: 0 10px 24px rgba(93, 64, 55, 0.12);
        }

        .modal-icon {
          width: 70px;
          height: 70px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f57c00, #ff9800);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 24px;
          box-shadow: 0 15px 35px rgba(245, 124, 0, 0.28);
        }

        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f57c00;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .modal-card h3 {
          color: #5d4037;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -1px;
          margin: 0 0 18px;
        }

        .modal-text {
          color: #6d4c41;
          font-size: 1.05rem;
          line-height: 1.75;
          font-weight: 600;
          margin: 0 0 26px;
        }

        .modal-items {
          display: grid;
          gap: 12px;
          margin-bottom: 30px;
        }

        .modal-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #5d4037;
          font-weight: 800;
          line-height: 1.5;
        }

        .modal-item svg {
          color: #f57c00;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 22px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f57c00, #ff9800);
          color: #fff;
          text-decoration: none;
          font-weight: 950;
          box-shadow: 0 16px 34px rgba(245, 124, 0, 0.28);
        }

        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 78px 18px;
          }

          .services-header {
            margin-bottom: 48px;
          }

          .services-header h2 {
            font-size: clamp(1.8rem, 8vw, 2.45rem);
            letter-spacing: -1px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 26px;
            border-radius: 24px;
          }

          .services-alert {
            padding: 30px 22px;
            border-radius: 24px;
          }

          .modal-overlay {
            padding: 0;
          }

          .modal-scroll {
            align-items: flex-end;
            padding: 0;
          }

          .modal-card {
            width: 100%;
            max-height: 88vh;
            border-radius: 26px 26px 0 0;
            padding: 22px 20px 24px;
          }

          .modal-close {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            top: 0;
          }

          .modal-icon {
            width: 58px;
            height: 58px;
            border-radius: 18px;
            margin-bottom: 18px;
          }

          .modal-card h3 {
            font-size: clamp(1.6rem, 8vw, 2.2rem);
            line-height: 1.12;
          }

          .modal-text {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .modal-whatsapp {
            padding: 15px 18px;
            font-size: 0.92rem;
          }
        }
      `}</style>
    </section>
  );
}