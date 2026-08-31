// Registro de SEO/GEO: origem canônica, entrada por rota e o texto do llms.txt.
// Fonte única lida pelo pré-render (`entry-ssr.tsx`).
//
// Por que existe: o HTML bruto da SPA era `<div id="root"></div>`. O Google até
// renderiza JavaScript, mas GPTBot, ClaudeBot, PerplexityBot e OAI-SearchBot não
// — para eles o site não existia. A base `geo` de condições clínicas (site.ts)
// só tinha valor se chegasse ao HTML, e é isso que este arquivo faz.

import { BUSINESS, CRM, EMAIL, INSTAGRAM, RQE, SITE_URL, WHATSAPP_NUMBER, geo, site } from "./site";

/** Sem barra final. Produção responde no ápice (www redireciona 301). */
export const ORIGIN = SITE_URL;

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export type Rota = { path: string; title: string; description: string; keywords: string[] };

export const rotas: Rota[] = [
  {
    path: "/",
    title: "Médica de Família em São Paulo | Dra. Angélica Manfroi",
    description:
      `Dra. Angélica Manfroi (${CRM} · ${RQE}), Médica de Família e Comunidade em São Paulo, ` +
      "com formação em Medicina do Estilo de Vida. Acompanhamento contínuo de hipertensão, " +
      "diabetes, obesidade, climatério e menopausa, sono, ansiedade, dor crônica e check-up " +
      "preventivo. Consulta de 50 minutos.",
    keywords: [
      "médica de família em São Paulo",
      "medicina de família e comunidade São Paulo",
      "médica de família Pinheiros",
      "medicina do estilo de vida São Paulo",
      "acompanhamento de hipertensão e diabetes",
      "climatério e menopausa São Paulo",
      "reposição hormonal climatério",
      "cannabis medicinal ansiedade sono dor crônica",
      "check-up preventivo adulto São Paulo",
      "consulta de 50 minutos médica",
      "Dra. Angélica Manfroi",
    ],
  },
];

/** JSON-LD servido no HTML bruto — é o único que crawler sem JavaScript lê. */
export function grafoJsonLd() {
  const physician = {
    "@type": "Physician",
    "@id": `${ORIGIN}/#physician`,
    name: site.doctor,
    description: site.specialty,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    identifier: `${CRM} · ${RQE}`,
    medicalSpecialty: "PrimaryCare",
    telephone: `+${WHATSAPP_NUMBER}`,
    email: EMAIL,
    sameAs: [INSTAGRAM],
    areaServed: { "@type": "City", name: "São Paulo" },
    address: site.locations.items.map((u) => ({
      "@type": "PostalAddress",
      name: u.name,
      streetAddress: u.address,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    })),
    parentOrganization: {
      "@type": "Organization",
      name: BUSINESS.legalName,
      taxID: BUSINESS.cnpj,
    },
    // As condições que a médica realmente acompanha. Ajuda o buscador a ligar o
    // profissional ao problema que o paciente digita, não só à especialidade.
    knowsAbout: geo.conditions.map((c) => c.name),
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${ORIGIN}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: site.faq.items.map(([pergunta, resposta]) => ({
      "@type": "Question",
      name: pergunta,
      acceptedAnswer: { "@type": "Answer", text: resposta },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: site.doctor,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#physician` },
  };

  return { "@context": "https://schema.org", "@graph": [physician, website, faq] };
}

/** `llms.txt`: markdown limpo que motores generativos leem sem executar script. */
export function llmsTxt() {
  const lista = (rotulo: string, itens: readonly string[]) =>
    itens.length ? [`- ${rotulo}: ${itens.join("; ")}`] : [];

  return [
    `# ${site.doctor}`,
    "",
    `> ${site.specialty} em São Paulo/SP, com formação em Medicina do Estilo de Vida.`,
    "> Acompanhamento contínuo do adulto: doenças crônicas, climatério e menopausa,",
    `> sono, ansiedade, dor crônica e prevenção. Registro: ${CRM} · ${RQE}.`,
    "",
    "## Ficha",
    "",
    `- Profissional: ${site.doctor}`,
    `- Especialidade: ${site.specialty}`,
    `- Registro: ${CRM} · ${RQE}`,
    `- E-mail: ${EMAIL}`,
    `- Instagram: ${INSTAGRAM}`,
    `- Razão social: ${BUSINESS.legalName} (CNPJ ${BUSINESS.cnpj})`,
    `- Site: ${ORIGIN}/`,
    "",
    "## Locais e horários de atendimento",
    "",
    ...site.locations.items.map((u) => `- ${u.name} — ${u.address}. ${u.schedule}`),
    "",
    "## Sobre a médica",
    "",
    ...site.about.paragraphs,
    "",
    "## Diferenciais",
    "",
    ...site.differentials.items.map((d: string) => `- ${d}`),
    "",
    "## Contextos de cuidado",
    "",
    ...site.conditions.flatMap((c) => [
      `### ${c.title}`,
      "",
      c.text,
      "",
      `Quando procurar: ${c.when}`,
      "",
    ]),
    `### ${site.children.title}`,
    "",
    site.children.text,
    "",
    // O bloco abaixo é o que faz o site ser citável quando alguém pergunta a um
    // motor generativo sobre a doença, e não sobre a médica.
    "## Condições acompanhadas em detalhe",
    "",
    ...geo.conditions.flatMap((c) => [
      `### ${c.name}${c.alternateName ? ` (${c.alternateName})` : ""}`,
      "",
      c.description,
      "",
      ...lista("Sintomas", c.symptoms),
      ...lista("Fatores de risco", c.riskFactors),
      ...lista("Exames", c.tests),
      ...lista("Tratamento e acompanhamento", c.treatments),
      ...lista("Complicações possíveis", c.complications),
      "",
    ]),
    "## Perguntas frequentes",
    "",
    ...site.faq.items.flatMap(([p, r]) => [`### ${p}`, "", r, ""]),
    "## Observações",
    "",
    "- Atendimento particular; o plano Alice é aceito. O agendamento é feito pelo",
    "  WhatsApp ou pelo formulário do site.",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é",
    "  indicada sem avaliação presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
