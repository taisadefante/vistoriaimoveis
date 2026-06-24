# Landing Page Premium - Flávia Fonseca | Vistoria de Imóveis

Projeto completo em Next.js com componentes separados, animações de entrada, hover em cards/botões, ícone oficial do WhatsApp via `react-icons`, CTA final chamativo e footer com crédito para Defan Soluções Digitais.

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Depois acesse:

```txt
http://localhost:3000
```

## Como editar o WhatsApp

Abra o arquivo:

```txt
src/data/site.ts
```

Troque:

```ts
phone: "5521999999999"
```

pelo número correto da Flávia, no formato com DDI + DDD + número.

Exemplo:

```ts
phone: "5521988887777"
```

## Estrutura principal

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/components/Header.tsx
src/components/HeroSection.tsx
src/components/AboutSection.tsx
src/components/ServicesSection.tsx
src/components/BenefitsSection.tsx
src/components/ProcessSection.tsx
src/components/TestimonialsSection.tsx
src/components/FAQSection.tsx
src/components/CTASection.tsx
src/components/Footer.tsx
src/components/FloatingWhatsapp.tsx
src/components/WhatsappButton.tsx
src/components/Motion.tsx
src/data/site.ts
```
