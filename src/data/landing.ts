export type IconName =
  | "arrow-right"
  | "building"
  | "check"
  | "check-circle"
  | "mail"
  | "map-pin"
  | "menu"
  | "phone"
  | "play"
  | "shield"
  | "twitter"
  | "workflow"
  | "youtube"
  | "linkedin"
  | "user"
  | "zap";

export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  tone?: "primary" | "accent";
}

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
  tone: "primary" | "accent";
}

export interface ChecklistItem {
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink extends NavLink {
  icon: IconName;
}

export const siteMeta = {
  title: "STP | Infraestructura de pagos digitales",
  description:
    "Landing de alta fidelidad para STP: infraestructura de pagos digitales con foco en velocidad, seguridad, accesibilidad y rendimiento.",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  badge: "Infraestructura de pagos digitales",
  title: "Transformamos la manera de hacer pagos digitales",
  highlight: "pagos digitales",
  description:
    "Conectamos instituciones financieras con tecnología de última generación para procesar transferencias instantáneas, seguras y eficientes.",
  primaryCta: { label: "Comenzar ahora", href: "#contacto" },
  secondaryCta: { label: "Ver demostración", href: "#soluciones" },
  kpis: [
    { value: "99.9%", label: "Disponibilidad" },
    { value: "<2s", label: "Tiempo de proceso" },
    { value: "24/7", label: "Soporte activo" },
  ] satisfies Metric[],
};

export const benefitsIntro = {
  title: "¿Por qué elegir STP?",
  description:
    "Tecnología de última generación que impulsa tu negocio hacia el futuro de los pagos digitales",
};

export const features: Feature[] = [
  {
    icon: "zap",
    title: "Velocidad sin precedentes",
    description:
      "Procesa transferencias en menos de 2 segundos con nuestra infraestructura optimizada. Opera 24/7 sin interrupciones.",
    tone: "primary",
  },
  {
    icon: "shield",
    title: "Seguridad garantizada",
    description:
      "Cumplimiento total con estándares PCI-DSS y cifrado de extremo a extremo. Protección avanzada contra fraude.",
    tone: "accent",
  },
  {
    icon: "workflow",
    title: "Integración simplificada",
    description:
      "API REST moderna con documentación completa. Conecta tu sistema en días, no meses. SDKs disponibles en múltiples lenguajes.",
    tone: "primary",
  },
];

export const benefitMetrics: Metric[] = [
  { value: "+500", label: "Instituciones conectadas", tone: "primary" },
  { value: "$10B+", label: "Procesados mensualmente", tone: "accent" },
  { value: "ISO 27001", label: "Certificación de seguridad", tone: "primary" },
];

export const platform = {
  eyebrow: "Plataforma completa",
  title: "Infraestructura robusta para tu operación financiera",
  description:
    "Nuestra plataforma ofrece todas las herramientas necesarias para gestionar, monitorear y optimizar tus operaciones de pago. Desde la integración inicial hasta el soporte continuo, te acompañamos en cada paso del proceso.",
  cta: { label: "Explorar la plataforma", href: "#contacto" },
};

export const platformChecklist: ChecklistItem[] = [
  { label: "API RESTful con documentación completa y actualizada" },
  { label: "Webhooks en tiempo real para notificaciones instantáneas" },
  { label: "Panel de control avanzado con analytics y reportes" },
  { label: "Soporte técnico especializado disponible 24/7" },
];

export const compatibility = {
  title: "Tecnologías compatibles",
  description: "Integración con los principales estándares de la industria",
  tags: ["REST API", "SPEI", "ISO 20022", "OAuth 2.0", "Webhook"],
};

export const contact = {
  title: "¿Listo para transformar tus pagos digitales?",
  description:
    "Completa el formulario y nuestro equipo de especialistas se pondrá en contacto contigo para una demostración personalizada de nuestra plataforma.",
  privacyNote:
    "Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.",
};

export const formBenefits = [
  "Respuesta en menos de 24 horas",
  "Demo personalizada sin compromiso",
  "Asesoría técnica especializada",
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Producto",
    links: [
      { label: "Características", href: "#beneficios" },
      { label: "Integraciones", href: "#soluciones" },
      { label: "Documentación", href: "#soluciones" },
      { label: "Precios", href: "#contacto" },
      { label: "API Reference", href: "#soluciones" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Acerca de", href: "#inicio" },
      { label: "Blog", href: "#soluciones" },
      { label: "Carreras", href: "#contacto" },
      { label: "Soporte", href: "#contacto" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Términos de servicio", href: "#contacto" },
  { label: "Política de privacidad", href: "#contacto" },
  { label: "Aviso legal", href: "#contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#contacto", icon: "linkedin" },
  { label: "X", href: "#contacto", icon: "twitter" },
  { label: "YouTube", href: "#contacto", icon: "youtube" },
];

export const footerContact = {
  address: "Av. Insurgentes Sur 1602, Ciudad de México",
  phone: "+52 55 1234 5678",
  email: "contacto@stp.com.mx",
  description:
    "Sistema de Transferencias y Pagos. Infraestructura tecnológica de vanguardia para procesar pagos digitales de forma rápida, segura y eficiente.",
  copyright:
    "© 2026 Sistema de Transferencias y Pagos, S.A. de C.V. Todos los derechos reservados.",
  regulation: "Institución regulada por la CNBV y Banco de México",
};
