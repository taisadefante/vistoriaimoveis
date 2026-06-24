import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/data/site";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

export default function WhatsappButton({ children, variant = "primary", className = "" }: Props) {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button whatsapp-button-${variant} ${className}`}
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      {children}
    </a>
  );
}
