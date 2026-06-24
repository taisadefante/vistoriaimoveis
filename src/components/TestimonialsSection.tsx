import { Quote, Star, ShieldCheck } from "lucide-react";
import { Reveal } from "./Motion";

const testimonials = [
  {
    name: "Cliente proprietário",
    text: "A vistoria trouxe mais segurança na entrega do imóvel e deixou tudo muito bem documentado.",
  },
  {
    name: "Cliente inquilino",
    text: "O relatório ficou claro, com fotos e observações importantes. Facilitou muito o processo.",
  },
  {
    name: "Cliente comprador",
    text: "Consegui avaliar melhor o imóvel antes de fechar negócio. Atendimento muito profissional.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 5.8vw",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF8F1 48%, #F6EFE8 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(245,124,0,.08)",
          filter: "blur(45px)",
          position: "absolute",
          right: "-150px",
          bottom: "-150px",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: "820px",
              margin: "0 auto 60px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#FFF4E8",
                border: "1px solid rgba(245,124,0,.3)",
                color: "#5D4037",
                fontSize: ".78rem",
                fontWeight: 900,
                letterSpacing: ".65px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              <ShieldCheck size={16} color="#F57C00" />
              Confiança
            </span>

            <h2
              style={{
                fontSize: "clamp(2.25rem, 4.2vw, 4.3rem)",
                lineHeight: 1.03,
                color: "#5D4037",
                fontWeight: 950,
                letterSpacing: "-2px",
                margin: "0 0 18px",
              }}
            >
              Profissionalismo que transmite segurança.
            </h2>

            <p
              style={{
                color: "#6D4C41",
                fontSize: "1.08rem",
                lineHeight: 1.75,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Atendimento cuidadoso, relatório organizado e comunicação clara
              em cada etapa da vistoria.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article
                style={{
                  height: "100%",
                  padding: "32px",
                  borderRadius: "28px",
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FFF9F3 100%)",
                  border: "1px solid rgba(93,64,55,.1)",
                  boxShadow: "0 16px 38px rgba(93,64,55,.07)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all .3s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "22px",
                    right: "24px",
                    color: "rgba(245,124,0,.12)",
                  }}
                >
                  <Quote size={70} />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    marginBottom: "22px",
                    color: "#F57C00",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="#F57C00" />
                  ))}
                </div>

                <p
                  style={{
                    color: "#5D4037",
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    fontWeight: 650,
                    margin: "0 0 26px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  “{item.text}”
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 950,
                      boxShadow: "0 10px 22px rgba(245,124,0,.22)",
                    }}
                  >
                    {item.name.charAt(8) || "C"}
                  </div>

                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "#5D4037",
                        fontSize: "1rem",
                        fontWeight: 950,
                      }}
                    >
                      {item.name}
                    </strong>

                    <span
                      style={{
                        display: "block",
                        color: "#F57C00",
                        fontSize: ".86rem",
                        fontWeight: 800,
                        marginTop: "2px",
                      }}
                    >
                      Vistoria de imóveis
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
