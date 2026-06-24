export const siteConfig = {
  name: "Flávia Fonseca",
  specialty: "Vistoria de Imóveis",
  phone: "5521999999999",
  city: "Atendimento sob consulta",
  whatsappMessage:
    "Olá, Flávia! Vim pela landing page e gostaria de solicitar uma vistoria de imóvel.",
  defanUrl: "https://defan.com.br"
};

export function whatsappUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}
