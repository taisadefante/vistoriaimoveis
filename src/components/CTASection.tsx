import { MessageCircle, ShieldCheck, Sparkles, FileCheck2 } from "lucide-react";
import { Reveal } from "./Motion";
import WhatsappButton from "./WhatsappButton";

export default function CTASection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 5.8vw",
        background:
          "linear-gradient(180deg, #F6EFE8 0%, #FFF8F1 45%, #FFFFFF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "36px",
              padding: "70px 6vw",
              background:
                "linear-gradient(135deg, #5D4037 0%, #8A4D2A 48%, #F57C00 100%)",
              color: "#fff",
              boxShadow: "0 30px 80px rgba(93,64,55,.22)",
              border: "1px solid rgba(255,255,255,.18)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "rgba(255,255,255,.13)",
                filter: "blur(35px)",
                position: "absolute",
                top: "-170px",
                right: "-120px",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background: "rgba(255,152,0,.22)",
                filter: "blur(30px)",
                position: "absolute",
                bottom: "-90px",
                left: "-70px",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "880px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.14)",
                  border: "1px solid rgba(255,255,255,.25)",
                  color: "#fff",
                  fontSize: ".8rem",
                  fontWeight: 900,
                  letterSpacing: ".7px",
                  textTransform: "uppercase",
                  marginBottom: "22px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Sparkles size={18} />
                Pronto para proteger seu imóvel?
              </span>

              <h2
                style={{
                  fontSize: "clamp(2.3rem, 4.6vw, 4.8rem)",
                  lineHeight: 1.03,
                  fontWeight: 950,
                  letterSpacing: "-2.5px",
                  margin: "0 0 22px",
                  maxWidth: "900px",
                }}
              >
                Agende sua vistoria e receba tudo documentado com clareza.
              </h2>

              <p
                style={{
                  fontSize: "1.12rem",
                  lineHeight: 1.75,
                  fontWeight: 600,
                  opacity: 0.95,
                  maxWidth: "760px",
                  margin: "0 0 34px",
                }}
              >
                Fale com Flávia Fonseca pelo WhatsApp, envie os dados do imóvel
                e receba uma orientação rápida para realizar sua vistoria.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  alignItems: "center",
                  marginBottom: "34px",
                }}
              >
                <WhatsappButton variant="primary" className="big-cta">
                  Quero agendar minha vistoria
                </WhatsappButton>

                <a
                  href="#servicos"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "15px 24px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,.13)",
                    border: "1px solid rgba(255,255,255,.28)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 900,
                    backdropFilter: "blur(8px)",
                    transition: "all .3s ease",
                  }}
                >
                  <MessageCircle size={20} />
                  Ver serviços
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {[
                  { icon: <ShieldCheck size={18} />, text: "Mais segurança" },
                  { icon: <FileCheck2 size={18} />, text: "Laudo profissional" },
                  { icon: <Sparkles size={18} />, text: "Atendimento direto" },
                ].map((item) => (
                  <span
                    key={item.text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,.12)",
                      border: "1px solid rgba(255,255,255,.22)",
                      color: "#fff",
                      fontSize: ".9rem",
                      fontWeight: 800,
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
