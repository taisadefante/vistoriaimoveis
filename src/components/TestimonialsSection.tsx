"use client";

import { Quote, Star, ShieldCheck } from "lucide-react";
import { Reveal } from "./Motion";

const testimonials = [
  {
    name: "Mariana Lopes",
    role: "Proprietária",
    text: "A vistoria trouxe mais segurança na entrega do imóvel e deixou tudo muito bem documentado.",
  },
  {
    name: "Carlos Henrique",
    role: "Inquilino",
    text: "O relatório ficou claro, com fotos e observações importantes. Facilitou muito o processo.",
  },
  {
    name: "Fernanda Rocha",
    role: "Compradora",
    text: "Consegui avaliar melhor o imóvel antes de fechar negócio. Atendimento muito profissional.",
  },
  {
    name: "Rafael Moreira",
    role: "Corretor de imóveis",
    text: "O laudo ajudou na negociação e trouxe mais transparência para todas as partes.",
  },
  {
    name: "Juliana Martins",
    role: "Locadora",
    text: "Atendimento rápido, organizado e com explicações claras do início ao fim.",
  },
  {
    name: "Patrícia Almeida",
    role: "Síndica",
    text: "Gostei muito da organização do relatório e da atenção aos detalhes durante a vistoria.",
  },
  {
    name: "André Carvalho",
    role: "Investidor imobiliário",
    text: "O serviço ajudou a identificar pontos importantes antes da compra do imóvel.",
  },
  {
    name: "Beatriz Nogueira",
    role: "Cliente residencial",
    text: "Tudo foi feito com cuidado, pontualidade e muita clareza nas informações.",
  },
];

export default function TestimonialsSection() {
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-blur" />

      <div className="testimonials-container">
        <Reveal>
          <div className="testimonials-header">
            <span className="testimonials-badge">
              <ShieldCheck size={16} color="#F57C00" />
              Confiança
            </span>

            <h2>
              Profissionalismo que transmite{" "}
              <span>confiança e segurança</span>
            </h2>

            <p>
              Atendimento cuidadoso, relatórios detalhados e comunicação clara
              durante todas as etapas da vistoria.
            </p>
          </div>
        </Reveal>

        <div className="carousel-wrap">
          <div className="carousel-track">
            {carouselItems.map((item, index) => (
              <article className="testimonial-card" key={`${item.name}-${index}`}>
                <div className="quote-icon">
                  <Quote size={68} />
                </div>

                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} fill="#F57C00" />
                  ))}
                </div>

                <p>“{item.text}”</p>

                <div className="person">
                  <div className="avatar">{item.name.charAt(0)}</div>

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          width: 100%;
          padding: 90px 0 95px;
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #fff8f1 48%,
            #f6efe8 100%
          );
          position: relative;
          overflow: hidden;
        }

        .testimonials-blur {
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(245, 124, 0, 0.1);
          filter: blur(55px);
          position: absolute;
          right: -190px;
          bottom: -190px;
        }

        .testimonials-container {
          width: min(96%, 1720px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .testimonials-header {
          text-align: center;
          max-width: 1280px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .testimonials-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: #fff4e8;
          border: 1px solid rgba(245, 124, 0, 0.25);
          color: #5d4037;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

       .testimonials-header h2 {
  color: #5d4037;
  font-size: clamp(1.8rem, 2.6vw, 3rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0 auto 24px;
  max-width: 850px;
}

        .testimonials-header h2 span {
          white-space: nowrap;
          background: linear-gradient(135deg, #9b561f 0%, #f57c00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .testimonials-header p {
          color: #6d4c41;
          font-size: 1.05rem;
          line-height: 1.85;
          font-weight: 500;
          max-width: 850px;
          margin: 0 auto;
        }

        .carousel-wrap {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 8px 0 22px;
        }

        .carousel-wrap::before,
        .carousel-wrap::after {
          content: "";
          position: absolute;
          top: 0;
          width: 90px;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .carousel-wrap::before {
          left: 0;
          background: linear-gradient(90deg, #fff8f1 0%, transparent 100%);
        }

        .carousel-wrap::after {
          right: 0;
          background: linear-gradient(270deg, #fff8f1 0%, transparent 100%);
        }

        .carousel-track {
          display: flex;
          gap: 26px;
          width: max-content;
          animation: testimonialsScroll 42s linear infinite;
          will-change: transform;
        }

        .carousel-wrap:hover .carousel-track {
          animation-play-state: paused;
        }

        .testimonial-card {
          width: clamp(360px, 24vw, 440px);
          min-height: 285px;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(180deg, #ffffff 0%, #fff9f3 100%);
          border: 1px solid rgba(93, 64, 55, 0.1);
          box-shadow: 0 18px 45px rgba(93, 64, 55, 0.08);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-icon {
          position: absolute;
          top: 22px;
          right: 24px;
          color: rgba(245, 124, 0, 0.1);
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 22px;
          color: #f57c00;
          position: relative;
          z-index: 2;
        }

        .testimonial-card p {
          color: #5d4037;
          font-size: 1.04rem;
          line-height: 1.75;
          font-weight: 650;
          margin: 0 0 28px;
          position: relative;
          z-index: 2;
        }

        .person {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f57c00 0%, #ff9800 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          box-shadow: 0 10px 22px rgba(245, 124, 0, 0.22);
          flex-shrink: 0;
        }

        .person strong {
          display: block;
          color: #5d4037;
          font-size: 1rem;
          font-weight: 950;
        }

        .person span {
          display: block;
          color: #f57c00;
          font-size: 0.86rem;
          font-weight: 800;
          margin-top: 2px;
        }

        @keyframes testimonialsScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

       @media (max-width: 1100px) {
  .testimonials-header h2 {
    font-size: clamp(1.8rem, 4.5vw, 2.6rem);
    max-width: 700px;
  }

  .testimonials-header h2 span {
    white-space: normal;
  }
}

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 78px 0 82px;
          }

          .testimonials-container {
            width: 100%;
          }

          .testimonials-header {
            margin-bottom: 52px;
            padding: 0 20px;
          }

         .testimonials-header h2 {
  font-size: clamp(1.6rem, 7vw, 2.1rem);
  line-height: 1.15;
  letter-spacing: -0.8px;
}

          .testimonials-header p {
            font-size: 1rem;
            line-height: 1.75;
          }

          .testimonial-card {
            width: 310px;
            min-height: 320px;
            padding: 26px;
            border-radius: 24px;
          }

          .carousel-track {
            gap: 18px;
            animation-duration: 52s;
          }

          .carousel-wrap::before,
          .carousel-wrap::after {
            width: 44px;
          }
        }
      `}</style>
    </section>
  );
}